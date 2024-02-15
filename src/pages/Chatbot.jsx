import { useEffect, useRef, useState } from "react";
import { useChatbotStore } from "../store/useChatbotStore";
import { authentication } from "../services/auth";

import Navbar from "../components/Navbar";
import InputMessage from "../components/InputMessage";
import ChatGuideModal from "../components/ChatGuideModal";
import UserMessage from "../components/UserMessage";
import BotMessage from "../components/BotMessage";
import LoadingText from "../components/LoadingText";
import NoChatText from "../components/NoChatText";

const Chatbot = () => {
  const [isGuideShow, setIsGuideShow] = useState(false)
  const { chats, loading } = useChatbotStore((state) => state)
  const bottom = useRef(null)

  useEffect(() => {
    authentication()
  }, [])

  useEffect(() => {
    bottom.current.scrollIntoView({ behavior: 'smooth' })
  }, [chats])

  return (
    <div className="w-full min-h-screen bg-[#FFF0DE] flex flex-col items-center relative">
      <div className="w-[90%]">
        <Navbar />

        <div className="mt-5 flex justify-between items-center">
          <h1 className="text-[36px] font-bold">Chatbot</h1>

          <button
            className="w-[186px] h-[56px] border-2 border-[#E38B29] rounded-2xl text-[#E38B29] font-semibold hover:bg-[#E38B29] hover:text-white"
            onClick={() => setIsGuideShow(true)}>
            Panduan Obrolan
          </button>
        </div>
      </div>

      <div className="w-full h-auto mt-6">
        {chats.length === 2 && <NoChatText />}

        {
          chats.map((chat, i) => {
            if (i === 0 || i === 1) return null

            if (chat.from === "user") {
              return <UserMessage key={i} message={chat.message} />
            }
            return <BotMessage key={i} message={chat.message} />
          })
        }

        {loading && <LoadingText />}

        <div ref={bottom} />
      </div>

      <div className="w-full h-[120px]" />

      <InputMessage />

      {isGuideShow && <ChatGuideModal setIsGuideShow={setIsGuideShow} />}
    </div>
  )
}

export default Chatbot;