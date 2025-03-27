import { OpenAI } from "openai"
import { config } from "./config.js"

const client = new OpenAI({
    apiKey: config.openaiApiKey,
});

export const getCompletion = async (message) => {
    const completion = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: message }],
    });
    return completion.choices[0].message.content;
};

export const getResponse = async (message) => {
    const response = await client.responses.create({
        model: "gpt-4o",
        input: message,
    })
    return response.output_text;
};