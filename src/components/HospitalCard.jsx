const HospitalCard = () => {
  return (
    <div className="bg-[#E38B29] w-[245px] h-[242px] rounded-[36px] overflow-hidden flex flex-col items-center justify-center">
      <img
        src="/sayangRakyat.svg"
        alt="Rumah Sakit 1"
        className="w-[196px] h-[105px] rounded-[16px]"
      />
      <div className="p-4 text-center">
        <p className="text-white text-[20px] font-bold mb-2">
          RSUD Sayang Rakyat
        </p>
        <p className="text-white text-[13px]">
          Jl. Pahlawan No.1000, Bulurokeng, Biringkanaya, Kota Makassar
        </p>
      </div>
    </div>
  )
}

export default HospitalCard