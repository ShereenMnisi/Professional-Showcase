type InsightIconName = "experience" | "license" | "location";

function InsightIcon({ name }: { name: InsightIconName }) {
  const paths: Record<InsightIconName, string> = {
    experience: "M3 7.5h18v12H3zM8 7.5V5h8v2.5M3 11h18",
    license:
      "M4 5.5h16v13H4zM8 10h3m-3 3h3m3-3h2m-2 3h2m-8 3h8",
    location:
      "M19 10c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0Zm-4 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="22"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="22"
    >
      <path d={paths[name]} />
    </svg>
  );
}

const insights = [
  {
    icon: "experience",
    value: "4+ years",
    label: "Experience",
  },
  {
    icon: "license",
    value: "Driver’s Licence",
    label: "Licensed Driver",
  },
  {
    icon: "location",
    value: "Johannesburg / Midrand",
    label: "South Africa",
  },
] as const;

export function Insights() {
  return (
    <section
      aria-labelledby="insights-title"
      className="insights"
      id="insights"
    >
      <div className="container">
        <h2 className="section-title" id="insights-title">
          Insights
        </h2>
        <div className="insights__grid">
          {insights.map((insight) => (
            <div className="insight" key={insight.value}>
              <span aria-hidden="true" className="insight__icon">
                <InsightIcon name={insight.icon} />
              </span>
              <p className="insight__value">{insight.value}</p>
              <p className="insight__label">{insight.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
