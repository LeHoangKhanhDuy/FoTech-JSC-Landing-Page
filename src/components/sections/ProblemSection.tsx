import IconCard from '@/components/common/IconCard';
import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import { problems } from '@/data/landing';

export default function ProblemSection() {
  return (
    <Section className="bg-white dark:bg-slate-950">
      <SectionHeading
        eyebrow="Vấn đề vận hành"
        title="Doanh nghiệp đang gặp những vấn đề gì?"
        description="Khi dữ liệu nhân sự phân tán và quy trình còn thủ công, đội HR khó giữ được tốc độ phục vụ nhân viên."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem, index) => (
          <IconCard key={problem.title} item={problem} delay={index * 0.05} />
        ))}
      </div>
    </Section>
  );
}
