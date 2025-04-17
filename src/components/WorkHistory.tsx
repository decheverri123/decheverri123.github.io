import TimelineItem from "./TimelineItem";
import { workHistory } from "./workHistoryData";

export default function WorkHistory() {
  return (
    <section className="mx-auto mb-8 max-w-full rounded-lg bg-base-200 p-4 shadow-xl sm:max-w-4xl sm:p-6">
      <h1 className="font-center mb-4 text-center text-xl font-bold text-secondary sm:text-2xl">
        Work History
      </h1>
      <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
        {workHistory.map((item, idx) => {
          const position = idx % 2 === 0 ? "start" : "end";
          return (
            <TimelineItem
              key={item.date + item.title}
              {...item}
              position={position}
            />
          );
        })}
      </ul>
    </section>
  );
}
