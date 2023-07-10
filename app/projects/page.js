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
      <div className="flex flex-wrap">
        <article
          id="codingQuiz"
          onClick={() => {
            setProjectModal(true);
            setActiveProject("codingQuiz");
          }}
          className="mx-2 my-2 w-full cursor-pointer rounded-xl bg-white p-1 shadow-lg hover:bg-yellow-500 md:w-1/2 lg:w-1/3"
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
          className="mx-2 my-2 w-full cursor-pointer rounded-xl bg-white p-1 shadow-lg hover:bg-yellow-500 md:w-1/2 lg:w-1/3"
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
          className="mx-2 my-2 w-full cursor-pointer rounded-xl bg-white p-1 shadow-lg hover:bg-yellow-500 md:w-1/2 lg:w-1/3"
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
          className="mx-2 my-2 w-full cursor-pointer rounded-xl bg-white p-1 shadow-lg hover:bg-yellow-500 md:w-1/2 lg:w-1/3"
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
          className="mx-2 my-2 w-full cursor-pointer rounded-xl bg-white p-1 shadow-lg hover:bg-yellow-500 md:w-1/2 lg:w-1/3"
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
          className="mx-2 my-2 w-full cursor-pointer rounded-xl bg-white p-1 shadow-lg hover:bg-yellow-500 md:w-1/2 lg:w-1/3"
        >
          <div className="rounded-lg bg-blue-950 p-4">
            <div className="flex items-center">
              <FaCalendarDay
                size="3em"
                className="fill-white-500 rounded-full bg-gradient-radial from-blue-600 p-3"
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
