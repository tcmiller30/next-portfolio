"use client";
import {
  FaCode,
  FaCloudSun,
  FaCheckCircle,
  FaLock,
  FaCalendarDay,
  FaMicroblog,
} from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

export default function Projects() {
  const [projectModal, setProjectModal] = useState(false);

  const [activeProject, setActiveProject] = useState("");

  return (
    <>
      <div className="mx-auto flex flex-wrap gap-4">
        <article
          id="codingQuiz"
          onClick={() => {
            setProjectModal(true);
            setActiveProject("codingQuiz");
          }}
          className="hover:transition-color mx-4 my-auto w-full cursor-pointer rounded-xl bg-white p-1 shadow-lg duration-200 ease-in-out hover:bg-yellow-500 md:mx-auto md:w-2/3 lg:w-2/5"
        >
          <div href="/" className="rounded-lg bg-blue-950 p-4">
            <div className="flex items-center">
              <FaCode
                size="3em"
                className="fill-white-500 rounded-full bg-gradient-radial from-blue-600 p-2"
              />
              <h3 className="ms-4 text-lg tracking-tighter md:text-xl">
                Coding Quiz Challenge
              </h3>
            </div>
          </div>
        </article>

        <article
          id="weatherDashboard"
          onClick={() => {
            setProjectModal(true);
            setActiveProject("weatherDashboard");
          }}
          className="hover:transition-color mx-4 my-auto w-full cursor-pointer rounded-xl bg-white p-1 shadow-lg duration-200 ease-in-out hover:bg-yellow-500 md:mx-auto md:w-2/3 lg:w-2/5"
        >
          <div className="rounded-lg bg-blue-950 p-4">
            <div className="flex items-center">
              <FaCloudSun
                size="3em"
                className="fill-white-500 rounded-full bg-gradient-radial from-blue-600 p-2"
              />
              <h3 className="ms-4 text-xl tracking-tighter md:text-xl">
                Weather Dashboard
              </h3>
            </div>
          </div>
        </article>

        <article
          id="passwordGenerator"
          onClick={() => {
            setProjectModal(true);
            setActiveProject("passwordGenerator");
          }}
          className="hover:transition-color mx-4 my-auto w-full cursor-pointer rounded-xl bg-white p-1 shadow-lg duration-200 ease-in-out hover:bg-yellow-500 md:mx-auto md:w-2/3 lg:w-2/5"
        >
          <div className="rounded-lg bg-blue-950 p-4">
            <div className="flex items-center">
              <FaLock
                size="3em"
                className="fill-white-500 rounded-full bg-gradient-radial from-blue-600 p-2"
              />
              <h3 className="ms-4 text-xl tracking-tighter md:text-xl">
                Password Generator
              </h3>
            </div>
          </div>
        </article>

        <article
          id="noteTaker"
          onClick={() => {
            setProjectModal(true);
            setActiveProject("noteTaker");
          }}
          className="hover:transition-color mx-4 my-auto w-full cursor-pointer rounded-xl bg-white p-1 shadow-lg duration-200 ease-in-out hover:bg-yellow-500 md:mx-auto md:w-2/3 lg:w-2/5"
        >
          <div className="rounded-lg bg-blue-950 p-4">
            <div className="flex items-center">
              <FaCheckCircle
                size="3em"
                className="fill-white-500 rounded-full bg-gradient-radial from-blue-600 p-2"
              />
              <h3 className="ms-4 text-lg tracking-tighter md:text-xl">
                Note Taker
              </h3>
            </div>
          </div>
        </article>

        <article
          id="techBlog"
          onClick={() => {
            setProjectModal(true);
            setActiveProject("techBlog");
          }}
          className="hover:transition-color mx-4 my-auto w-full cursor-pointer rounded-xl bg-white p-1 shadow-lg duration-200 ease-in-out hover:bg-yellow-500 md:mx-auto md:w-2/3 lg:w-2/5"
        >
          <a href="#">
            <div className="rounded-lg bg-blue-950 p-4">
              <div className="flex items-center">
                <FaMicroblog
                  size="3em"
                  className="fill-white-500 rounded-full bg-gradient-radial from-blue-600 p-2"
                />
                <h3 className="ms-4 text-xl tracking-tighter md:text-xl">
                  Tech Blog
                </h3>
              </div>
            </div>
          </a>
        </article>

        <article
          id="workdayScheduler"
          onClick={() => {
            setProjectModal(true);
            setActiveProject("workdayScheduler");
          }}
          className="hover:transition-color mx-4 my-auto w-full cursor-pointer rounded-xl bg-white p-1 shadow-lg duration-200 ease-in-out hover:bg-yellow-500 md:mx-auto md:w-2/3 lg:w-2/5"
        >
          <div className="rounded-lg bg-blue-950 p-4">
            <div className="flex items-center">
              <FaCalendarDay
                size="3em"
                className="fill-white-500 rounded-full bg-gradient-radial from-blue-600 p-2"
              />
              <h3 className="ms-4 text-xl tracking-tighter md:text-xl">
                Workday Scheduler
              </h3>
            </div>
          </div>
        </article>
      </div>
      <ProjectModal
        trigger={projectModal}
        setTrigger={setProjectModal}
        activeProject={activeProject}
      />
    </>
  );
}
