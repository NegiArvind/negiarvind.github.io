import React from "react";

const projects = [
  {
    title: "Vendor Recommendations",
    desc: "Recommendation engine for matching vendors to buyers using Elasticsearch and tuned scoring.",
    tech: ["Java", "Elasticsearch", "Node.js"],
  },
  {
    title: "Enhanced Data Synchronization Pipeline",
    desc: "Reliable pipeline with retries, transformations, and monitoring using RabbitMQ.",
    tech: ["RabbitMQ", "Java", "Kubernetes"],
  },
  {
    title: "Vendor Dashboard & Showcase",
    desc: "Dashboards and features to improve partner visibility and analytics.",
    tech: ["React", "Node.js", "Elasticsearch"],
  },
];

const Projects = () => (
  <div className="space-y-6">
    <div className="card">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <article key={p.title} className="p-4 rounded-lg bg-white/3">
            <div className="project-img mb-3"></div>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="muted mt-1">{p.desc}</p>
            <div className="mt-3 flex gap-2 flex-wrap">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-white/5 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
);
export default Projects;
