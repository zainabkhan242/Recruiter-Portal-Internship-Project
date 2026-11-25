import React, { useEffect, useState } from "react";
import axios from "axios";
import CandidateCard from "./CandidateCard";

const RecruiterPortal = () => {
  const [skillsList, setSkillsList] = useState([]);
  const [jobList, setJobList] = useState([]);
  const [skill, setSkill] = useState("");
  const [job, setJob] = useState("");
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/dropdowns/skill").then(res => setSkillsList(res.data));
    axios.get("http://localhost:5000/api/dropdowns/job").then(res => setJobList(res.data));
  }, []);

  const fetchCandidates = async () => {
    const res = await axios.get(`http://localhost:5000/api/match?skill=${skill}&job=${job}`);
    setCandidates(res.data);
  };

  return (
    <div className="page">
      <h1>Top 5 Matching Candidates</h1>

      <select value={skill} onChange={(e) => setSkill(e.target.value)}>
        <option value="">--Select Skill--</option>
        {skillsList.map((s, i) => <option key={i} value={s}>{s}</option>)}
      </select>

      <select value={job} onChange={(e) => setJob(e.target.value)}>
        <option value="">--Select Job--</option>
        {jobList.map((j, i) => <option key={i} value={j}>{j}</option>)}
      </select>

      <button onClick={fetchCandidates}>Match</button>

      {candidates.length === 0 ? (
        <p>No matching candidates yet.</p>
      ) : (
        candidates.map((c, i) => <CandidateCard key={i} candidate={c} />)
      )}
    </div>
  );
};

export default RecruiterPortal;
