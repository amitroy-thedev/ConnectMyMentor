import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MentorList from "../components/MentorList";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <Navbar onHome={false} />

      <div className="p-3 text-2xl font-medium">
        <h1>Welcome {currentUser?.displayName}</h1>
      </div>

      <MentorList/>

    </>
  );
};

export default Dashboard;
