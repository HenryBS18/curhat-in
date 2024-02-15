import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HospitalCard from "../components/HospitalCard";
import FeatureCard from "../components/FeatureCard";

const Home = () => {
  const [isOpen, setIsOpen] = useState([false, false, false, false, false]);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const yourQuestionsArray = [
    {
      text: "Apa tujuan dari web Curhat-in ini?",
    },
    {
      text: "Apakah konsultasi secara online dengan dokter psikolog efektif?",
    },
    {
      text: "Apa saja jenis masalah kesehatan mental yang bisa ditangani melalui konsultasi kesehatan mental online?",
    },
    {
      text: "Jika ingin konsultasi dengan dokter psikolog, apakah harus Login terlebih dahulu?",
    },
    {
      text: "Apakah privasi dan keamanan pengguna terjaga selama berlangsungnya konsultasi online dengan dokter psikolog?",
    },
  ];

  const yourAnswersArray = [
    {
      text: "Apa tujuan dari web Curhat-in ini?",
      description1:
        "Tujuan web ini dikembangkan dan dipublikasikan yaitu agar dapat lebih meningkatkan tingkat kesadaran masyarakat mengenai pentingnya menjaga kesehatan mental yang kita miliki.",
      description2:
        "Melalui web ini juga disediakan fitur konsultasi online yang dapat digunakan oleh pengguna di mana mereka dapat melaksanakan konsultasi secara daring tanpa harus bertemu langsung antara keduanya.",
    },
    {
      text: "Apakah konsultasi secara online dengan dokter psikolog efektif?",
      description1:
        "Ya, konsultasi kesehatan mental online terbukti efektif dalam membantu orang mengatasi masalah kesehatan mental. Konsultasi secara online juga dapat menghemat waktu serta fleksibel di mana dapat dilakukan di mana saja dan kapan saja.",
      description2: " ",
    },
    {
      text: "Apa saja jenis masalah kesehatan mental yang bisa ditangani melalui konsultasi kesehatan mental online?",
      description1:
        "Berbagai jenis masalah kesehatan mental dapat ditangani melalui konsultasi kesehatan mental online, seperti depresi, kecemasan, gangguan makan, gangguan tidur, dan banyak lagi.",
      description2: " ",
    },
    {
      text: "Jika ingin konsultasi dengan dokter psikolog, apakah harus Login terlebih dahulu?",
      description1:
        "Ya, jika anda ingin konsultasi secara langsung dengan dokter psikolog, anda terlebih dahulu diminta untuk Login jika sudah memiliki akun dan Creat Account (Buat Akun) jika anda belum memiliki akun.",
      description2:
        "Dengan demikian anda dapat konsultasi secara daring dengan dokter psikolog.",
    },
    {
      text: "Apakah privasi dan keamanan pengguna terjaga selama berlangsungnya konsultasi online dengan dokter psikolog?",
      description1:
        "Privasi dan keamanan pengguna selalu menjadi prioritas utama pada layanan kami. Semua data pribadi dan informasi kesehatan mental dijaga kerahasiaannya dan hanya diakses oleh profesional yang berwenang.",
      description2: " ",
    },
  ];

  const toggleQuestion = (index) => {
    const newIsOpen = [...isOpen];

    // Jika pertanyaan sebelumnya sedang terbuka, tutup
    if (activeQuestion !== null && activeQuestion !== index) {
      newIsOpen[activeQuestion] = false;
    }

    // Toggle pertanyaan yang ditekan
    newIsOpen[index] = !newIsOpen[index];

    // Set indeks pertanyaan yang sedang aktif
    setActiveQuestion(newIsOpen[index] ? index : null);

    setIsOpen(newIsOpen);
  };

  useEffect(() => {
    toggleQuestion(0);
  }, []);

  return (
    <div className="bg-[#FFF0DE] w-full flex items-center flex-col relative">
      <div className="w-[90%] min-h-[400px] relative">
        <Navbar />

        {/* Content di Bawah Navbar */}
        <div className="h-[550px] absolute w-full">
          {/* Judul di Sebelah Kiri */}
          <div className="flex flex-row items-center w-full">
            <div className="mb-4 w-1/2">
              <p className="text-[76px] font-bold text-[#E38B29] ">
                Make Your Mental Health A Priority
              </p>
              <p className="w-4/5 mt-1">
                Temukan keseimbangan hidup yang sehat dengan dukungan dan sumber
                informasi untuk kesehatan mental yang tepat.
              </p>

              {/* Tombol Layanan Konsultasi */}
              <div className="relative z-10 mt-8">
                <Link to="/layanan-konsultasi" className="text-white bg-[#e38c29d9] border-[#e38c29d9] border-2 hover:bg-[#e38c29] hover:font-bold px-6 py-2 mt-4 rounded-2xl mr-4">
                  Layanan Konsultasi
                </Link>

                {/* Tombol Chatbot */}
                <Link to="/chatbot" className="text-[#E38B29] border-[#E38B29] border-2 hover:bg-[#E38B29] hover:text-white px-6 py-2 mt-4 rounded-2xl">
                  Cek Kondisi
                </Link>
              </div>
            </div>

            {/* Gambar di Sebelah Kanan */}
            <div className="flex justify-end w-1/2 relative z-10">
              <img
                src="/illustrasi1.svg"
                alt="Gambar Konten"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Image */}
      <div className="w-full h-[430px] relative overflow-hidden z-1">
        <img src="/wave.svg" className="w-full" />
      </div>

      {/* Mengapa harus Curhat-in? Section */}
      <div className="w-[90%] mx-auto mb-20 mt-12">
        <p className="text-[24px] font-bold text-black mb-3 text-center">
          Mengapa harus Curhat-in?
        </p>

        <hr className="w-[80px] border-t-2 border-[#E38B29] mx-auto mb-8" />

        {/* Card Section */}
        <div className="flex justify-center space-x-48">
          <FeatureCard
            image={"/konsultasiOnline.svg"}
            title={"Konsultasi Online"}
            description={"Dengan fitur konsultasi daring, anda dapat berbicara secara pribadi dengan psikolog profesional dari kenyamanan rumah anda sendiri."}
          />

          <FeatureCard
            image={"/chatbot.svg"}
            title={"Chatbot"}
            description={"Dengan fitur chatbot, anda dapat memperoleh informasi, saran, dan dukungan untuk membantu anda mengatasi berbagai masalah kesehatanmental."}
          />

          <FeatureCard
            image={"/quiz.svg"}
            title={"Quiz Game"}
            description={"Fitur quiz game kami dirancang untuk membantu anda belajar dengan cepat dan efektif, dan memberikan anda gambaran yang jelas tentang kesehatan mental anda."}
          />
        </div>
      </div>

      <div className="w-[90%] mx-auto border mb-20">
        {/* Section Kumpulan Materi 2 */}
        <div className="w-full flex justify-start">
          <div className="mb-16 flex gap-x-20">
            <img
              src="/ilustrasiberita.svg"
              alt="Gambar Materi"
              className="w-full h-[530px]"
            />
            {/* Konten di Sebelah Gambar */}
            <div>
              {/* Teks Judul dan Garis Bawah */}
              <p className="text-[40px] font-bold text-black mb-1 mt-12 w-[630px]">
                Kumpulan Materi dan Topik Yang Dapat Anda Akses
              </p>

              <div className="border-b-2 border-[#E38B29] w-16 mb-4"></div>

              {/* Teks Deskripsi Kumpulan Materi 2 */}
              <p className="text-gray-700 mb-8 2 w-[530px] text-[20px]">
                Kami memahami bahwa setiap orang memiliki kebutuhan yang berbeda
                dalam mengatasi masalah kesehatan mental, oleh karena itu kami
                menyediakan berbagai jenis materi dan topik yang dapat disesuaikan
                dengan kebutuhan Anda.
              </p>

              {/* Tombol Lihat Lebih Lanjut */}
              <div className="flex items-center">
                <Link to={'/education'} className="text-[#E38B29] border-[#E38B29] border-2 hover:bg-[#E38B29] hover:text-white px-6 py-2 rounded-full mr-2">
                  Lihat Lebih Lanjut
                  <span className="ml-2">&#10148;</span>{" "}
                  {/* Unicode untuk ikon panah ke kanan */}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section Konsultasi Online */}
        <div className="w-full flex justify-end">
          <div className="flex justify-end items-center">
            <div className="w-1/2 text-right pr-12">
              {/* Judul Konsultasi Online */}
              <p className="text-[40px] font-bold text-black mb-1 w-[630px]">
                Konsultasi Online dengan Tenang dan{" "}
                <span className="text-black border-b-2 border-[#E38B29] pb-1">
                  Aman
                </span>
              </p>

              {/* Deskripsi Konsultasi Online */}
              <div className="flex justify-end">
                <p className="text-gray-700 my-4 w-[430px] text-[20px]">
                  Kami menawarkan konsultasi online dengan dokter psikolog yang
                  dapat diakses di mana saja dan kapan saja, sehingga anda dapat
                  mendapatkan bantuan tanpa harus keluar rumah.
                </p>
              </div>

              {/* Tombol Lihat Lebih Lanjut */}
              <div className="flex items-center justify-end">
                <Link to={'/layanan-konsultasi'} className="text-[#E38B29] border-[#E38B29] border-2 hover:bg-[#E38B29] hover:text-white px-6 py-2 rounded-full mr-2">
                  Lihat Lebih Lanjut
                  <span className="ml-2">&#10148;</span>{" "}
                  {/* Unicode untuk ikon panah ke kanan */}
                </Link>
              </div>
            </div>

            {/* Gambar di Sebelah Kanan */}
            <img
              src="/konsultasiHome.svg"
              alt="Gambar Konsultasi"
              className="w-[650px] h-[530px]"
            />
          </div>
        </div>
      </div>

      {/* Section FAQ */}
      <div className="w-[90%] mx-auto mb-20">
        {/* Judul FAQ */}
        <div className="text-center">
          <p className="text-[40px] font-bold text-black mb-1">
            Frequently Asked Questions
          </p>
          <div className="border-b-2 border-[#E38B29] w-16 mx-auto mb-4"></div>
        </div>

        {/* Deskripsi FAQ */}
        <div className="text-gray-700 mb-8 text-center w-[600px] mx-auto">
          <p className="text-[20px]">
            Kami menyediakan FAQ (Frequently Asked Questions) untuk membantu
            anda menemukan jawaban atas pertanyaan yang paling sering ditanyakan
            tentang layanan kami.
          </p>
        </div>

        <div className="flex flex-col relative">
          {/* Section List Pertanyaan */}
          <div className="flex flex-col bg-white w-[640px] h-[432px] absolute z-10 top-8 justify-center">
            {/* List View Pertanyaan 1 */}
            {yourQuestionsArray.map((question, index) => (
              <div
                key={index}
                className={`w-full flex items-center p-4 border-b-2 border-gray-100 hover:cursor-pointer ${isOpen[index] ? "bg-[#FAFBFF]" : ""
                  }`}
                onClick={() => toggleQuestion(index)}
              >
                {/* Bulat Orange Pudar */}
                <div className={`w-[20px] h-[20px] rounded-full mr-4 ${isOpen[index] ? "bg-[#E38B29]" : "bg-[#F3AF70]"}`} />

                {/* Pertanyaan */}
                <p className="text-[16px] text-black flex-1">{question.text}</p>

                {/* Arrow ke kanan */}
                <span
                  className="ml-4"
                  style={{ color: isOpen[index] ? "#E38B29" : "#F3AF70" }}
                >
                  &#10148;
                </span>
              </div>
            ))}
          </div>

          {/* Jawaban Pertanyaan */}
          <div className="bg-[#FAFBFF] p-8 rounded-2xl mx-auto w-[648px] h-[472px] relative left-[220px] z-0">
            {activeQuestion !== null && (
              <>
                <p className="text-[24px] font-bold text-black mb-8 pl-16 pr-4">
                  {yourAnswersArray[activeQuestion].text}
                </p>

                <div className="pl-16 pr-4">
                  <p className="text-gray-700 text-[16px] mb-8">
                    {yourAnswersArray[activeQuestion].description1}
                  </p>

                  <p className="text-gray-700 text-[16px] mb-4">
                    {yourAnswersArray[activeQuestion].description2}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Section Kerjasama dengan Rumah Sakit */}
      <div className="bg-[#FFF0DE] w-full flex items-center flex-col relative">
        <div className="w-[90%] mx-auto">
          {/* Judul Kerjasama */}
          <div className="text-center mb-4">
            <p className="text-[40px] font-bold text-black mb-1">
              Hubungan Kerjasama
            </p>
            <div className="border-b-2 border-[#E38B29] w-16 mx-auto"></div>
          </div>

          {/* Deskripsi Kerjasama */}
          <div className="text-gray-700 text-center mb-8">
            <p className="text-[20px]">
              Curhat-in bekerja sama dengan beberapa lembaga yang fokus
            </p>
            <p className="text-[20px]">pada bidang Kesehatan Mental.</p>
          </div>
        </div>

        {/* Background Kotak Orange */}
        <div className="bg-[#E38B29] bg-opacity-25 w-full h-[289px] overflow-x-scroll overflow-y-hidden no-scrollbar flex items-center">
          {/* Cards */}
          <div className="flex p-4 space-x-16 mx-12">
            {
              [1, 2, 3, 4, 5, 6, 7, 8].map((i, _) => (
                <HospitalCard key={i} />
              ))
            }
          </div>
        </div>
      </div>

      {/* Footer Home Page */}
      <Footer />
    </div>
  );
};

export default Home;
