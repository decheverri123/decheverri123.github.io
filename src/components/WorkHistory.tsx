import TimelineItem from "./TimelineItem";

export default function WorkHistory() {
  return (
    <section className="mx-auto mb-8 max-w-full rounded-lg bg-base-200 p-4 shadow-xl sm:max-w-4xl sm:p-6">
      <h1 className="font-center mb-4 text-center text-xl font-bold text-secondary sm:text-2xl">
        Work History
      </h1>
      <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
        <TimelineItem
          date="2022 - 2024"
          title="Software Engineer II"
          subtitle="Data Innovations"
          position="start"
          bulletPoints={[
            "Revitalized Data Innovation's flagship product, transitioning the UI to Angular and the backend to a cloud-native architecture.",
            "Implemented CI/CD pipelines with Jenkins, AWS, Docker, and Kubernetes, improving deployment efficiency and reliability.",
            "Developer on a greenfield Flutter project, creating a cross-platform mobile app with thorough testing.",
          ]}
        />
        <TimelineItem
          date="2020 - 2022"
          title="Software Engineer"
          subtitle="Microsoft"
          position="end"
          bulletPoints={[
            "Developed high-performance solutions in C# and .NET based on project requirements.",
            "Worked with cross-functional teams to deliver scalable solutions in Azure DevOps and ReactJS.",
            "Built CI/CD pipelines in Azure DevOps, ensuring quality and stability of changes for Microsoft engineers.",
          ]}
        />
        <TimelineItem
          date="2015 - 2019"
          title="Education"
          subtitle="Amherst College - Amherst, MA"
          position="start"
          bulletPoints={[
            "Bachelor of Arts: Computer Science",
            "Bachelor of Arts: Neuroscience",
          ]}
        />
      </ul>
    </section>
  );
}
