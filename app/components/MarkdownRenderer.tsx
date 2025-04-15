"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ content }: { content: string | null }) => {
  if (!content) {
    return <div className="text-gray-500 italic">Andmete analüüsimine...</div>;
  }

  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default MarkdownRenderer;
