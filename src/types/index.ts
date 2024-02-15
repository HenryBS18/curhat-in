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

export type Quiz = {
  title: string
  description: string
}

export type Quizzes = Quiz[]

export type Question = {
  no: number
  question: string
  choices: {
    a: string
    b: string
    c: string
    d: string
  }
  correctAnswer: 'a' | 'b' | 'c' | 'd'
}

export type QuizStore = {
  quizzes: Quizzes
  questions: Question[][]
  totalTrue: number
  setTotalTrue: () => void
}