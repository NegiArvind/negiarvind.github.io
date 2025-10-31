import React from "react";

const skillGroups = {
  Languages: ["Java", "JavaScript", "Python"],
  Backend: ["Spring Boot", "Node.js", "Nest.js"],
  Frontend: ["React", "HTML", "CSS"],
  "Data & Infra": [
    "MongoDB",
    "SQL",
    "Elasticsearch",
    "RabbitMQ",
    "AWS",
    "Docker",
    "Kubernetes",
  ],
};

const Skills = () => (
  <div className="space-y-6">
    <div className="card">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {Object.entries(skillGroups).map(([k, v]) => (
          <div key={k} className="p-4 bg-white/3 rounded-lg">
            <h3 className="font-semibold">{k}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {v.map((s) => (
                <span key={s} className="px-3 py-1 bg-white/5 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default Skills;
