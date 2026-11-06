import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 font-semibold text-bg transition hover:scale-[1.03] active:scale-[0.98] disabled:scale-100 disabled:opacity-60"
      disabled={pending}
    >
      {pending ? (
        <>
          <span
            aria-hidden="true"
            className="h-5 w-5 animate-spin rounded-full border-2 border-bg border-b-transparent"
          />
          Sending...
        </>
      ) : (
        <>
          Send message
          <FaPaperPlane className="text-xs opacity-70 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
