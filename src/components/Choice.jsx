import ChoiceDot from './ChoiceDot'
import { useQuizStore } from '../store/useQuizStore'
import { useState } from 'react'

const Choice = ({ choice, id, questionNumber, choices }) => {
  const { questions, setTotalTrue, totalTrue } = useQuizStore(state => state)
  const trueAnswer = questions[id][questionNumber - 1].correctAnswer
  const [chosenAnswer, setChosenAnswer] = useState('')

  const handleAnswer = (answer) => {
    setChosenAnswer(answer)
    setTotalTrue()
    console.log('total: ', totalTrue);
  }

  const handleBorderColor = () => {
    if (chosenAnswer !== '') {
      if (chosenAnswer === trueAnswer) {
        return 'border-[green]'
      }

      return 'border-[#F4362A]'
    }
  }

  const handleTextColor = () => {
    if (chosenAnswer !== '') {
      if (chosenAnswer === trueAnswer) {
        return 'text-[green]'
      }

      return 'text-[#F4362A]'
    }
  }

  return (
    <div
      className={`w-[40%] h-[64px] flex items-center border-2 pl-4 rounded-lg cursor-pointer border-[#8E8E8E] hover:border-[#E38B29] group 
      ${handleBorderColor()}`}
      onClick={() => handleAnswer(choices)}>

      {
        (chosenAnswer !== '' && chosenAnswer === trueAnswer) ? (
          <ChoiceDot isTrue />
        ) : (chosenAnswer !== '' && chosenAnswer !== trueAnswer) ? (
          <ChoiceDot isFalse />
        ) : (
          <ChoiceDot />
        )
      }

      <p className={`text-lg font-bold ml-3 text-[#8E8E8E] group-hover:text-[#E38B29] ${handleTextColor()}`}>{choice}</p>
    </div>
  )
}

export default Choice