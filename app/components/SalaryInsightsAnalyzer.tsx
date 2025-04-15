import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";
import OpenAI from "openai";
import generatePrompt from "../utils/generatePrompt";
import { unstable_cache } from "next/cache";

/**
 * Analyzes salary data for a given occupation and returns analysis by OpenAI in MarkdownRenderer.
 * @constructor
 * @param {string} years - The years of the data.
 * @param {number[]} values - The values of the data.
 * @param {string} occupationLabel - The label of the occupation.
 */

const getOpenAIAnalysis = unstable_cache(
  async (years: string[], values: number[], occupationLabel: string) => {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const promptContent = generatePrompt({ years, values, occupationLabel });
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: promptContent }],
    });

    return chatResponse.choices[0].message.content;
  },
  ["openai-analysis"],
  {
    revalidate: 86400,
  }
);

const SalaryInsightsAnalyzer = async ({
  years,
  values,
  occupationLabel,
}: {
  years: string[];
  values: number[];
  occupationLabel: string;
}) => {
  const content = await getOpenAIAnalysis(years, values, occupationLabel);

  if (!content) {
    return <div>Andmete analüüsimisel tekkis viga</div>;
  }

  return <MarkdownRenderer content={content} />;
};

export default SalaryInsightsAnalyzer;
