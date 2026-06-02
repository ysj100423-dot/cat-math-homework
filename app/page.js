"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function CatMathHomeworkApp() {
  const router = useRouter();

  // =========================
  // 로그인 상태
  // =========================

  const [isLoggedIn, setIsLoggedIn] =
    React.useState(false);

  const [studentName, setStudentName] =
    React.useState("");

  const [email, setEmail] =
    React.useState("");

  const [password, setPassword] =
    React.useState("");

  // =========================
  // 게임 상태
  // =========================

  const [answers, setAnswers] =
    React.useState({});

  const [submitted, setSubmitted] =
    React.useState(false);

  const [score, setScore] =
    React.useState(0);

  const [streak, setStreak] =
    React.useState(7);

  // =========================
  // 6월 주차 계산
  // =========================

  const today = new Date();

  const currentMonth =
    today.getMonth() + 1;

  const currentDate =
    today.getDate();

  let week = 1;

  if (currentDate <= 7) {
    week = 1;
  } else if (currentDate <= 14) {
    week = 2;
  } else if (currentDate <= 21) {
    week = 3;
  } else {
    week = 4;
  }

  // =========================
  // 단원 이름
  // =========================

  let unitName = "다항식";

  if (week === 1) {
    unitName = "다항식";
  } else if (week === 2) {
    unitName = "방정식과 부등식";
  } else if (week === 3) {
    unitName = "경우의 수";
  } else {
    unitName = "행렬";
  }

  // =========================
  // 문제 데이터
  // =========================

  const weekProblems = {
    1: [
      {
        id: 1,
        question:
          "(x+2)(x+3)을 전개하면?",
        choices: [
          "x²+5x+6",
          "x²+6x+5",
          "x²+x+6",
        ],
        answer: 0,
      },

      {
        id: 2,
        question:
          "x²-9를 인수분해하면?",
        choices: [
          "(x-3)(x+3)",
          "(x-9)(x+1)",
          "(x-3)²",
        ],
        answer: 0,
      },

      {
        id: 3,
        question:
          "(x+1)²의 결과는?",
        choices: [
          "x²+2x+1",
          "x²+1",
          "x²+x+1",
        ],
        answer: 0,
      },

      {
        id: 4,
        question:
          "(x-4)(x+1)의 결과는?",
        choices: [
          "x²-3x-4",
          "x²+3x-4",
          "x²-4x+1",
        ],
        answer: 0,
      },

      {
        id: 5,
        question:
          "(x+5)²의 결과는?",
        choices: [
          "x²+10x+25",
          "x²+25",
          "x²+5x+25",
        ],
        answer: 0,
      },

      {
        id: 6,
        question:
          "3x+2x의 값은?",
        choices: [
          "5x",
          "6x",
          "3x²",
        ],
        answer: 0,
      },

      {
        id: 7,
        question:
          "x²+5x+6 인수분해는?",
        choices: [
          "(x+2)(x+3)",
          "(x+1)(x+6)",
          "(x-2)(x-3)",
        ],
        answer: 0,
      },

      {
        id: 8,
        question:
          "(x-2)²의 결과는?",
        choices: [
          "x²-4x+4",
          "x²+4x+4",
          "x²-2x+4",
        ],
        answer: 0,
      },

      {
        id: 9,
        question:
          "(2x+1)(x-2)의 결과는?",
        choices: [
          "2x²-3x-2",
          "2x²+3x-2",
          "2x²-4x+1",
        ],
        answer: 0,
      },

      {
        id: 10,
        question:
          "x²-16 인수분해는?",
        choices: [
          "(x-4)(x+4)",
          "(x-8)(x+2)",
          "(x-2)(x+8)",
        ],
        answer: 0,
      },
    ],

    2: [
      {
        id: 11,
        question:
          "x²-5x+6=0의 해는?",
        choices: [
          "2,3",
          "1,6",
          "-2,-3",
        ],
        answer: 0,
      },

      {
        id: 12,
        question:
          "3x+5>11 일 때 x는?",
        choices: [
          "x>2",
          "x<2",
          "x>6",
        ],
        answer: 0,
      },

      {
        id: 13,
        question:
          "x²=25의 해는?",
        choices: [
          "5,-5",
          "25",
          "0",
        ],
        answer: 0,
      },

      {
        id: 14,
        question:
          "2x-4=0의 해는?",
        choices: [
          "2",
          "4",
          "-2",
        ],
        answer: 0,
      },

      {
        id: 15,
        question:
          "x+7<10 일 때 x는?",
        choices: [
          "x<3",
          "x>3",
          "x<10",
        ],
        answer: 0,
      },

      {
        id: 16,
        question:
          "5x=20의 해는?",
        choices: [
          "4",
          "5",
          "20",
        ],
        answer: 0,
      },

      {
        id: 17,
        question:
          "x²-1=0의 해는?",
        choices: [
          "1,-1",
          "1",
          "-1",
        ],
        answer: 0,
      },

      {
        id: 18,
        question:
          "4x+8=0의 해는?",
        choices: [
          "-2",
          "2",
          "8",
        ],
        answer: 0,
      },

      {
        id: 19,
        question:
          "x-3>0 일 때 x는?",
        choices: [
          "x>3",
          "x<3",
          "x>0",
        ],
        answer: 0,
      },

      {
        id: 20,
        question:
          "2x+6=10의 해는?",
        choices: [
          "2",
          "4",
          "6",
        ],
        answer: 0,
      },
    ],

    3: [
      {
        id: 21,
        question:
          "주사위 1개의 경우의 수는?",
        choices: [
          "6",
          "12",
          "3",
        ],
        answer: 0,
      },

      {
        id: 22,
        question:
          "동전 2개의 경우의 수는?",
        choices: [
          "4",
          "2",
          "6",
        ],
        answer: 0,
      },

      {
        id: 23,
        question:
          "3명 줄세우기 경우의 수는?",
        choices: [
          "6",
          "3",
          "9",
        ],
        answer: 0,
      },

      {
        id: 24,
        question:
          "2개의 숫자 카드로 만들 수 있는 두 자리 수 개수는?",
        choices: [
          "2",
          "4",
          "6",
        ],
        answer: 0,
      },

      {
        id: 25,
        question:
          "주사위와 동전을 동시에 던질 경우의 수는?",
        choices: [
          "12",
          "6",
          "8",
        ],
        answer: 0,
      },

      {
        id: 26,
        question:
          "4명 줄세우기 경우의 수는?",
        choices: [
          "24",
          "16",
          "12",
        ],
        answer: 0,
      },

      {
        id: 27,
        question:
          "동전 3개의 경우의 수는?",
        choices: [
          "8",
          "6",
          "4",
        ],
        answer: 0,
      },

      {
        id: 28,
        question:
          "A,B 두 명 악수 경우의 수는?",
        choices: [
          "1",
          "2",
          "3",
        ],
        answer: 0,
      },

      {
        id: 29,
        question:
          "3개의 숫자로 만들 수 있는 세 자리 수 개수는?",
        choices: [
          "6",
          "9",
          "3",
        ],
        answer: 0,
      },

      {
        id: 30,
        question:
          "가위바위보 경우의 수는?",
        choices: [
          "3",
          "2",
          "6",
        ],
        answer: 0,
      },
    ],

    4: [
      {
        id: 31,
        question:
          "2x2 행렬의 행 개수는?",
        choices: [
          "2",
          "1",
          "4",
        ],
        answer: 0,
      },

      {
        id: 32,
        question:
          "2x2 행렬의 열 개수는?",
        choices: [
          "2",
          "1",
          "4",
        ],
        answer: 0,
      },

      {
        id: 33,
        question:
          "행렬 A+B는 무엇?",
        choices: [
          "같은 위치끼리 더함",
          "곱함",
          "나눔",
        ],
        answer: 0,
      },

      {
        id: 34,
        question:
          "행렬의 크기는 무엇으로 나타내나?",
        choices: [
          "행x열",
          "열x행",
          "숫자",
        ],
        answer: 0,
      },

      {
        id: 35,
        question:
          "1x3 행렬의 열 개수는?",
        choices: [
          "3",
          "1",
          "4",
        ],
        answer: 0,
      },

      {
        id: 36,
        question:
          "3x1 행렬의 행 개수는?",
        choices: [
          "3",
          "1",
          "2",
        ],
        answer: 0,
      },

      {
        id: 37,
        question:
          "행렬은 무엇으로 이루어져 있나?",
        choices: [
          "숫자 배열",
          "문장",
          "그림",
        ],
        answer: 0,
      },

      {
        id: 38,
        question:
          "같은 크기 행렬끼리 가능한 것은?",
        choices: [
          "덧셈",
          "나눗셈",
          "루트",
        ],
        answer: 0,
      },

      {
        id: 39,
        question:
          "행렬의 위치는 무엇으로 나타내나?",
        choices: [
          "행과 열",
          "숫자",
          "기호",
        ],
        answer: 0,
      },

      {
        id: 40,
        question:
          "2x3 행렬의 숫자 개수는?",
        choices: [
          "6",
          "5",
          "3",
        ],
        answer: 0,
      },
    ],
  };

  // =========================
  // 오늘의 문제
  // =========================

  const problems =
    weekProblems[week];

  // =========================
  // 문제 선택
  // =========================

  const handleSelect = (
    problemId,
    choiceIndex
  ) => {
    setAnswers({
      ...answers,
      [problemId]: choiceIndex,
    });
  };

  // =========================
  // 제출
  // =========================

  const handleSubmit = () => {
    let newScore = 0;

    problems.forEach((problem) => {
      if (
        answers[problem.id] ===
        problem.answer
      ) {
        newScore++;
      }
    });

    setScore(newScore);
    setSubmitted(true);
  };

  // =========================
  // 로그인
  // =========================

  const handleLogin = () => {
    if (
      !studentName ||
      !email ||
      !password
    ) {
      alert("모든 칸 입력!");
      return;
    }

    setIsLoggedIn(true);
  };

  // =========================
  // 관리자 이동
  // =========================

  const moveAdmin = () => {
    router.push("/admin-login");
  };

  // =========================
  // 로그인 화면
  // =========================

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center p-6">

        <div className="bg-white rounded-3xl p-10 shadow-xl w-full max-w-md">

          <div className="text-6xl text-center mb-4">
            🐱
          </div>

          <h1 className="text-4xl font-bold text-center mb-6 text-orange-500">
            고양이 수학 숙제
          </h1>

          <input
            type="text"
            placeholder="이름"
            value={studentName}
            onChange={(e) =>
              setStudentName(
                e.target.value
              )
            }
            className="w-full border p-4 rounded-2xl mb-4"
          />

          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border p-4 rounded-2xl mb-4"
          />

          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full border p-4 rounded-2xl mb-6"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold mb-3"
          >
            학생 로그인 🐾
          </button>

          <button
            onClick={moveAdmin}
            className="w-full bg-black text-white py-4 rounded-2xl font-bold"
          >
            관리자 로그인 👑
          </button>
        </div>
      </div>
    );
  }

  // =========================
  // 메인 화면
  // =========================

  return (
    <div className="min-h-screen bg-orange-50 p-6">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl p-6 shadow-lg mb-6">

          <h1 className="text-4xl font-bold text-orange-500 mb-2">
            🐱 오늘의 수학 숙제
          </h1>

          <p className="text-lg">
            {studentName} 학생
          </p>

          <p className="text-stone-500">
            🔥 {streak}일 연속 학습
          </p>

          <p className="text-stone-500">
            📚 이번 주 단원:
            {unitName}
          </p>

          <p className="text-stone-500">
            📅 {currentMonth}월 {currentDate}일
          </p>
        </div>

        <div className="space-y-6">
          {problems.map(
            (problem, index) => (
              <div
                key={problem.id}
                className="bg-white rounded-3xl p-6 shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-5">
                  문제 {index + 1}
                </h2>

                <p className="text-lg mb-5">
                  {problem.question}
                </p>

                <div className="space-y-3">
                  {problem.choices.map(
                    (
                      choice,
                      choiceIndex
                    ) => (
                      <button
                        key={
                          choiceIndex
                        }
                        onClick={() =>
                          handleSelect(
                            problem.id,
                            choiceIndex
                          )
                        }
                        className={`w-full text-left p-4 rounded-2xl border ${
                          answers[
                            problem.id
                          ] ===
                          choiceIndex
                            ? "bg-orange-200 border-orange-400"
                            : "bg-white"
                        }`}
                      >
                        {choice}
                      </button>
                    )
                  )}
                </div>
              </div>
            )
          )}
        </div>

        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 text-white py-5 rounded-3xl font-bold text-2xl mt-8"
          >
            제출하기 🐾
          </button>
        ) : (
          <div className="bg-white rounded-3xl p-8 shadow-lg mt-8 text-center">

            <h2 className="text-4xl font-bold text-orange-500 mb-4">
              결과 🎉
            </h2>

            <p className="text-3xl">
              {score} / 10
            </p>
          </div>
        )}
      </div>
    </div>
  );
}