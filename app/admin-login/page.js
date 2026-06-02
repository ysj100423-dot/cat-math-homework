"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [question, setQuestion] = React.useState("");
  const [choice1, setChoice1] = React.useState("");
  const [choice2, setChoice2] = React.useState("");
  const [choice3, setChoice3] = React.useState("");
  const [answer, setAnswer] = React.useState(0);

  // 로그인 확인
  React.useEffect(() => {
    const admin = localStorage.getItem("admin");

    if (admin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // 관리자 로그인
  const handleLogin = () => {
    if (email === "ysj100423@gmail.com" && password === "0423") {
      localStorage.setItem("admin", "true");
      setIsLoggedIn(true);
    } else {
      alert("관리자 정보가 틀렸습니다.");
    }
  };

  // 문제 추가
  const handleAdd = () => {
    const saved =
      JSON.parse(localStorage.getItem("customProblems")) || [];

    const newProblem = {
      id: Date.now(),
      question,
      choices: [choice1, choice2, choice3],
      answer: Number(answer),
    };

    localStorage.setItem(
      "customProblems",
      JSON.stringify([...saved, newProblem])
    );

    alert("문제 추가 완료!");

    setQuestion("");
    setChoice1("");
    setChoice2("");
    setChoice3("");
    setAnswer(0);
  };

  // 로그인 안된 상태
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50">
        <div className="bg-white p-10 rounded-3xl shadow-xl w-[400px]">
          <h1 className="text-3xl font-bold text-center mb-8">
            관리자 로그인 🔐
          </h1>

          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-4 rounded-2xl mb-4"
          />

          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-4 rounded-2xl mb-6"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold"
          >
            로그인
          </button>
        </div>
      </div>
    );
  }

  // 로그인 성공 후 관리자 페이지
  return (
    <div className="min-h-screen bg-orange-50 p-10">
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold mb-8">
          관리자 문제 추가 📚
        </h1>

        <input
          placeholder="문제"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full border p-4 rounded-2xl mb-4"
        />

        <input
          placeholder="보기 1"
          value={choice1}
          onChange={(e) => setChoice1(e.target.value)}
          className="w-full border p-4 rounded-2xl mb-4"
        />

        <input
          placeholder="보기 2"
          value={choice2}
          onChange={(e) => setChoice2(e.target.value)}
          className="w-full border p-4 rounded-2xl mb-4"
        />

        <input
          placeholder="보기 3"
          value={choice3}
          onChange={(e) => setChoice3(e.target.value)}
          className="w-full border p-4 rounded-2xl mb-4"
        />

        <select
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full border p-4 rounded-2xl mb-6"
        >
          <option value={0}>정답: 보기1</option>
          <option value={1}>정답: 보기2</option>
          <option value={2}>정답: 보기3</option>
        </select>

        <button
          onClick={handleAdd}
          className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold"
        >
          문제 추가
        </button>
      </div>
    </div>
  );
}