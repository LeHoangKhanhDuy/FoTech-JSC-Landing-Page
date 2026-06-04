import { Bot, Send, Sparkles } from 'lucide-react';
import Button from '@/components/common/Button';
import Reveal from '@/components/common/Reveal';
import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import { submitLead } from '@/services/leadService';

const messages = [
  { from: 'user', text: 'Tôi còn bao nhiêu ngày phép?' },
  { from: 'ai', text: 'Bạn còn 9 ngày phép năm.' },
  { from: 'user', text: 'Tăng ca tháng này bao nhiêu giờ?' },
  { from: 'ai', text: 'Bạn đã tăng ca 14 giờ.' },
];

export default function FinaSection() {
  return (
    <Section className="bg-slate-950 text-white">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          align="left"
          invert
          eyebrow="FINA AI"
          title="FINA - FoTech Intelligent Assistant"
          description="AI Assistant đồng hành cùng HR và nhân viên, giúp tra cứu thông tin phép, công, tăng ca và quy trình nội bộ bằng tiếng Việt."
        />
        <Reveal delay={0.12}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/25 backdrop-blur-xl">
            <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-slate-950 dark:bg-slate-900 dark:text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1972F5] text-white">
                  <Bot className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-black">FINA</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">FoTech Intelligent Assistant</p>
                </div>
              </div>
              <span className="flex items-center gap-2 rounded-full bg-[#00C951]/10 px-3 py-1 text-xs font-bold text-[#00C951]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Online
              </span>
            </div>

            <div className="mt-4 space-y-3 rounded-xl bg-slate-100 p-4 dark:bg-slate-950">
              {messages.map((message, index) => (
                <div key={`${message.text}-${index}`} className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <p
                    className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.from === 'user'
                        ? 'bg-[#1972F5] text-white'
                        : 'border border-slate-200 bg-white text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100'
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
              ))}
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-900">
                <span className="flex-1 px-3 text-sm text-slate-400">Hỏi FINA về chính sách HR...</span>
                <button
                  type="button"
                  aria-label="Gửi câu hỏi"
                  onClick={() => submitLead('trial')}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1972F5] text-white"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.2} className="mt-8">
        <Button variant="secondary" onClick={() => submitLead('demo')}>
          Xem FINA trong buổi demo
        </Button>
      </Reveal>
    </Section>
  );
}
