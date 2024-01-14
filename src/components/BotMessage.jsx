const BotMessage = ({ message }) => {
  return (
    <div className="w-full bg-[#FFF0DE] flex justify-center">
      <div className="w-[90%] flex justify-between py-3">
        <div className="w-[48px] h-[48px] bg-[#787878] rounded-full flex justify-center items-center">
          <img src="/assets/icons/bot-icon.svg" alt="bot" width={32} height={32} />
        </div>

        <p className="w-[94%] text-lg font-semibold">{message}</p>
      </div>
    </div>
  )
}

export default BotMessage