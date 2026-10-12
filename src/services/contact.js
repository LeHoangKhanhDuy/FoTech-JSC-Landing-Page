const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_INTENTS = new Set(["demo", "trial", "consulting"]);
const DEFAULT_CONTACT_EMAIL = "lhkhanhduy.dev@gmail.com";

function getServerEnv(name) {
  const runtime = globalThis;
  return runtime.process?.env?.[name];
}

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

export default async function handleContactRequest(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Phương thức không được hỗ trợ." });
  }

  const apiKey = getServerEnv("RESEND_API_KEY");
  const from = getServerEnv("RESEND_FROM_EMAIL");
  const to = getServerEnv("CONTACT_TO_EMAIL") || DEFAULT_CONTACT_EMAIL;
  if (!apiKey || !from) {
    return response.status(503).json({
      error: `Hệ thống nhận đăng ký chưa được cấu hình. Vui lòng liên hệ ${DEFAULT_CONTACT_EMAIL}.`,
    });
  }

  const fullName = clean(request.body?.fullName, 120);
  const email = clean(request.body?.email, 254).toLowerCase();
  const phone = clean(request.body?.phone, 32);
  const company = clean(request.body?.company, 160);
  const productName = clean(request.body?.productName, 160);
  const intent = clean(request.body?.intent, 24);

  if (
    fullName.length < 2 ||
    !EMAIL_PATTERN.test(email) ||
    phone.length < 9 ||
    company.length < 2 ||
    !productName ||
    !ALLOWED_INTENTS.has(intent)
  ) {
    return response.status(400).json({ error: "Thông tin đăng ký chưa hợp lệ." });
  }

  const intentLabel = {
    demo: "Đặt lịch demo",
    trial: "Dùng thử miễn phí",
    consulting: "Tư vấn giải pháp",
  }[intent] || "Tư vấn giải pháp";
  const text = [
    "Có đăng ký mới từ website FoTech Solutions:",
    "",
    `Nhu cầu: ${intentLabel}`,
    `Họ và tên người đại diện: ${fullName}`,
    `Email làm việc: ${email}`,
    `Số điện thoại: ${phone}`,
    `Tên doanh nghiệp: ${company}`,
    `Sản phẩm quan tâm: ${productName}`,
  ].join("\n");
  const fields = [
    ["Họ và tên", fullName],
    ["Doanh nghiệp", company],
    ["Email làm việc", email],
    ["Số điện thoại", phone],
    ["Sản phẩm quan tâm", productName],
  ];
  const htmlRows = fields
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:13px 16px;border-bottom:1px solid #e8edf3;color:#64748b;font-size:13px;width:38%;vertical-align:top">${escapeHtml(label)}</td>
          <td style="padding:13px 16px;border-bottom:1px solid #e8edf3;color:#172033;font-size:14px;font-weight:600;vertical-align:top;word-break:break-word">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");
  const html = `
    <div style="margin:0;padding:32px 12px;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#172033">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden">
        <tr>
          <td style="padding:24px 28px;background:#0b4f4a;color:#ffffff">
            <div style="font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#b7e4dc">FoTech Solutions</div>
            <div style="margin-top:10px;font-size:23px;line-height:1.3;font-weight:700">Có đăng ký mới từ website</div>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 28px 8px">
            <div style="display:inline-block;padding:7px 12px;border-radius:999px;background:#e7f4f1;color:#0b4f4a;font-size:12px;font-weight:700">${escapeHtml(intentLabel)}</div>
            <p style="margin:14px 0 18px;color:#475569;font-size:14px;line-height:1.6">Thông tin khách hàng đã gửi qua biểu mẫu đăng ký:</p>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid #e8edf3;border-radius:12px;border-spacing:0;overflow:hidden">
              ${htmlRows}
            </table>
            <p style="margin:20px 0 8px;color:#64748b;font-size:12px;line-height:1.6">Bạn có thể trả lời email này để liên hệ trực tiếp với khách hàng.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 28px;background:#f8fafc;border-top:1px solid #e8edf3;color:#94a3b8;font-size:11px">Email tự động từ website FoTech Solutions</td>
        </tr>
      </table>
    </div>`;

  try {
    const mailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[FoTech Solutions] ${intentLabel} – ${company}`,
        text,
        html,
      }),
    });

    if (!mailResponse.ok) {
      console.error("Resend rejected contact submission", await mailResponse.text());
      return response.status(502).json({
        error: `Gửi đăng ký chưa thành công. Vui lòng thử lại hoặc liên hệ ${DEFAULT_CONTACT_EMAIL}.`,
      });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Unable to send contact submission", error);
    return response.status(502).json({
      error: "Không thể kết nối dịch vụ email. Vui lòng thử lại sau.",
    });
  }
}
