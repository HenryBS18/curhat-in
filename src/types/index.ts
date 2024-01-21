type ChatbotStore = {
  chats: Chat[]
  addNewChat: (newChat: Chat) => void
  loading: boolean
  setLoading: (loading: boolean) => void
  error: boolean
  setError: (error: boolean) => void
}

type Chat = {
  message: string
  from: "user" | "model"
}

type ChatHistory = {
  role: string
  parts: string
}

type CreatePromptProps = {
  prompt: string
  chats: Chat[]
}