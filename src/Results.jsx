// eslint-disable-next-line no-unused-vars
import React from "react";
import TotalResult from "./TotalResult";
import ResultsSummary from "./ResultsSummary";

const Results = () => {
  return (
    <div className="flex sm:flex-row md:flex-row flex-col sm:justify-between md:rounded-3xl md:shadow-2xl sm:w-screen md:w-[800px] sm:h-screen md:h-[500px]">
      <>
        <TotalResult />
      </>
      <ResultsSummary />
    </div>
  );
};

export default Results;
