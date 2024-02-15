import { create } from "zustand";
import { Question, QuizStore, Quizzes } from "../types";

const quizzes: Quizzes = [
  {
    title: "Mindfulness & Relaxation",
    description: "Temukan teknik relaksasi dan latihan kesadaran untuk mengelola stress sehari-hari."
  },
  {
    title: "Emotional Intelligence",
    description: "Uji tingkat kecerdasan emosional Anda dan pelajari cara mengelola emosi dengan bijak.",
  },
  {
    title: "Anxiety & Stress Management",
    description: "Uji tingkat kecerdasan emosional Anda dan pelajari cara mengelola emosi dengan bijak."
  },
  {
    title: "Self-Care & Well-Being",
    description: "Temukan cara-cara efektif untuk merawat diri sendiri dan meningkatkan kesejahteraan keseluruhan."
  },
  {
    title: "Mood Disorders Awareness",
    description: "Pahami lebih dalam tentang gangguan suasana hati seperti depresi dan bipolar, serta cara mendukung diri sendiri atau orang lain."
  },
  {
    title: "Relationships & Social Connections",
    description: "Eksplorasi bagaimana hubungan sosial dapat memengaruhi  kesehatan mental, dan pelajari cara membangun koneksi yang sehat."
  }
]

const questions: Question[][] = [
  [
    {
      no: 1,
      question: "Teknik relaksasi yang melibatkan pernapasan dalam dan lambat disebut...",
      choices: {
        a: "Meditasi",
        b: "Yoga",
        c: "Mindfulness",
        d: "Pilates"
      },
      correctAnswer: 'c'
    },
    {
      no: 2,
      question: "Apa istilah untuk proses mengalihkan perhatian dari pikiran stres ke momen saat ini?",
      choices: {
        a: "Relaksasi otot progresif",
        b: "Mindfulness",
        c: "Autogenic training",
        d: "Biofeedback"
      },
      correctAnswer: 'b'
    },
    {
      no: 3,
      question: "Manakah di antara berikut yang bukan merupakan teknik relaksasi?",
      choices: {
        a: "Tai Chi",
        b: "Deep breathing",
        c: "High-intensity interval training (HIIT)",
        d: "Progressive muscle relaxation (PMR)"
      },
      correctAnswer: 'c'
    },
    {
      no: 4,
      question: "Apa manfaat utama dari latihan pernapasan yang dalam?",
      choices: {
        a: "Meningkatkan tekanan darah",
        b: "Mengurangi stres dan kecemasan",
        c: "Menurunkan energi",
        d: "Meningkatkan tingkat kecemasan"
      },
      correctAnswer: 'b'
    },
    {
      no: 5,
      question: "Pada saat latihan mindfulness, fokus utama adalah...",
      choices: {
        a: "Masa depan",
        b: "Masa lalu",
        c: "Momen saat ini",
        d: "keinginan dan kebutuhan"
      },
      correctAnswer: 'c'
    },
  ]
]

export const useQuizStore = create<QuizStore>((set) => ({
  quizzes: quizzes,
  questions: questions,
  totalTrue: 0,
  setTotalTrue: () => set((state) => ({ totalTrue: state.totalTrue + 1 }))
}))