"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function CatMathHomeworkApp() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [studentName, setStudentName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [streak, setStreak] = React.useState(7);
  const [difficulty, setDifficulty] = React.useState("중간");

  const [answers, setAnswers] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [score, setScore] = React.useState(0);

  const problems = [
    {
      id: 1,
      question: "12 + 8 = ?",
      choices: ["18", "20", "22"],
      answer: 1,
    },
    {
      id: 2,
      question: "9 × 3 = ?",
      choices: ["27", "21", "24"],
      answer: 0,
    },
    {
      id: 3,
      question: "25 - 7 = ?",
      choices: ["18", "16", "20"],
      answer: 0,
    },
  ];

  const handleSelect = (problemId, choiceIndex) => {
    setAnswers({
      ...answers,
      [problemId]: choiceIndex,
    });
  };

  const handleSubmit = () => {
    let newScore = 0;

    problems.forEach((problem) => {
      if (answers[problem.id] === problem.answer) {
        newScore++;
      }
    });

    setScore(newScore);
    setSubmitted(true);
  };

  const handleSignup = () => {
    alert("회원가입 완료 😺");
  };

  const handleLogin = () => {
    if (!studentName || !email || !password) {
      alert("모든 칸을 입력해주세요!");
      return;
    }

    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50">
        <div className="bg-white p-10 rounded-3xl shadow-xl w-[450px]">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">😺</div>

            <h1 className="text-4xl font-bold text-orange-500 mb-2">
              고양이 수학 숙제
            </h1>

            <p className="text-stone-600">
              매일 10문제씩 실력을 키워보자!
            </p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="이름 입력"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full border border-orange-200 rounded-2xl px-4 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="이메일 입력"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-orange-200 rounded-2xl px-4 py-4 outline-none"
            />

            <input
              type="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-orange-200 rounded-2xl px-4 py-4 outline-none"
            />

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleSignup}
                className="w-full bg-orange-300 text-white py-4 rounded-2xl font-bold"
              >
                회원가입
              </button>

              <button
                onClick={handleLogin}
                className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold"
              >
                로그인
              </button>

              <button
                onClick={() => router.push("/admin")}
                className="w-full bg-black text-white py-4 rounded-2xl font-bold"
              >
                관리자
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 p-6 text-stone-800">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-orange-500">
                😺 고양이 수학 숙제
              </h1>

              <p className="text-stone-600 mt-2">
                안녕 {studentName} 학생!
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold">🔥 {streak}일 연속</p>
              <p>난이도: {difficulty}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="bg-white rounded-3xl shadow-md p-6"
            >
              <h2 className="text-xl font-bold mb-4">
                {problem.id}. {problem.question}
              </h2>

              <div className="space-y-3">
                {problem.choices.map((choice, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleSelect(problem.id, index)
                    }
                    className={`w-full text-left p-4 rounded-2xl border transition
                    ${
                      answers[problem.id] === index
                        ? "bg-orange-200 border-orange-400"
                        : "bg-white border-stone-200"
                    }`}
                  >
                    {choice}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="w-full mt-6 bg-orange-500 text-white py-4 rounded-2xl text-xl font-bold"
          >
            제출하기 🐾
          </button>
        ) : (
          <div className="bg-white rounded-3xl shadow-lg p-8 mt-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              🎉 결과 발표
            </h2>

            <p className="text-2xl mb-4">
              점수: {score} / {problems.length}
            </p>

            <p className="text-lg text-stone-600">
              {score === problems.length
                ? "완벽해! 고양이 선생님도 감탄했어 😺"
                : score >= 2
                ? "좋아! 조금씩 실력이 늘고 있어 🔥"
                : "괜찮아! 틀리면서 배우는 거야 💪"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}