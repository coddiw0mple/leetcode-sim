import graphQLClient from "./graphql-client";
import { questionQuery, QuestionData } from "./queries";

export const fetchQuestion = async (titleSlug: String) => {
  const variables = { titleSlug: titleSlug };
  const { question } = await graphQLClient.request<QuestionData>(
    questionQuery,
    variables,
  );
  return question;
};
