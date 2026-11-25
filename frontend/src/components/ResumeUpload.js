import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResumeUpload = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', skills: '', location: '', jobTitle: ''
  });
  const [file, setFile] = useState(null);
  const [skillsList, setSkillsList] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/dropdowns/skill").then(res => setSkillsList(res.data));
    axios.get("http://localhost:5000/api/dropdowns/job").then(res => setJobTitles(res.data));
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpload = async () => {
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    if (file) data.append("resume", file);

    await axios.post("http://localhost:5000/api/upload", data);
    alert("Resume uploaded!");
  };

  return (
    <div className="page">
      <h2>Upload Your Resume</h2>
      <input name="name" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} />
      <input name="location" placeholder="Location" onChange={handleChange} />
      
      <select name="skills" onChange={handleChange}>
        <option value="">Select Skill</option>
        {skillsList.map((s, i) => <option key={i} value={s}>{s}</option>)}
      </select>

      <select name="jobTitle" onChange={handleChange}>
        <option value="">Select Job Title</option>
        {jobTitles.map((j, i) => <option key={i} value={j}>{j}</option>)}
      </select>

      <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ResumeUpload;

