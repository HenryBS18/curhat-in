import { useEffect, useRef } from "react";

const ChatGuideModal = ({ setIsGuideShow }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsGuideShow(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [setIsGuideShow]);

  const guides = [
    {
      message: "Untuk memulai, pengguna dapat membuka aplikasi chatbot konsultasi kesehatan mental dan memulai chat dengan bot tersebut. Biasanya bot akan memberikan sambutan dan menjelaskan cara penggunaan bot."
    },
    {
      message: "Setelah melakukan sambungan, pengguna dapat memilih menu yang tersedia pada aplikasi chatbot. Biasanya, menu-menu yang tersedia mencakup informasi kesehatan mental, penjelasan mengenai penyakit mental, serta tes untuk mengukur tingkat stres, kecemasan, dan depresi."
    },
    {
      message: "Jika pengguna memilih untuk mengikuti tes kesehatan mental, maka chatbot akan memberikan beberapa pertanyaan yang harus dijawab oleh pengguna. Pertanyaan yang diajukan biasanya berkaitan dengan gejala-gejala yang sering terjadi pada seseorang yang mengalami masalah kesehatan mental."
    },
    {
      message: "Pengguna juga dapat memilih menu untuk mendapatkan tips kesehatan mental. Tips ini dapat membantu pengguna untuk menjaga kesehatan mental mereka sehari-hari."
    }
  ]

  return (
    <div className='w-full h-full absolute top-0 left-0 z-10 flex justify-center items-center' id="chat-guide-modal">
      <div className='w-full h-full bg-black opacity-30 absolute z-20' />

      <div ref={modalRef} className='w-[90%] h-auto py-3 bg-[#F1A661] fixed z-30 top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] flex justify-center'>
        <div className='w-[95%] h-auto flex flex-col items-center'>
          <div className='w-full flex justify-end'>
            <button onClick={() => setIsGuideShow(false)}>
              <img src="/assets/icons/close-icon.svg" alt="close" width={24} height={24} id='a' />
            </button>
          </div>

          <h1 className='text-4xl font-bold text-white'>Panduan Obrolan dengan Chatbot</h1>

          <div className='w-full mt-3'>
            {
              guides.map((guides, i) => (
                <div className='flex justify-between mb-2' key={i}>
                  <div className='w-[18px] h-[18px] bg-[#FFD8A9] rounded-full mt-1' />

                  <p className='w-[calc(100%-30px)] text-white text-xl'>
                    {guides.message}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatGuideModal