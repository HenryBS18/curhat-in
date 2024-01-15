import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-[#FFF0DE] w-full overflow-y-hidden flex items-center flex-col">
      <div className="w-[90%] h-[450px]">
        <Navbar />
        {/* Content di Bawah Navbar */}
        <div className="border border-black h-[550px] absolute">
          {/* Judul di Sebelah Kiri */}
          <div className="flex flex-row">
            <div className="mb-4 w-1/2">
              <p className="text-[68px] font-bold text-[#E38B29] w-4/5">
                Make Your Mental Health A Priority
              </p>
              <p className="w-4/5 mt-1">
                Temukan keseimbangan hidup yang sehat dengan dukungan dan sumber
                informasi untuk kesehatan mental yang tepat.
              </p>

              {/* Tombol Layanan Konsultasi */}
              <Link to="/layanan-konsultasi">
                <button className="text-[#E38B29] border-[#E38B29] border-2 hover:bg-[#E38B29] hover:text-white px-6 py-2 mt-4 rounded-2xl mr-4">
                  Layanan Konsultasi
                </button>
              </Link>

              {/* Tombol Chatbot */}
              <Link to="/chatbot">
                <button className="text-[#E38B29] border-[#E38B29] border-2 hover:bg-[#E38B29] hover:text-white px-6 py-2 mt-4 rounded-2xl">
                  Cek Kondisi
                </button>
              </Link>
            </div>

            {/* Gambar di Sebelah Kanan */}
            <div className="flex justify-center w-1/2">
              <img
                src="/illustrasi1.svg"
                alt="Gambar Konten"
                className=" object-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[430px] overflow-y-hidden ">
        <img src="/wave.svg" className="w-full" />
      </div>
    </div>
  );
};

export default Home;
