import ChoiceDot from './ChoiceDot'
import { useQuizStore } from '../store/useQuizStore'

const Choice = ({ choice, id, questionNumber, choices, handleAnswer, chosenAnswer, answered }) => {
  const { questions } = useQuizStore(state => state)
  const trueAnswer = questions[id][questionNumber - 1].correctAnswer

  const handleBorderColor = () => {
    if (chosenAnswer !== '') {
      if (answered && choices === trueAnswer) {
        return 'border-[green]'
      }

      if (answered && choices !== trueAnswer) {
        return 'border-[#F4362A]'
      }

      if (chosenAnswer === trueAnswer) {
        return 'border-[green]'
      }

      return 'border-[#F4362A]'
    }
  }

  const handleTextColor = () => {
    if (chosenAnswer !== '') {
      if (answered && choices === trueAnswer) {
        return 'text-[green]'
      }

      if (answered && choices !== trueAnswer) {
        return 'text-[#F4362A]'
      }

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
      onClick={() => {
        handleAnswer(choices)

        if (choices == trueAnswer) {
          let totaltrue = Number(sessionStorage.getItem('totalTrue')) ?? 0
          sessionStorage.setItem('totalTrue', totaltrue += 1)
        }
      }}>

      {
        (answered && choices === trueAnswer) ? (
          <ChoiceDot isTrue />
        ) : (answered && choices !== trueAnswer) ? (
          <ChoiceDot isFalse />
        ) : (chosenAnswer !== '' && choices === trueAnswer && chosenAnswer === trueAnswer) ? (
          <ChoiceDot isTrue />
        ) : (chosenAnswer !== '' && choices !== trueAnswer && chosenAnswer !== trueAnswer) ? (
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