import { useState } from "react"

const InputMessage = () => {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <form className="w-full h-[94px] flex justify-center items-center bg-[#FFF0DE] fixed bottom-0" onSubmit={(e) => handleSubmit(e)}>
      <div className="w-[90%] h-full flex justify-between">
        <textarea
          className="w-[92%] h-[74px] bg-[#FFD8A9] text-black placeholder-white text-lg font-semibold px-6 py-1 resize-none rounded-lg flex flex-col items-center justify-center"
          placeholder="Ketik di sini..."
          onChange={(e) => handleInput(e)}
        />

        <button className="w-[74px] h-[74px] bg-[#E38B29] rounded-lg flex justify-center items-center relative" type="submit">
          <img src="/assets/icons/send-icon.svg" alt="send" width={60} height={64} className="absolute top-0.5 left-3" />
        </button>
      </div>
    </form>
  )
}

export default InputMessage