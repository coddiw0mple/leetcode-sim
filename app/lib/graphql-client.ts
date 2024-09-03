import { GraphQLClient } from "graphql-request";

const endpoint = "https://leetcode.com/graphql";

// NEEDED TO PRETEND WE AREN'T A BOT
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Content-Type": "application/json",
  },
});

export default graphQLClient;
