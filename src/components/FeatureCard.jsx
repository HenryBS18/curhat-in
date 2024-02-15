const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="bg-[#F3AF70] w-[314px] h-[320px] mb-10 text-center p-6 rounded-2xl flex flex-col items-center justify-center">
      <img
        src={image}
        alt="Card Image"
        className="w-[130px] mb-2 rounded-md"
      />
      <p className="text-[20px] font-bold mb-1 text-white">{title}</p>
      <p className="text-[16px] mb-4 text-white">{description}</p>
    </div>
  )
}

export default FeatureCard