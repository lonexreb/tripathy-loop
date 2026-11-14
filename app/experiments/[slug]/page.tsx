import Link from "next/link";
import { notFound } from "next/navigation";
import { experiments } from "@/lib/experiments";

export function generateStaticParams() {
  return experiments.map(({ slug }) => ({ slug }));
}

export default async function ExperimentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experiment = experiments.find((candidate) => candidate.slug === slug);
  if (!experiment) notFound();

  const integrations = [
    ["GitHub", experiment.github],
    ["Linear", experiment.linear],
    ["Slack", experiment.slack],
    ["Vercel", experiment.vercel],
    ["Modal", experiment.modal],
  ];

  return (
    <main>
      <Link className="back" href="/">← Portfolio</Link>
      <section className="detailHero">
        <div>
          <p className="eyebrow">LANE {String(experiment.id).padStart(2, "0")}</p>
          <h1>{experiment.title}</h1>
          <p className="lede">{experiment.hypothesis}</p>
        </div>
        <span className={`status ${experiment.status}`}>{experiment.status.replace("-", " ")}</span>
      </section>

      <section className="detailGrid">
        <article className="panel">
          <p className="eyebrow">NEXT DECISION</p>
          <h2>{experiment.nextDecision}</h2>
          <p>The lane cannot begin until its idea, falsifiable hypothesis, primary metric and stop condition are recorded.</p>
        </article>
        <article className="panel metrics">
          <div><span>Runs</span><strong>{experiment.runs}</strong></div>
          <div><span>Cost</span><strong>${experiment.costUsd.toFixed(2)}</strong></div>
          <div><span>Latency</span><strong>{experiment.latencySeconds ?? "—"}</strong></div>
          <div><span>Score</span><strong>{experiment.score ?? "—"}</strong></div>
        </article>
      </section>

      <section className="panel">
        <p className="eyebrow">INTEGRATION MAP</p>
        <div className="integrations">
          {integrations.map(([name, value]) => (
            <div key={name}><span>{name}</span><code>{value}</code></div>
          ))}
        </div>
      </section>
    </main>
  );
}
