import wave from "/waveBawah.svg";

const Footer = () => {
  return (
    <div className="w-full">
      {/* Tulisan di atas wave */}
      <p className="text-white opacity-90 text-[14px] absolute bottom-8 left-[290px] transform -translate-x-1/2 -translate-y-1/2 z-10">
        @ 2023 Curhat-in | All Right Reserved
      </p>

      <div className="flex flex-row">
        <img src="/logoFooter.svg" className="absolute bottom-32 left-48" />
        
        <div className=" absolute bottom-36 left-96 text-white">
          <p className=" text-[28px] font-bold">Curhat-in</p>
          <p className="text-[14px] mb-4">
            Contact : curhatin@gmail.com | +62 854-4552-2213
          </p>
          <p className=" text-[18px] mb-2">Ikuti Akun Media Sosial Kami</p>
          <img src="/sosmed.svg" className="w-[200px]" />
        </div>

        <div className="absolute bottom-32 right-[590px] text-white">
          <p className="font-bold text-[22px] mb-1">Perusahaan</p>
          <p>Hubungi kami</p>
          <p>Blog</p>
          <p>Karir</p>
          <p>Sumber Daya</p>
          <p>Berita dan Informasi</p>
        </div>

        <div className="absolute bottom-44 right-[410px] text-white">
          <p className="font-bold text-[22px] mb-1">Pasien</p>
          <p>Cara Kerja</p>
          <p>Testimonial</p>
          <p>Penyedia Kami</p>
        </div>

        <div className="absolute bottom-[152px] right-48 text-white">
          <p className="font-bold text-[22px] mb-1">Legalitas</p>
          <p>Syarat Pengguna</p>
          <p>Kebijakan Privasi</p>
          <p>Lisensi</p>
          <p>Kuki</p>
        </div>
      </div>

      {/* Gambar wave */}
      <img
        src={wave}
        className="w-full mt-32"
        style={{ zIndex: -1 }}
        alt="Wave Footer"
      />
    </div>
  )
}

export default Footer