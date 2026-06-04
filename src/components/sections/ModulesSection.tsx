import IconCard from '@/components/common/IconCard';
import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import { modules } from '@/data/landing';

export default function ModulesSection() {
  return (
    <Section className="bg-slate-50 dark:bg-slate-900/50">
      <SectionHeading
        eyebrow="Modules"
        title="Các phân hệ sẵn sàng mở rộng theo vòng đời nhân sự"
        description="Từ tuyển dụng đến nghỉ việc, doanh nghiệp có thể triển khai từng module theo ưu tiên vận hành."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {modules.map((module, index) => (
          <IconCard key={module.title} item={module} delay={index * 0.04} />
        ))}
      </div>
    </Section>
  );
}
