import { useState } from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import toast from 'react-hot-toast';

type LeadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  type?: 'demo' | 'trial' | 'login' | 'consulting';
};

export default function LeadModal({
  isOpen,
  onClose,
  title = 'Trải nghiệm FoHRM Miễn Phí 14 Ngày',
  subtitle = 'Nhập thông tin doanh nghiệp để khởi tạo không gian làm việc thử nghiệm trong 5 phút.',
  type = 'trial',
}: LeadModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    employees: '20-50',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success('Đăng ký thành công! Đội ngũ FoHRM sẽ hỗ trợ bạn ngay.');
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl transition-all dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {isSuccess ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
              <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-2xl font-extrabold text-slate-900 dark:text-white">
              Đăng Ký Thành Công!
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Cảm ơn bạn đã lựa chọn <strong>FoHRM</strong>. Chuyên viên tư vấn sẽ liên hệ tới email{' '}
              <span className="font-semibold text-blue-600">{formData.email || 'của bạn'}</span> trong vòng 15 phút.
            </p>
            <div className="mt-6 flex justify-center">
              <Button onClick={handleReset} variant="primary">
                Hoàn tất & Đóng
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                FoHRM Enterprise HR
              </span>
            </div>

            <h3 className="mt-3 text-2xl font-extrabold text-slate-900 dark:text-white">
              {type === 'login' ? 'Đăng nhập FoHRM Platform' : title}
            </h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {type === 'login'
                ? 'Truy cập hệ thống quản trị nhân sự đám mây của doanh nghiệp bạn.'
                : subtitle}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {type !== 'login' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Họ và tên người đại diện *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Email làm việc (Work Email) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-500"
                />
              </div>

              {type !== 'login' && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0987 654 321"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Tên doanh nghiệp
                    </label>
                    <input
                      type="text"
                      placeholder="FoTech JSC"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-500"
                    />
                  </div>
                </div>
              )}

              {type === 'login' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Mật khẩu *
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-500"
                  />
                </div>
              )}

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                >
                  {isSubmitting
                    ? 'Đang xử lý...'
                    : type === 'login'
                    ? 'Đăng Nhập Ngay'
                    : type === 'demo'
                    ? 'Đặt Lịch Xem Demo 1:1'
                    : 'Bắt Đầu Dùng Thử Miễn Phí'}
                </Button>
              </div>
            </form>

            <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-500" aria-hidden="true" />
              <span>Bảo mật dữ liệu 100% theo tiêu chuẩn Luật LĐ & ISO 27001</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
