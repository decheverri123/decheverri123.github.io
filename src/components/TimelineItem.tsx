export interface TimelineItemProps {
  date: string;
  title: string;
  subtitle?: string;
  bulletPoints: Array<string | React.ReactNode>;
  position?: "start" | "end";
}

export default function TimelineItem({
  date,
  title,
  subtitle,
  bulletPoints,
  position = "end",
}: TimelineItemProps) {
  return (
    <li>
      <hr className="border-base-300" />
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-secondary"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={`timeline-${position} mb-6 sm:mb-10 px-2 sm:px-3 ${position === "start" ? "md:text-end" : ""}`}
      >
        <time className="font-mono font-bold text-white text-xs sm:text-sm">
          {date}
        </time>
        <div className="text-base sm:text-lg font-black text-secondary">
          {title}
        </div>
        {subtitle && (
          <div className="text-sm sm:text-base text-primary font-semibold">
            {subtitle}
          </div>
        )}
        <ul className="mt-2 list-inside list-disc space-y-1 sm:space-y-2 text-xs sm:text-base">
          {bulletPoints.map((point, index) => (
            <li key={index} className="break-words">
              {point}
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-base-300" />
    </li>
  );
}
