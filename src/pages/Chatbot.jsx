import { useState } from "react";
import BotMessage from "../components/BotMessage";
import InputMessage from "../components/InputMessage";
import Navbar from "../components/Navbar";
import UserMessage from "../components/UserMessage";
import ChatGuideModal from "../components/ChatGuideModal";

const Chatbot = () => {
  const [isGuideShow, setIsGuideShow] = useState(false);

  const messages = [
    {
      message: "Saya sering merasa cemas dan stres akhir-akhir ini. Saya merasa sulit untuk tidur dan fokus pada pekerjaan saya.",
      from: "user"
    },
    {
      message: "Saya mengerti betapa sulitnya merasa cemas dan stres. Apakah ada hal khusus yang memicu perasaan cemas dan stres Anda?",
      from: "bot"
    },
    {
      message: "Saya merasa tertekan dengan pekerjaan saya dan juga hubungan dengan keluarga dan teman-teman saya.",
      from: "user"
    },
    {
      message: "Saya memahami bagaimana itu bisa sangat sulit. Ada beberapa strategi yang dapat membantu mengurangi perasaan cemas dan stres, seperti latihan pernapasan, meditasi, dan olahraga. Apakah Anda pernah mencoba salah satu dari ini sebelumnya?",
      from: "bot"
    },
    {
      message: "Saya belum mencobanya. Apakah Anda punya tips atau saran lain untuk membantu saya mengatasi perasaan ini?",
      from: "user"
    },
    {
      message: "Selain strategi yang telah saya sebutkan, juga sangat penting untuk menjaga kesehatan fisik dan mental Anda dengan makan sehat, tidur cukup, dan memperhatikan kebutuhan emosional Anda. Jika perasaan cemas dan stres berlanjut atau semakin parah, penting untuk mencari bantuan dari ahli kesehatan mental atau dokter. Apakah Anda membutuhkan informasi tambahan tentang kesehatan mental atau sumber daya bantuan yang tersedia di daerah Anda?",
      from: "bot"
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FFF0DE] flex flex-col items-center relative">
      <div className="w-[90%]">
        <Navbar />

        <div className="mt-5 flex justify-between items-center">
          <h1 className="text-[36px] font-bold">Chatbot</h1>

          <button className="w-[186px] h-[56px] border-2 border-[#E38B29] rounded-2xl text-[#E38B29] font-semibold hover:bg-[#E38B29] hover:text-white" onClick={() => setIsGuideShow(true)}>Panduan Obrolan</button>
        </div>
      </div>

      <div className="w-full h-auto border mt-6">
        {
          messages.map((message, i) => {
            if (message.from === "user") {
              return <UserMessage key={i} message={message.message} />
            }
            return <BotMessage key={i} message={message.message} />
          })
        }
      </div>

      <div className="w-full h-[120px]" />

      <InputMessage />

      {
        isGuideShow && <ChatGuideModal setIsGuideShow={setIsGuideShow} />
      }
    </div>
  )
}

export default Chatbot;