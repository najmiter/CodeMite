import { GoogleGenerativeAI } from "@google/generative-ai";
import { FormEvent, useState } from "react";

// replace with your API - bcz this one doesn't work :D
const API_KEY = "AIzaSyDP-tRPpAJ10LG2Kz8ixE9I_3XAPCB2B9c";
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run(prompt: string) {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
}

export default function App() {
    const [prompt, setPrompt] = useState(
        "Write a story about a magic backpack."
    );

    const [response, setResponse] = useState("");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        setResponse("thinking...");

        run(prompt).then((res) => setResponse(res));

        setPrompt("");
    }

    return (
        <main className="bg-black text-white grid place-content-center gap-5 h-screen w-full">
            <form onSubmit={handleSubmit} className="flex gap-1 mx-auto">
                <input
                    type="text"
                    placeholder="Ask me something..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="px-4 w-80 py-2 rounded bg-transparent outline-none border border-indigo-500"
                />
                <button
                    type="submit"
                    className="px-4 py-2 rounded bg-indigo-500"
                >
                    Ask
                </button>
            </form>
            <div
                className="max-w-prose h-40 overflow-auto"
                dangerouslySetInnerHTML={{ __html: `<code>${response}</code>` }}
            >
                {/* {response} */}
            </div>
        </main>
    );
}
