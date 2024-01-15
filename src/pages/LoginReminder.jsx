import Navbar from "../components/Navbar";

const LoginReminder = () => {
  return (
    <div className="bg-[#FFF0DE] h-screen w-full">

      {/* Navbar */}
      <Navbar />

      {/* Konten halaman */}
      <div className="flex p-8 justify-center items-center text-center h-full">
        <div className="">
          {/* Gambar di tengah halaman */}
          <img
            src="/mohonlogin.svg"
            alt="Gambar"
            className="mx-auto max-w-full mb-4 w-[300px]"
          />

          {/* Tulisan di bawah gambar */}
          <p className="font-bold text-[24px]">
            Mohon untuk login terlebih dahulu
          </p>
          <p className="mb-4">
            Untuk menggunakan fitur Quiz Game, mohon <br />
            untuk login terlebih dahulu atau membuat akun
          </p>

          <div className="flex space-x-4 justify-center mt-8">
            <button className="border-2 border-[#E38B29] text-[#E38B29] hover:bg-[#E38B29] hover:text-white px-4 py-2 rounded-2xl w-40">
              Daftar Akun
            </button>
            <button className="border-2 border-[#E38B29] text-[#E38B29] hover:bg-[#E38B29] hover:text-white px-4 py-2 rounded-2xl w-40">
              Masuk Akun
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginReminder;
