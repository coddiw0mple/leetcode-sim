import { gql } from "graphql-request";

export const questionQuery = gql`
  query questionData($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
      questionId
      title
      titleSlug
      difficulty
      isPaidOnly
      topicTags {
        name
        slug
      }
      stats
      codeSnippets {
        lang
        langSlug
        code
      }
      sampleTestCase
      exampleTestcases
    }
  }
`;

export type QuestionData = {
  question: {
    questionId: string;
    title: string;
    titleSlug: string;
    difficulty: string;
    isPaidOnly: boolean;
    topicTags: {
      name: string;
      slug: string;
    }[];
    stats: string;
    codeSnippets: {
      lang: string;
      langSlug: string;
      code: string;
    }[];
    sampleTestCase: string;
    exampleTestcases: string;
  };
};
