import { Quote } from 'lucide-react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import { testimonials } from '@/data/landing';

export default function TestimonialsSection() {
  return (
    <Section className="bg-white dark:bg-slate-950">
      <SectionHeading
        eyebrow="Khách hàng"
        title="Đội ngũ vận hành nhân sự cần tốc độ và độ tin cậy"
        description="FoTalent AI được thiết kế cho các vai trò ra quyết định, vận hành và phục vụ nhân viên hằng ngày."
      />
      <div className="mt-12">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3600, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name} className="h-auto">
              <article className="h-full rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                <Quote className="h-8 w-8 text-[#1972F5]" aria-hidden="true" />
                <p className="mt-5 text-base leading-7 text-slate-700 dark:text-slate-200">“{testimonial.quote}”</p>
                <div className="mt-7 border-t border-slate-200 pt-5 dark:border-slate-800">
                  <p className="font-bold text-slate-950 dark:text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}
