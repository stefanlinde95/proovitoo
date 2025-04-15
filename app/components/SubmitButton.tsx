"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-label="Otsi"
      className="px-6 py-1 bg-white border border-red-600 text-red-600 hover:border-red-700 hover:text-red-700 duration-300 ease-out rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? "Otsin..." : "Otsi"}
    </button>
  );
};

export default SubmitButton;
