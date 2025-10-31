import React from "react";

const About = () => (
  <div className="space-y-6">
    <div className="card">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <p className="muted mt-2">
        I’m Arvind — a full-stack engineer with a focus on backend systems,
        microservices, and developer-friendly APIs. I enjoy building reliable
        systems and shipping clean, maintainable code.
      </p>
      <p className="mt-4">
        My strengths include system design, debugging production issues, and
        working across the stack from database indexing and search
        (Elasticsearch) to frontend UX (React).
      </p>
    </div>

    <div className="card">
      <h3 className="text-xl font-semibold">Values & Process</h3>
      <ul className="mt-3 muted space-y-2">
        <li>
          <strong>Pragmatic design:</strong> Solve real problems with simple,
          maintainable solutions.
        </li>
        <li>
          <strong>Observability:</strong> Logs, metrics, and alerts are
          first-class citizens for every service I build.
        </li>
        <li>
          <strong>Collaboration:</strong> I love code reviews, pairing sessions,
          and mentoring juniors.
        </li>
      </ul>
    </div>
  </div>
);
export default About;
