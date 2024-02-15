import { useEffect } from "react"
import { Link } from "react-router-dom"

import { useQuizStore } from "../store/useQuizStore"
import { authentication } from "../services/auth"

const QuizFinished = () => {
  const { totalTrue } = useQuizStore(state => state)

  useEffect(() => {
    authentication()
  }, [])

  return (
    <div className='w-full min-h-screen bg-[#FFF0DE] flex flex-col items-center'>
      <div className="w-[90%]">
        <div className='flex justify-between items-center py-3 border-b border-slate-200'>
          <div className='flex gap-x-3 cursor-pointer'>
            <img src="/assets/icons/arrow-left-icon.svg" alt="arrow left" width={32} height={32} />

            <p className='text-lg text-[#E38B29] font-bold'>Kembali</p>
          </div>

          <Link to="/">
            <img src="/logo.svg" alt="Logo" width={150} height={38} />
          </Link>
        </div>

        <div className="w-full h-[calc(100vh-70px)] flex flex-col items-center justify-center">
          <h1 className="text-3xl text-[#E38B29] font-bold">Selamat!!!</h1>

          <div className="flex items-start">
            <img src="/assets/images/person-finish-left.svg" alt="" />

            <div className="flex flex-col items-center mt-5">
              <p className="text-2xl mt-4">Kategori: <strong className="text-[#E38B29]">Mindfulness & Relaxation</strong></p>

              <p className="text-2xl mt-4">Anda Menjawab</p>

              <p className="text-5xl mt-4 text-[#E38B29]">{totalTrue}/5</p>

              <p className="text-xl mt-4 text-[#E38B29] font-bold">Soal yang benar</p>
            </div>

            <img src="/assets/images/person-finish-right.svg" alt="" />
          </div>

          <div className="flex gap-x-5">
            <Link to={`/quiz`} className="w-[240px] h-[48px] rounded-3xl border-2 border-[#E38B29] flex justify-center items-center text-[#E38B29] font-bold text-lg hover:bg-[#E38B29] hover:text-white">
              Ulangi Quiz
            </Link>

            <Link to={'/home'} className="w-[240px] h-[48px] rounded-3xl border-2 border-[#E38B29] flex justify-center items-center text-[#E38B29] font-bold text-lg hover:bg-[#E38B29] hover:text-white">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizFinished