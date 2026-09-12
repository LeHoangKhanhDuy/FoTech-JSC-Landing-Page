import { useScrollTimeline } from '@/modules/fohrm/howitwork/hooks/useScrollTimeline';
import { TimelineProgressLine } from '@/modules/fohrm/howitwork/components/TimelineProgressLine';
import { TimelineNode } from '@/modules/fohrm/howitwork/components/TimelineNode';
import { TimelineStepCard } from '@/modules/fohrm/howitwork/components/TimelineStepCard';
import { TimelineVisualCard } from '@/modules/fohrm/howitwork/components/TimelineVisualCard';
import type { StepData } from '@/modules/fohrm/howitwork/types/howItWorkTypes';

interface HowItWorksTimelineProps {
  steps: StepData[];
  onActionClick?: () => void;
}

export function HowItWorksTimeline({
  steps,
  onActionClick,
}: HowItWorksTimelineProps) {
  const {
    containerRef,
    smoothProgress,
    activeStepIndex,
    setActiveStepIndex,
    stepRefs,
  } = useScrollTimeline(steps.length);

  return (
    <div ref={containerRef} className="relative mt-14 max-w-6xl mx-auto">
      <TimelineProgressLine progress={smoothProgress} />

      <div className="space-y-16 md:space-y-28">
        {steps.map((step, index) => {
          const isReached = activeStepIndex >= index;
          const isEven = index % 2 === 0;

          return (
            <div
              key={step.id}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 pl-14 md:pl-0"
            >
              <div className="absolute left-6 md:left-1/2 top-4 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <TimelineNode
                  stepNumber={step.stepNumber}
                  isActive={isReached}
                  accentColor={step.accentColor}
                  onClick={() => setActiveStepIndex(index)}
                />
              </div>

              {isEven ? (
                <>
                  <div className="order-1 md:order-1 md:pr-12">
                    <TimelineStepCard step={step} isActive={isReached} />
                  </div>

                  <div className="order-2 md:order-2 md:pl-12">
                    <TimelineVisualCard
                      step={step}
                      isActive={isReached}
                      onActionClick={onActionClick}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="order-2 md:order-1 md:pr-12">
                    <TimelineVisualCard
                      step={step}
                      isActive={isReached}
                      onActionClick={onActionClick}
                    />
                  </div>

                  <div className="order-1 md:order-2 md:pl-12">
                    <TimelineStepCard
                      step={step}
                      isActive={isReached}
                      isReversed={true}
                    />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
