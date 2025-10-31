import React from "react";

const Experience = () => (
  <div className="space-y-6">
    <div className="card">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="mt-4 space-y-4">
        <div>
          <h3 className="font-semibold">Software Engineer 2 — Cvent</h3>
          <p className="muted">Sep 2020 — Present</p>
          <p className="mt-2 muted">
            Worked on backend and full-stack projects including Vendor
            Recommendations, Data Sync Pipelines, and Vendor Dashboards.
            Technologies: Java, Spring Boot, Node.js, RabbitMQ, Elasticsearch.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Software Engineer Intern — Shipsy</h3>
          <p className="muted">Internship</p>
          <p className="mt-2 muted">
            Contributed to Domino's Android App and DTDC Rider App.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Freelance & Side Projects</h3>
          <p className="muted">2024 — Present</p>
          <p className="mt-2 muted">
            Graphic design, video editing, and small product builds. Explored
            YouTube automation using AI.
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default Experience;
