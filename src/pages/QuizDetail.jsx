import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { authentication } from "../services/auth";
import { useQuizStore } from '../store/useQuizStore';

import Choice from '../components/Choice';

const QuizDetail = () => {
  const { questions } = useQuizStore(state => state)
  const { id } = useParams()
  const queryParams = new URLSearchParams(location.search)
  const questionParam = queryParams.get('q')
  const [chosenAnswer, setChosenAnswer] = useState('')
  const [answered, setAnswered] = useState(false)

  useEffect(() => {
    authentication()
  }, [])

  const handleAnswer = (answer) => {
    if (answered) {
      return
    }
    setChosenAnswer(answer)
    setAnswered(true)
  }

  const handleFinish = () => {
    sessionStorage.removeItem('totalTrue')
  }

  return (
    <div className='w-full min-h-screen bg-[#FFF0DE] flex flex-col items-center'>
      <div className="w-[90%]">
        <div className='flex justify-between items-center py-3 border-b border-slate-200'>
          <Link to={questionParam === '1' ? '/quiz' : `/quiz/${id}?q=${Number(questionParam) - 1}`} className='flex gap-x-3 cursor-pointer'>
            <img src="/assets/icons/arrow-left-icon.svg" alt="arrow left" width={32} height={32} />

            <p className='text-lg text-[#E38B29] font-bold'>Kembali</p>
          </Link>

          <Link to="/">
            <img src="/logo.svg" alt="Logo" width={150} height={38} />
          </Link>
        </div>

        {
          questions[id] ? (
            <>
              <p className='text-center text-2xl mt-5'>Kategori: <strong className='text-[#E38B29]'>Mindfulness & Relaxation</strong></p>

              <p className='text-[#E38B29] text-4xl text-center font-bold mt-5'>{questionParam}/5</p>

              <div className='w-full h-[340px] bg-[#fad8b2] rounded-[32px] mt-5 flex flex-col items-center justify-between py-12'>
                <p className='text-center text-2xl font-semibold'>{questions[id][Number(questionParam) - 1].question}</p>

                <div className='w-[90%] flex flex-wrap justify-center gap-x-10 gap-y-8'>
                  {
                    ["a", "b", "c", "d"].map((c, i) => (
                      <Choice key={i} choice={questions[id][Number(questionParam) - 1].choices[c]} choices={c} id={id} questionNumber={Number(questionParam)} chosenAnswer={chosenAnswer} handleAnswer={handleAnswer} answered={answered} />
                    ))
                  }
                </div>
              </div>

              <div className='flex justify-end mt-6'>
                {
                  questionParam !== '5' ? (
                    <a href={`/quiz/${id}?q=${Number(questionParam) + 1}`} className='w-[160px] h-[48px] bg-[#E38B29] rounded-xl text-white text-xl font-semibold flex justify-center items-center'>Selanjutnya</a>
                  ) : (
                    <Link to={`/quiz/${id}/score`} className='w-[160px] h-[48px] bg-[#E38B29] rounded-xl text-white text-xl font-semibold flex justify-center items-center' onClick={() => handleFinish}>Selesai</Link>
                  )
                }
              </div>

              <div className='h-[40px]'></div>
            </>
          ) : (
            <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center">
              <h1 className="text-3xl font-bold">Quiz Not Found!</h1>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default QuizDetail