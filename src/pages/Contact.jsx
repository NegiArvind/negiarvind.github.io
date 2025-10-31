import React from "react";

const Contact = () => (
  <div className="space-y-6">
    <div className="card">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="muted mt-2">
        Want to chat about a role, collaboration, or a project? Drop me a
        message:
      </p>
      <form
        className="mt-4 space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks — form submission requires backend or EmailJS.");
        }}
      >
        <input
          required
          className="w-full p-3 rounded-md bg-white/5"
          placeholder="Your name"
        />
        <input
          required
          type="email"
          className="w-full p-3 rounded-md bg-white/5"
          placeholder="Email"
        />
        <textarea
          required
          className="w-full p-3 rounded-md bg-white/5"
          rows="5"
          placeholder="Message"
        ></textarea>
        <div className="flex gap-3">
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-accent text-black font-semibold"
          >
            Send
          </button>
          <a
            className="px-4 py-2 rounded-lg border border-white/5 muted"
            href="mailto:your.email@example.com"
          >
            Or email me
          </a>
        </div>
      </form>
    </div>
  </div>
);
export default Contact;
