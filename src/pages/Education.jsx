import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "Tips menjaga kesehatan mental anak remaja",
      date: "01 Januari 2022",
      image: "/mental.svg",
      author: "Maria V.K",
    },
    {
      id: 2,
      title: "Apa itu “Mental Health”?",
      date: "02 Januari 2022",
      image: "/mentalhealth.svg",
      author: "Jonathan Tan",
    },
    {
      id: 3,
      title: "Tips cara mengatasi Panic Attack",
      date: "02 Januari 2022",
      image: "/panikattack.svg",
      author: "Kevin Chandra",
    },
    {
      id: 4,
      title: "Tips menjalani kehidupan kuliah dengan damai",
      date: "01 Januari 2022",
      image: "/kuliahdamai.svg",
      author: "Vania Febri",
    },
    {
      id: 5,
      title: "Cara konsultasi ke psikolog untuk pertama kali",
      date: "02 Januari 2022",
      image: "/carakonsultasi.svg",
      author: "Gaby Tjan",
    },
    {
      id: 6,
      title: "Kenali ciri-ciri penyakit mental pada diri anda",
      date: "02 Januari 2022",
      image: "/ciripenyakitmental.svg",
      author: "Wendy Walt",
    },
  ];

  return (
    <div className="bg-[#FFF0DE] w-full flex items-center flex-col">
      <div className="w-[90%] h-[775px]">
        {/* Navbar */}
        <Navbar />
        {/* Konten Materi Edukasi */}
        <div className="container mx-auto p-10 flex justify-center">
          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {educationData.map((data) => (
              <div
                key={data.id}
                className="bg-[#F1A661] p-4 rounded-2xl shadow-md w-[375px]"
              >
                {/* Gambar */}
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-40 object-cover mb-4 rounded-2xl"
                />

                {/* Judul */}
                <h3 className="text-base font-semibold mb-7 text-white text-ellipsis">
                  {data.title}
                </h3>

                {/* Nama Pengarang dan Tanggal Upload */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-[#555555] font-semibold">
                    {data.author}
                  </p>
                  <p className="text-sm text-[#FFEAD1]">{data.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
