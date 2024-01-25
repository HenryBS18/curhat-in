import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const EducationDetail = () => {
  const params = useParams();
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
  console.log(params);

  const Data = educationData.find((eduacation) => eduacation.id == params.id);
  console.log(Data);
  return (
    <div className="bg-[#FFF0DE] w-full flex items-center flex-col">
      <div className="w-[90%] min-h-[775px]">
        <Navbar />
        <div className="mt-12">
          <img
            src={Data.image}
            alt={Data.title}
            className="w-full h-full object-cover mb-4 rounded-2xl"
          />
          <h3 className="text-base font-semibold mb-7 text-orange text-ellipsis">
            {Data.title}
          </h3>

          <h3 className="text-base font-semibold mb-7 text-orange text-ellipsis">
            {Data.author}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default EducationDetail;
