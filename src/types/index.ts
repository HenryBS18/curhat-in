export type ChatbotStore = {
  chats: Chat[]
  addNewChat: (newChat: Chat) => void
  loading: boolean
  setLoading: (loading: boolean) => void
  error: boolean
  setError: (error: boolean) => void
}

export type Chat = {
  message: string
  from: "user" | "model"
}

export type ChatHistory = {
  role: string
  parts: string
}

export type CreatePromptProps = {
  prompt: string
  chats: Chat[]
}