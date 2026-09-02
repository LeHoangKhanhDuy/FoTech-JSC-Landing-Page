import { useState } from 'react';
import { FAQItemData } from '@/modules/cta/types/faqTypes';
import FAQItem from '@/modules/cta/components/FAQItem';

interface FAQGridProps {
  column1: FAQItemData[];
  column2: FAQItemData[];
}

export default function FAQGrid({ column1, column2 }: FAQGridProps) {
  const [openId, setOpenId] = useState<string | null>(column1[0]?.id || null);

  const handleToggle = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-start">
      <div className="space-y-4 lg:space-y-5">
        {column1.map((item, idx) => (
          <FAQItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
            delayIndex={idx}
          />
        ))}
      </div>

      <div className="space-y-4 lg:space-y-5">
        {column2.map((item, idx) => (
          <FAQItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
            delayIndex={idx + 4}
          />
        ))}
      </div>
    </div>
  );
}
