import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const EducationDetail = () => {
  const params = useParams();

  const educationData = [
    {
      id: 1,
      title: "Tips Menjaga Kesehatan Mental Anak Remaja",
      date: "01 Januari 2022",
      image: "/mental.svg",
      author: "Maria V.K",
      desc1:
        "Remaja adalah masa peralihan diri anak menuju dewasa, pada masa ini terjadi berbagai macam perubahan yang cukup bermakna baik secara fisik, biologis, mental dan emosional maupun psikososial. Biasanya remaja sering kali merasakan kelelahan baik secara fisik maupun mental.",
      desc2:
        "Untuk meningkatkan kesejahteraan secara keseluruhan, remaja tidak bisa hanya berfokus pada kesehatan fisik saja, karena kesehatan mental juga memainkan peran yang besar dalam kehidupan. Kesehatan mental menunjukkan kemampuan diri sendiri untuk mengelola perasaan dan menghadapi kesulitan sehari-hari.",
      desc3:
        "Beberapa langkah perubahan sederhana bisa diterapkan untuk meningkatkan kualitas kesehatan mental. Dengan melakukan perubahan ini, maka dapat dipastikan hal ini memengaruhi semua aspek kehidupan. Nah, untuk remaja yang merasa mudah mengalami stress atau gangguan kecemasan, berikut ini beberapa hal sederhana yang dapat meningkatkan kesehatan mental:",
      desc4: "• Katakan Hal Positif pada Diri Sendiri",
      exp1: "Penelitian menunjukkan bahwa cara kamu berpikir tentang diri sendiri dapat memiliki efek yang kuat pada kejiwaan kamu. Ketika kita memandang diri kita dan hidup kita secara negatif, maka kita juga merasakan efek negatifnya. Sebaliknya, jika membiasakan diri menggunakan kata-kata yang membuat lebih positif, maka hal ini membuat kamu lebih optimis.",
      desc5: "• Tuliskan Hal-Hal yang Patut Disyukuri",
      exp2: "Rasa bersyukur dikaitkan dengan peningkatan kesejahteraan, kualitas kesehatan mental, serta kebahagiaan. Cara sederhana untuk meningkatkan rasa bersyukur adalah membuat jurnal dan menuliskan berbagai hal yang patut disyukuri setiap harinya. Secara umum merenungkan rasa terimakasih juga efektif, tetapi kamu perlu berlatih secara teratur untuk mendapatkan manfaat jangka panjang. Temukan sesuatu untuk disyukuri dan nikmati perasaan tersebut dalam hatimu.",
    },
    {
      id: 2,
      title: "Apa itu “Mental Health”?",
      date: "02 Januari 2022",
      image: "/mentalhealth.svg",
      author: "Jonathan Tan",
      desc1:
        "Remaja adalah masa peralihan diri anak menuju dewasa, pada masa ini terjadi berbagai macam perubahan yang cukup bermakna baik secara fisik, biologis, mental dan emosional maupun psikososial. Biasanya remaja sering kali merasakan kelelahan baik secara fisik maupun mental.",
      desc2:
        "Untuk meningkatkan kesejahteraan secara keseluruhan, remaja tidak bisa hanya berfokus pada kesehatan fisik saja, karena kesehatan mental juga memainkan peran yang besar dalam kehidupan. Kesehatan mental menunjukkan kemampuan diri sendiri untuk mengelola perasaan dan menghadapi kesulitan sehari-hari.",
      desc3:
        "Beberapa langkah perubahan sederhana bisa diterapkan untuk meningkatkan kualitas kesehatan mental. Dengan melakukan perubahan ini, maka dapat dipastikan hal ini memengaruhi semua aspek kehidupan. Nah, untuk remaja yang merasa mudah mengalami stress atau gangguan kecemasan, berikut ini beberapa hal sederhana yang dapat meningkatkan kesehatan mental:",
      desc4: "• Katakan Hal Positif pada Diri Sendiri",
      exp1: "Penelitian menunjukkan bahwa cara kamu berpikir tentang diri sendiri dapat memiliki efek yang kuat pada kejiwaan kamu. Ketika kita memandang diri kita dan hidup kita secara negatif, maka kita juga merasakan efek negatifnya. Sebaliknya, jika membiasakan diri menggunakan kata-kata yang membuat lebih positif, maka hal ini membuat kamu lebih optimis.",
      desc5: "• Tuliskan Hal-Hal yang Patut Disyukuri",
      exp2: "Rasa bersyukur dikaitkan dengan peningkatan kesejahteraan, kualitas kesehatan mental, serta kebahagiaan. Cara sederhana untuk meningkatkan rasa bersyukur adalah membuat jurnal dan menuliskan berbagai hal yang patut disyukuri setiap harinya. Secara umum merenungkan rasa terimakasih juga efektif, tetapi kamu perlu berlatih secara teratur untuk mendapatkan manfaat jangka panjang. Temukan sesuatu untuk disyukuri dan nikmati perasaan tersebut dalam hatimu.",
    },
    {
      id: 3,
      title: "Tips cara mengatasi Panic Attack",
      date: "02 Januari 2022",
      image: "/panikattack.svg",
      author: "Kevin Chandra",
      desc1:
        "Remaja adalah masa peralihan diri anak menuju dewasa, pada masa ini terjadi berbagai macam perubahan yang cukup bermakna baik secara fisik, biologis, mental dan emosional maupun psikososial. Biasanya remaja sering kali merasakan kelelahan baik secara fisik maupun mental.",
      desc2:
        "Untuk meningkatkan kesejahteraan secara keseluruhan, remaja tidak bisa hanya berfokus pada kesehatan fisik saja, karena kesehatan mental juga memainkan peran yang besar dalam kehidupan. Kesehatan mental menunjukkan kemampuan diri sendiri untuk mengelola perasaan dan menghadapi kesulitan sehari-hari.",
      desc3:
        "Beberapa langkah perubahan sederhana bisa diterapkan untuk meningkatkan kualitas kesehatan mental. Dengan melakukan perubahan ini, maka dapat dipastikan hal ini memengaruhi semua aspek kehidupan. Nah, untuk remaja yang merasa mudah mengalami stress atau gangguan kecemasan, berikut ini beberapa hal sederhana yang dapat meningkatkan kesehatan mental:",
      desc4: "• Katakan Hal Positif pada Diri Sendiri",
      exp1: "Penelitian menunjukkan bahwa cara kamu berpikir tentang diri sendiri dapat memiliki efek yang kuat pada kejiwaan kamu. Ketika kita memandang diri kita dan hidup kita secara negatif, maka kita juga merasakan efek negatifnya. Sebaliknya, jika membiasakan diri menggunakan kata-kata yang membuat lebih positif, maka hal ini membuat kamu lebih optimis.",
      desc5: "• Tuliskan Hal-Hal yang Patut Disyukuri",
      exp2: "Rasa bersyukur dikaitkan dengan peningkatan kesejahteraan, kualitas kesehatan mental, serta kebahagiaan. Cara sederhana untuk meningkatkan rasa bersyukur adalah membuat jurnal dan menuliskan berbagai hal yang patut disyukuri setiap harinya. Secara umum merenungkan rasa terimakasih juga efektif, tetapi kamu perlu berlatih secara teratur untuk mendapatkan manfaat jangka panjang. Temukan sesuatu untuk disyukuri dan nikmati perasaan tersebut dalam hatimu.",
    },
    {
      id: 4,
      title: "Tips menjalani kehidupan kuliah dengan damai",
      date: "01 Januari 2022",
      image: "/kuliahdamai.svg",
      author: "Vania Febri",
      desc1:
        "Remaja adalah masa peralihan diri anak menuju dewasa, pada masa ini terjadi berbagai macam perubahan yang cukup bermakna baik secara fisik, biologis, mental dan emosional maupun psikososial. Biasanya remaja sering kali merasakan kelelahan baik secara fisik maupun mental.",
      desc2:
        "Untuk meningkatkan kesejahteraan secara keseluruhan, remaja tidak bisa hanya berfokus pada kesehatan fisik saja, karena kesehatan mental juga memainkan peran yang besar dalam kehidupan. Kesehatan mental menunjukkan kemampuan diri sendiri untuk mengelola perasaan dan menghadapi kesulitan sehari-hari.",
      desc3:
        "Beberapa langkah perubahan sederhana bisa diterapkan untuk meningkatkan kualitas kesehatan mental. Dengan melakukan perubahan ini, maka dapat dipastikan hal ini memengaruhi semua aspek kehidupan. Nah, untuk remaja yang merasa mudah mengalami stress atau gangguan kecemasan, berikut ini beberapa hal sederhana yang dapat meningkatkan kesehatan mental:",
      desc4: "• Katakan Hal Positif pada Diri Sendiri",
      exp1: "Penelitian menunjukkan bahwa cara kamu berpikir tentang diri sendiri dapat memiliki efek yang kuat pada kejiwaan kamu. Ketika kita memandang diri kita dan hidup kita secara negatif, maka kita juga merasakan efek negatifnya. Sebaliknya, jika membiasakan diri menggunakan kata-kata yang membuat lebih positif, maka hal ini membuat kamu lebih optimis.",
      desc5: "• Tuliskan Hal-Hal yang Patut Disyukuri",
      exp2: "Rasa bersyukur dikaitkan dengan peningkatan kesejahteraan, kualitas kesehatan mental, serta kebahagiaan. Cara sederhana untuk meningkatkan rasa bersyukur adalah membuat jurnal dan menuliskan berbagai hal yang patut disyukuri setiap harinya. Secara umum merenungkan rasa terimakasih juga efektif, tetapi kamu perlu berlatih secara teratur untuk mendapatkan manfaat jangka panjang. Temukan sesuatu untuk disyukuri dan nikmati perasaan tersebut dalam hatimu.",
    },
    {
      id: 5,
      title: "Cara konsultasi ke psikolog untuk pertama kali",
      date: "02 Januari 2022",
      image: "/carakonsultasi.svg",
      author: "Gaby Tjan",
      desc1:
        "Remaja adalah masa peralihan diri anak menuju dewasa, pada masa ini terjadi berbagai macam perubahan yang cukup bermakna baik secara fisik, biologis, mental dan emosional maupun psikososial. Biasanya remaja sering kali merasakan kelelahan baik secara fisik maupun mental.",
      desc2:
        "Untuk meningkatkan kesejahteraan secara keseluruhan, remaja tidak bisa hanya berfokus pada kesehatan fisik saja, karena kesehatan mental juga memainkan peran yang besar dalam kehidupan. Kesehatan mental menunjukkan kemampuan diri sendiri untuk mengelola perasaan dan menghadapi kesulitan sehari-hari.",
      desc3:
        "Beberapa langkah perubahan sederhana bisa diterapkan untuk meningkatkan kualitas kesehatan mental. Dengan melakukan perubahan ini, maka dapat dipastikan hal ini memengaruhi semua aspek kehidupan. Nah, untuk remaja yang merasa mudah mengalami stress atau gangguan kecemasan, berikut ini beberapa hal sederhana yang dapat meningkatkan kesehatan mental:",
      desc4: "• Katakan Hal Positif pada Diri Sendiri",
      exp1: "Penelitian menunjukkan bahwa cara kamu berpikir tentang diri sendiri dapat memiliki efek yang kuat pada kejiwaan kamu. Ketika kita memandang diri kita dan hidup kita secara negatif, maka kita juga merasakan efek negatifnya. Sebaliknya, jika membiasakan diri menggunakan kata-kata yang membuat lebih positif, maka hal ini membuat kamu lebih optimis.",
      desc5: "• Tuliskan Hal-Hal yang Patut Disyukuri",
      exp2: "Rasa bersyukur dikaitkan dengan peningkatan kesejahteraan, kualitas kesehatan mental, serta kebahagiaan. Cara sederhana untuk meningkatkan rasa bersyukur adalah membuat jurnal dan menuliskan berbagai hal yang patut disyukuri setiap harinya. Secara umum merenungkan rasa terimakasih juga efektif, tetapi kamu perlu berlatih secara teratur untuk mendapatkan manfaat jangka panjang. Temukan sesuatu untuk disyukuri dan nikmati perasaan tersebut dalam hatimu.",
    },
    {
      id: 6,
      title: "Kenali ciri-ciri penyakit mental pada diri anda",
      date: "02 Januari 2022",
      image: "/ciripenyakitmental.svg",
      author: "Wendy Walt",
      desc1:
        "Remaja adalah masa peralihan diri anak menuju dewasa, pada masa ini terjadi berbagai macam perubahan yang cukup bermakna baik secara fisik, biologis, mental dan emosional maupun psikososial. Biasanya remaja sering kali merasakan kelelahan baik secara fisik maupun mental.",
      desc2:
        "Untuk meningkatkan kesejahteraan secara keseluruhan, remaja tidak bisa hanya berfokus pada kesehatan fisik saja, karena kesehatan mental juga memainkan peran yang besar dalam kehidupan. Kesehatan mental menunjukkan kemampuan diri sendiri untuk mengelola perasaan dan menghadapi kesulitan sehari-hari.",
      desc3:
        "Beberapa langkah perubahan sederhana bisa diterapkan untuk meningkatkan kualitas kesehatan mental. Dengan melakukan perubahan ini, maka dapat dipastikan hal ini memengaruhi semua aspek kehidupan. Nah, untuk remaja yang merasa mudah mengalami stress atau gangguan kecemasan, berikut ini beberapa hal sederhana yang dapat meningkatkan kesehatan mental:",
      desc4: "• Katakan Hal Positif pada Diri Sendiri",
      exp1: "Penelitian menunjukkan bahwa cara kamu berpikir tentang diri sendiri dapat memiliki efek yang kuat pada kejiwaan kamu. Ketika kita memandang diri kita dan hidup kita secara negatif, maka kita juga merasakan efek negatifnya. Sebaliknya, jika membiasakan diri menggunakan kata-kata yang membuat lebih positif, maka hal ini membuat kamu lebih optimis.",
      desc5: "• Tuliskan Hal-Hal yang Patut Disyukuri",
      exp2: "Rasa bersyukur dikaitkan dengan peningkatan kesejahteraan, kualitas kesehatan mental, serta kebahagiaan. Cara sederhana untuk meningkatkan rasa bersyukur adalah membuat jurnal dan menuliskan berbagai hal yang patut disyukuri setiap harinya. Secara umum merenungkan rasa terimakasih juga efektif, tetapi kamu perlu berlatih secara teratur untuk mendapatkan manfaat jangka panjang. Temukan sesuatu untuk disyukuri dan nikmati perasaan tersebut dalam hatimu.",
    },
  ];

  const data = educationData.find((eduacation) => eduacation.id == params.id);

  return (
    <div className="bg-[#FFF0DE] w-full flex items-center flex-col">
      <div className="w-[90%] min-h-[775px] mb-10">
        <Navbar />

        <div className="mt-12">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-[300px] object-cover mb-4 rounded-2xl"
          />

          <h3 className="text-[36px] font-bold mb-2 text-[#E38B29] text-ellipsis">
            {data.title}
          </h3>

          <h3 className="text-base font-semibold mb-2 text-black opacity-30 text-ellipsis">
            {data.author}
          </h3>

          <h3 className="text-base font-semibold mb-4 text-black opacity-30 text-ellipsis">
            {data.date}
          </h3>

          <h3 className="text-[14px] mb-3 text-black text-ellipsis">
            {data.desc1}
          </h3>

          <h3 className="text-[14px] mb-3 text-black text-ellipsis">
            {data.desc2}
          </h3>

          <h3 className="text-[14px] mb-3 text-black text-ellipsis">
            {data.desc3}
          </h3>

          <h3 className="text-[14px] font-bold mb-3 text-black text-ellipsis">
            {data.desc4}
          </h3>

          <h3 className="text-[14px] mb-3 text-black text-ellipsis">
            {data.exp1}
          </h3>

          <h3 className="text-[14px] font-bold mb-3 text-black text-ellipsis">
            {data.desc5}
          </h3>

          <h3 className="text-[14px] mb-3 text-black text-ellipsis">
            {data.exp2}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default EducationDetail;
