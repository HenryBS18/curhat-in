import { GoogleGenerativeAI } from "@google/generative-ai"

export const createPrompt = async ({ prompt, chats }: CreatePromptProps): Promise<string> => {
  const genAI = new GoogleGenerativeAI("AIzaSyB3ND7e-1s4ueD3L0otCdQB1JHx_oXOAKw")
  const model = genAI.getGenerativeModel({ model: "gemini-pro" })

  const history: ChatHistory[] = []

  for await (const c of chats) {
    history.push({
      role: c.from,
      parts: c.message
    })
  }

  const chat = model.startChat({
    history: history,
  })

  const result = await chat.sendMessage(prompt)
  const response = result.response.text()

  return response
}