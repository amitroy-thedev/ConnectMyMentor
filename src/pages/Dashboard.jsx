import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MentorList from "../components/MentorList";

const Dashboard = () => {
  const [name, setName] = useState("Amit");
  return (
    <>
      <Navbar onHome={false} />

      <div className="p-3 text-2xl font-medium">
        <h1>Welcome {name}</h1>
      </div>

      <MentorList/>

    </>
  );
};

export default Dashboard;
