import axios, { AxiosResponse } from "axios";

// Define the types for the request payload and response
interface RequestPayload {
  model: string;
  prompt: string;
}

interface ResponseData {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
}

// Set the URL for the OLLAMA API
const url = "http://localhost:11434/api/generate";

// Function to query the OLLAMA model
export async function queryModel(
  model: string,
  prompt: string,
): Promise<string> {
  try {
    // Set the request payload
    const payload: RequestPayload = { model, prompt };

    // Send a POST request to the OLLAMA API
    const response: AxiosResponse<NodeJS.ReadableStream> = await axios.post(
      url,
      payload,
      { responseType: "stream" },
    );

    // Create a promise to handle the response data
    const compiledSentence: string = await new Promise((resolve, reject) => {
      let sentence = "";

      // Iterate over the response data
      response.data.on("data", (chunk: Buffer) => {
        // Assuming each chunk is a JSON string
        const jsonResponse: ResponseData = JSON.parse(chunk.toString());
        sentence += jsonResponse.response;
      });

      // Handle the end of the response
      response.data.on("end", () => {
        resolve(sentence.trim());
      });

      // Handle any errors
      response.data.on("error", (error: Error) => {
        reject(error);
      });
    });

    return compiledSentence;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}
