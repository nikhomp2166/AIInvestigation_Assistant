import React from "react";
import { useParams } from "react-router-dom";

const CaseDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Case Detail: {id}</h1>
      <div>Case info and actions coming soon.</div>
    </div>
  );
};

export default CaseDetail;