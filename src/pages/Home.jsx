import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import { Compass } from "lucide-react";
import MentorList from "../components/MentorList";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
const Home = () => {
  const {currentUser} = useAuth();
  return (
    <>
      <div className="bg-[url('./assets/wave-design.svg')] h-screen bg-cover bg-center bg-no-repeat">
        <Navbar onHome={true} />
        <div className="items-center justify-center flex flex-col mt-36">
          <h1 className="font-bold lg:text-2xl text-violet-500 flex-col flex items-center">
            <div className="mt-2 tracking-wider">
              Bridge the Gap with Alumni Mentors!
            </div>
            <div className="lg:text-5xl text-3xl">Connect, Learn, Grow </div>{" "}
          </h1>

          <div className="mt-12 flex">
            <Link className="px-2 py-2  border border-violet-600 rounded-lg duration-300 cursor-pointer flex gap-2 justify-center items-center font-medium " to={!currentUser ? "/login" : "/dashboard"}>
              <Compass color="#541690" /> Find Alumni Mentors
            </Link>
            <div>
              <button className="ml-2 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border-2 dark:border-[#656fe2] border-[#394481]  font-medium hover:cursor-pointer">
                <div className="inline-flex h-12 translate-y-0 items-center justify-center px-3  bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] dark:text-white text-black transition duration-500 group-hover:-translate-y-[150%]">
                  Join as alumni
                </div>

                <div className="ml-2 absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                  <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#394481] dark:bg-[#656fe2] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>

                  <span className="z-10">Join as alumni</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-screen"
        style={{ backgroundColor: "var(--color-softBlue)" }}
      >
        <About />


      </div>
    </>
  );
};

export default Home;
