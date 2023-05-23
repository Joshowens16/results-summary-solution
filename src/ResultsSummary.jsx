/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import dummyData from "./data.json";
const ResultsSummary = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchScores = () => {
    setLoading(true);
    setScores(dummyData);
    setLoading(false);
  };
  useEffect(() => {
    fetchScores();
  }, []);
  if (loading) return "Loading...";
  return (
    <div className="flex flex-col flex-wrap content-center justify-between sm:w-screen md:w-[50%] p-6 rounded-3xl text-2xl font-semibold">
      <h1 className="flex self-start justify-self-start">Summary</h1>
      <div className="flex flex-col content-start gap-4 mb-4">
        {scores.map((data) => {
          return (
            <div
              className={`flex flex-row justify-between self-center bg-${data.color} bg-opacity-10 w-[350px] p-3 rounded-lg`}
            >
              <p className={`text-${data.color} text-[20px]`}>
                {data.category}
              </p>
              <div className="flex flex-row">
                <p className="mr-2">{data.score}</p>
                <p className="text-gray-400 mr-2">/</p>
                <p className="text-gray-400">100</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="inline bg-[#303b5a] sm:mt-[40px] p-4 rounded-full text-white hover:bg-gradient-to-t hover:from-[#2e2be9] hover:to-[#7857ff]">
        Continue
      </button>
    </div>
  );
};

export default ResultsSummary;
