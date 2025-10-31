import React from "react";

const Home = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <div className="card flex gap-6 items-center">
          <img src="/photo.jpeg" alt="Arvind" className="avatar" />
          <div>
            <h1 className="text-3xl font-bold">Hi, I’m Arvind Negi</h1>
            <p className="muted mt-2">
              Software Engineer — Full Stack & Backend. Java, Spring Boot,
              Node.js, React, Microservices, AWS
            </p>
            <p className="mt-4">
              I build reliable backend systems, scalable microservices and clean
              frontend experiences. I enjoy solving tricky systems problems and
              shipping production-quality software.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                className="px-4 py-2 rounded-lg bg-accent text-black font-semibold"
                href="/projects"
              >
                View Projects
              </a>
              <a
                className="px-4 py-2 rounded-lg border border-white/5 text-sm muted"
                href="/contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="card mt-6">
          <h2 className="text-xl font-semibold">Summary</h2>
          <p className="muted mt-2">
            5+ years of experience building microservices, data pipelines, and
            full-stack apps. Currently at Cvent as Software Engineer 2.
            Passionate about backend systems, performance, and maintainable
            code.
          </p>
        </div>

        <div className="card mt-6">
          <h2 className="text-xl font-semibold">Latest Work</h2>
          <ul className="mt-3 space-y-3 muted">
            <li>
              <strong>Vendor Recommendations</strong> — Recommendation engine
              improving match quality using Elasticsearch and tuned scoring.
            </li>
            <li>
              <strong>Data Sync Pipeline</strong> — Robust pipeline with retries
              and monitoring using RabbitMQ.
            </li>
            <li>
              <strong>Vendor Dashboard</strong> — Analytics and showcase
              features to help partners.
            </li>
          </ul>
        </div>
      </div>

      <aside>
        <div className="card">
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="muted mt-2">
            Email: <strong>negiarvind229@gmail.com</strong>
          </p>
          <p className="muted mt-1">
            <strong>Linkedin: </strong><a target="_blank" href="https://www.linkedin.com/in/arvind-n-82a573132/">linkedin.com/in/arvind-n-82a573132</a>
          </p>
          <p className="muted mt-1">
            <strong>Github: </strong><a target="_blank" href="https://github.com/NegiArvind" >github.com/NegiArvind</a>
          </p>
        </div>

        <div className="card mt-5">
          <h3 className="text-lg font-semibold">Skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Java",
              "Spring Boot",
              "Node.js",
              "Nest.js",
              "React",
              "MongoDB",
              "SQL",
              "RabbitMQ",
              "Elasticsearch",
              "Kibana",
              "AWS",
              "Docker",
              "Kubernetes",
              "Android",
              "Unity",
              "Python",
            ].map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full bg-white/3 text-sm font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="card mt-5">
          <h3 className="text-lg font-semibold">Education</h3>
          <p className="muted mt-2">
            <strong>B.Tech</strong> — National Institute of Technology
            Uttarakhand (CGPA 9.27)
          </p>
        </div>
      </aside>
    </div>
  );
};
export default Home;
