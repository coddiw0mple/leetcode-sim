"use client";

import { use, useState } from "react";
import { fetchQuestion } from "./lib/fetch-data";
import { queryModel } from "./lib/query-model";

export default function Home() {
  const [titleSlug, setTitleSlug] = useState("add-two-numbers");

  queryModel("llama3", "Why is the sky blue?")
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  const question = use(fetchQuestion(titleSlug));

  return (
    <div>
      <input
        type="text"
        value={titleSlug}
        onChange={(e) => setTitleSlug(e.target.value)}
      />

      <h1>{question.title}</h1>
      <p>Difficulty: {question.difficulty}</p>
      <p>Tags: {question.topicTags.map((tag) => tag.name).join(", ")}</p>
      <p>Sample Test Case:</p>
      <pre>{question.sampleTestCase}</pre>
      <p>Example Test Cases:</p>
      <pre>{question.exampleTestcases}</pre>
    </div>
  );
}
