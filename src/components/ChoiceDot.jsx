const ChoiceDot = ({ isTrue, isFalse }) => {
  return (
    <div className={`w-[32px] h-[32px] rounded-full border-[3px] border-[#8E8E8E] group-hover:border-[#E38B29] flex justify-center items-center ${isTrue ? 'border-[green]' : ''} ${isFalse ? 'border-[#F4362A]' : ''}`}>
      <div className={`w-[18px] h-[18px] rounded-full bg-[#8E8E8E] group-hover:bg-[#E38B29] ${isTrue ? 'bg-[green]' : ''} ${isFalse ? 'bg-[#F4362A]' : ''}`} />
    </div>
  )
}

export default ChoiceDot