import React, { useEffect, useState } from "react";
import dummyData from "./data.json";

const TotalResult = () => {
  const [totalScore, setTotalScore] = useState(0);
  const computeTotalScore = () => {
    let total = dummyData.reduce((acumm, curIndex) => {
      return (acumm += curIndex.score);
    }, 0);
    total = Math.floor(total / dummyData.length);
    console.log(dummyData);
    setTotalScore(total);
  };
  useEffect(() => {
    computeTotalScore();
  }, []);
  return (
    <div className="flex flex-col content-center justify-around flex-wrap sm:w-screen md:w-[50%] sm: rounded-b-3xl 3xl md:rounded-3xl md:h-[100%] p-6 bg-gradient-to-t from-[#2e2be9] to-[#7857ff] text-white">
      <h1 className="flex content-center justify-center text-2xl text-gray-300">
        Your Result
      </h1>
      <div className="flex flex-wrap flex-col justify-center content-center self-center justify-self-center rounded-full h-[175px] w-[175px] bg-gradient-to-t from-[#2e2be9] to-[#2421ca] p-0 m-0 bg-gradient-to-t ">
        <h1 className="flex flex-wrap justify-center content-center text-5xl font-semibold">
          {totalScore}
        </h1>
        <p className="flex flex-wrap justify-center content-center text-sm text-gray-400">
          of 100
        </p>
      </div>
      <h2 className="flex flex-wrap justify-center content-center text-2xl font-semibold p-0 m-0 text-white">
        Great
      </h2>
      <p className="text-center w-[65%] text-gray-400">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default TotalResult;
