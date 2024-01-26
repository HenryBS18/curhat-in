const UserMessage = ({ message }) => {
  return (
    <div className="w-full bg-[#FFD8A9] flex justify-center">
      <div className="w-[90%] flex justify-between py-3">
        <div className="w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center">
          <img src="/assets/icons/user-icon.svg" alt="user" width={24} height={24} />
        </div>

        <p className="w-[94%] 2xl:w-[96%] text-lg font-semibold whitespace-pre-line">{message}</p>
      </div>
    </div>
  )
}

export default UserMessage