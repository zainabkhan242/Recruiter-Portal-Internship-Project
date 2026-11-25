// frontend/src/components/AddUser.js
import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [formData, setFormData] = useState({ name: "", email: "", skills: "", location: "", resumeUrl: "" });

  const handleSubmit = async e => {
    e.preventDefault();
    const payload = {
      ...formData,
      skills: formData.skills.split(",").map(skill => skill.trim()),
    };
    await axios.post("http://localhost:5000/api/users", payload);
    alert("User added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <input placeholder="Skills (comma separated)" onChange={e => setFormData({ ...formData, skills: e.target.value })} />
      <input placeholder="Location" onChange={e => setFormData({ ...formData, location: e.target.value })} />
      <input placeholder="Resume URL" onChange={e => setFormData({ ...formData, resumeUrl: e.target.value })} />
      <button type="submit">Add Candidate</button>
    </form>
  );
};

export default AddUser;
