"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  const [question, setQuestion] = React.useState("");
  const [choice1, setChoice1] = React.useState("");
  const [choice2, setChoice2] = React.useState("");
  const [choice3, setChoice3] = React.useState("");
  const [answer, setAnswer] = React.useState(0);

  const [studentResult, setStudentResult] = React.useState(null);

  React.useEffect(() => {
    const savedResult = localStorage.getItem("studentResult");

    if (savedResult) {
      setStudentResult(JSON.parse(savedResult));
    }
  }, []);

  const handleAddProblem = () => {
    const savedProblems = localStorage.getItem("customProblems");

    let problems = [];

    if (savedProblems) {
      problems = JSON.parse(savedProblems);
    }

    const newProblem = {
      id: problems.length + 1,
      question,
      choices: [choice1, choice2, choice3],
      answer: Number(answer),
    };

    problems.push(newProblem);

    localStorage.setItem(
      "customProblems",
      JSON.stringify(problems)
    );

    alert("문제 추가 완료 😺");

    setQuestion("");
    setChoice1("");
    setChoice2("");
    setChoice3("");
    setAnswer(0);
  };

  return (
    <div className="min-h-screen bg-stone-100 p-6">
      <div className="max-w-3xl mx-auto space-y-6">

        <div className="bg-black text-white rounded-3xl p-6">
          <h1 className="text-4xl font-bold">
            👑 관리자 페이지
          </h1>

          <p className="mt-2 text-stone-300">
            학생 점수 확인 및 문제 추가
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            📊 학생 점수
          </h2>

          {studentResult ? (
            <div className="space-y-2 text-lg">
              <p>이름: {studentResult.name}</p>

              <p>
                점수: {studentResult.score} / {studentResult.total}
              </p>
            </div>
          ) : (
            <p>아직 제출된 점수가 없습니다.</p>
          )}
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg space-y-4">

          <h2 className="text-2xl font-bold">
            ➕ 새 문제 추가
          </h2>

          <input
            type="text"
            placeholder="문제 입력"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full border rounded-2xl px-4 py-3"
          />

          <input
            type="text"
            placeholder="선택지 1"
            value={choice1}
            onChange={(e) => setChoice1(e.target.value)}
            className="w-full border rounded-2xl px-4 py-3"
          />

          <input
            type="text"
            placeholder="선택지 2"
            value={choice2}
            onChange={(e) => setChoice2(e.target.value)}
            className="w-full border rounded-2xl px-4 py-3"
          />

          <input
            type="text"
            placeholder="선택지 3"
            value={choice3}
            onChange={(e) => setChoice3(e.target.value)}
            className="w-full border rounded-2xl px-4 py-3"
          />

          <select
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full border rounded-2xl px-4 py-3"
          >
            <option value={0}>
              정답: 선택지 1
            </option>

            <option value={1}>
              정답: 선택지 2
            </option>

            <option value={2}>
              정답: 선택지 3
            </option>
          </select>

          <button
            onClick={handleAddProblem}
            className="w-full bg-black text-white py-4 rounded-2xl font-bold"
          >
            문제 추가하기
          </button>
        </div>

        <button
          onClick={() => router.push("/")}
          className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold"
        >
          학생 화면으로 돌아가기
        </button>

      </div>
    </div>
  );
}