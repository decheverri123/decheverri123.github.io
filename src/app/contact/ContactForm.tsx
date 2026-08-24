"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xeajbagy", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const body = (await res.json().catch(() => null)) as {
        errors?: Array<{ message: string }>;
      } | null;
      setErrorMsg(
        body?.errors?.map((err) => err.message).join(", ") ??
          "Submission failed",
      );
      setStatus("error");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Network error");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card mx-auto max-w-2xl border border-secondary/30 bg-base-200 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl text-secondary">Thanks!</h2>
          <p className="text-base-content/80">
            Your message went through. I&apos;ll get back to you soon.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="btn btn-outline btn-sm mt-2"
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="card mx-auto max-w-2xl border border-secondary/20 bg-base-200 shadow-xl"
    >
      <div className="card-body space-y-4">
        <h2 className="card-title text-2xl text-secondary">Send a message</h2>

        <label className="form-control w-full">
          <span className="label-text mb-1 text-base-content/80">Name</span>
          <input
            type="text"
            name="name"
            required
            className="input input-bordered w-full bg-base-100"
          />
        </label>

        <label className="form-control w-full">
          <span className="label-text mb-1 text-base-content/80">Email</span>
          <input
            type="email"
            name="email"
            required
            className="input input-bordered w-full bg-base-100"
          />
        </label>

        <label className="form-control w-full">
          <span className="label-text mb-1 text-base-content/80">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            className="textarea textarea-bordered w-full bg-base-100"
          />
        </label>

        {status === "error" && (
          <div role="alert" className="alert alert-error text-sm">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-secondary"
        >
          {status === "submitting" ? "Sending…" : "Send"}
        </button>
      </div>
    </form>
  );
}
