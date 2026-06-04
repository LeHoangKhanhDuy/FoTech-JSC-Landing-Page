import toast from 'react-hot-toast';

export function submitLead(intent: 'demo' | 'trial' | 'consulting') {
  const messages = {
    demo: 'Đội FoTalent AI sẽ liên hệ để đặt lịch demo.',
    trial: 'Yêu cầu trải nghiệm thử đã được ghi nhận.',
    consulting: 'Yêu cầu tư vấn đã được gửi tới FoTech.',
  };

  toast.success(messages[intent]);
}
