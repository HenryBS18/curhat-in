import { create } from "zustand"
import { Chat, ChatbotStore } from "../types"

const initialChats: Chat[] = [
  {
    from: "user",
    message: "hai, tolong jawab pertanyaan-pertanyaan saya seperti seorang psikolog. berpura-puralah menjadi seorang psikolog. gunakan bahasa yang tidak terlalu formal. tolong jangan pernah menjawab diluar konteks kamu sebagai seorang psikolog. jika saya bertanya hal lain diluar bidang yang kamu kuasai, yaitu psikologi, tolong tolak pertanyaan itu dengan baik.",
  },
  {
    from: "model",
    message: "baiklah saya akan berpura-pura dan menjawab seperti seorang psikolog. saya tidak akan menjawab diluar konteks ilmu saya yaitu psikologi. saya akan berbicara dengan santai seperti teman sehingga kamu nyaman.",
  }
]

export const useChatbotStore = create<ChatbotStore>((set) => ({
  chats: initialChats,
  addNewChat: (newChat) => set((state) => ({ chats: [...state.chats, newChat] })),
  loading: false,
  setLoading: (loading) => set(() => ({ loading: loading })),
  error: false,
  setError: (error) => set(() => ({ error: error }))
}))