import IconCard from '@/components/common/IconCard';
import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import { benefits } from '@/data/landing';

export default function BenefitsSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Lợi ích"
        title="Tại sao chọn FoTalent AI?"
        description="Một nền tảng HRM hiện đại cần đủ dễ dùng cho nhân viên, đủ sâu cho HR và đủ tin cậy cho lãnh đạo."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <IconCard key={benefit.title} item={benefit} delay={index * 0.05} />
        ))}
      </div>
    </Section>
  );
}
