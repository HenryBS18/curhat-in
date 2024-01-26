import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

const Quiz = () => {
  const quizzes = [
    {
      title: "Mindfulness & Relaxation",
      description: "Temukan teknik relaksasi dan latihan kesadaran untuk mengelola stress sehari-hari."
    },
    {
      title: "Emotional Intelligence",
      description: "Uji tingkat kecerdasan emosional Anda dan pelajari cara mengelola emosi dengan bijak.",
    },
    {
      title: "Anxiety & Stress Management",
      description: "Uji tingkat kecerdasan emosional Anda dan pelajari cara mengelola emosi dengan bijak."
    },
    {
      title: "Self-Care & Well-Being",
      description: "Temukan cara-cara efektif untuk merawat diri sendiri dan meningkatkan kesejahteraan keseluruhan."
    },
    {
      title: "Mood Disorders Awareness",
      description: "Pahami lebih dalam tentang gangguan suasana hati seperti depresi dan bipolar, serta cara mendukung diri sendiri atau orang lain."
    },
    {
      title: "Relationships & Social Connections",
      description: "Eksplorasi bagaimana hubungan sosial dapat memengaruhi  kesehatan mental, dan pelajari cara membangun koneksi yang sehat."
    }
  ]

  return (
    <div className='w-full min-h-screen bg-[#FFF0DE] flex flex-col items-center'>
      <div className="w-[90%]">
        <Navbar />

        <div className="w-full mt-8">
          <div className="w-full flex justify-center">
            <p className="w-[950px] text-center text-[20px]">Jelajahi kesehatan mental Anda melalui <strong>Quiz Interaktif</strong> kami yang informatif dan mendalam, membantu Anda memahami dan merawat kesejahteraan jiwa dengan cara yang positif</p>
          </div>

          <div className="w-full mt-16 flex flex-wrap justify-center gap-x-14 gap-y-14">
            {
              quizzes.map((card, i) => (
                <Link to={`/quiz/${i}?q=1`} className="w-[300px] h-[184px] bg-[#F1A661] rounded-3xl flex flex-col items-center justify-end cursor-pointer" key={i}>
                  <h1 className="w-[90%] text-lg text-white text-center font-bold mb-3">{card.title}</h1>

                  <p className="w-[90%] text-[12px] text-white text-center mb-6">{card.description}</p>
                </Link>
              ))
            }
          </div>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  )
}

export default Quiz