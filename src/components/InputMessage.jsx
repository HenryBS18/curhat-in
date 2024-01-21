import { useState } from "react"
import { createPrompt } from "../services/gemini-ai/gemini";
import { useChatbotStore } from "../store/useChatbotStore";

const InputMessage = () => {
  const [input, setInput] = useState('');
  const { chats, addNewChat, loading, setLoading, setError } = useChatbotStore(state => state)

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const userChat = {
        message: input,
        from: "user"
      }

      setLoading(true)
      addNewChat(userChat)
      setInput('')

      const response = await createPrompt({
        prompt: input,
        chats: chats
      })

      const botChat = {
        message: response,
        from: "model"
      }

      addNewChat(botChat)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
      console.log('error');
    } finally {
      setLoading(false)
      setInput('')
    }
  }

  return (
    <form className="w-full h-[94px] flex justify-center items-center bg-[#FFF0DE] fixed bottom-0" onSubmit={(e) => handleSubmit(e)}>
      <div className="w-[90%] h-full flex justify-between">
        <textarea
          className={`w-[92%] h-[74px] bg-[#FFD8A9] text-black placeholder-black text-lg font-semibold px-6 py-1 resize-none rounded-lg flex flex-col items-center justify-center ${loading ? 'opacity-70' : ''}`}
          placeholder="Ketik di sini..."
          onChange={(e) => handleInput(e)}
          value={input}
          onKeyDown={(e) => { e.key === "Enter" ? handleSubmit(e) : null }}
          disabled={loading}
        />

        <button
          className={`w-[74px] h-[74px] bg-[#E38B29] rounded-lg flex justify-center items-center relative ${loading ? 'opacity-50' : ''}`}
          type="submit"
          disabled={loading}>
          <img src="/assets/icons/send-icon.svg" alt="send" width={60} height={64} className="absolute top-0.5 left-3" />
        </button>
      </div>
    </form>
  )
}

export default InputMessage