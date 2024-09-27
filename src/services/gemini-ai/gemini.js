import { GoogleGenerativeAI } from "@google/generative-ai"

export const createPrompt = async ({ prompt, chats }) => {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

  const history = []

  for await (const chat of chats) {
    history.push({
      role: chat.from,
      parts: chat.message
    })
  }

  const chat = model.startChat({
    history: history,
  })

  const result = await chat.sendMessage(prompt)
  const response = result.response.text()

  return response
}