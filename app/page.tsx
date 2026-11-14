import Link from "next/link";
import { experiments } from "@/lib/experiments";

const phases = ["Claude Code", "GitHub", "Linear", "Slack", "Claude Code"];

export default function Home() {
  const ready = experiments.filter((experiment) => experiment.status !== "awaiting-idea").length;

  return (
    <main>
      <section className="hero">
        <div>
          <p className="eyebrow">RESEARCH OPERATING SYSTEM / SF 2026</p>
          <h1>Tripathy Loop</h1>
          <p className="lede">Six isolated ideas. One visible, reproducible execution loop.</p>
        </div>
        <div className="heroMetric">
          <span>{ready}/6</span>
          <small>ideas assigned</small>
        </div>
      </section>

      <section className="loop" aria-label="Tripathy Loop lifecycle">
        {phases.map((phase, index) => (
          <div className="phase" key={`${phase}-${index}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{phase}</strong>
            {index < phases.length - 1 ? <b aria-hidden="true">→</b> : null}
          </div>
        ))}
      </section>

      <section className="sectionHeader">
        <div>
          <p className="eyebrow">PORTFOLIO</p>
          <h2>Experiment lanes</h2>
        </div>
        <p>Each lane owns its repository, work queue, channel, session, compute and evidence.</p>
      </section>

      <section className="grid">
        {experiments.map((experiment) => (
          <Link className="card" href={`/experiments/${experiment.slug}`} key={experiment.slug}>
            <div className="cardTop">
              <span className="index">{String(experiment.id).padStart(2, "0")}</span>
              <span className={`status ${experiment.status}`}>{experiment.status.replace("-", " ")}</span>
            </div>
            <h3>{experiment.title}</h3>
            <p>{experiment.hypothesis}</p>
            <dl>
              <div><dt>runs</dt><dd>{experiment.runs}</dd></div>
              <div><dt>cost</dt><dd>${experiment.costUsd.toFixed(2)}</dd></div>
              <div><dt>score</dt><dd>{experiment.score ?? "—"}</dd></div>
            </dl>
            <footer>{experiment.nextDecision}<span>↗</span></footer>
          </Link>
        ))}
      </section>
    </main>
  );
}
