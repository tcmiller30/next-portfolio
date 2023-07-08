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
    const [showProjectModal, setShowProjectModal] = useState(false);
    const handleOnClose = () => setShowProjectModal(false);

  return (
    <>
      <div className="flex flex-wrap">
        <article
          onClick={() => setShowProjectModal(true)}
          className="bg-white p-1 mx-2 my-2 w-full shadow-lg rounded-xl cursor-pointer md:w-1/2 lg:w-1/3"
        >
          <div href="/" className="bg-blue-950 rounded-lg p-4">
            <div className="flex items-center">
              <FaCode
                size="3em"
                className="p-2 fill-white-500 bg-gradient-radial from-blue-600 rounded-full"
              />
              <h3 className="ms-4 text-lg tracking-tighter md:text-xl">
                Coding Quiz Challenge
              </h3>
            </div>
          </div>
        </article>

        <article
          onClick={() => setShowProjectModal(true)}
          className="bg-white p-1 mx-2 my-2 w-full shadow-lg rounded-xl cursor-pointer md:w-1/2 lg:w-1/3"
        >
          <div className="bg-blue-950 rounded-lg p-4">
            <div className="flex items-center">
              <FaCloudSun
                size="3em"
                className="p-2 fill-white-500 bg-gradient-radial from-blue-600 rounded-full"
              />
              <h3 className="ms-4 text-xl tracking-tighter md:text-xl">
                Weather Dashboard
              </h3>
            </div>
          </div>
        </article>

        <article
          onClick={() => setShowProjectModal(true)}
          className="bg-white p-1 mx-2 my-2 w-full shadow-lg rounded-xl cursor-pointer md:w-1/2 lg:w-1/3"
        >
          <div className="bg-blue-950 rounded-lg p-4">
            <div className="flex items-center">
              <FaLock
                size="3em"
                className="p-2 fill-white-500 bg-gradient-radial from-blue-600 rounded-full"
              />
              <h3 className="ms-4 text-xl tracking-tighter md:text-xl">
                Password Generator
              </h3>
            </div>
          </div>
        </article>

        <article
          onClick={() => setShowProjectModal(true)}
          className="bg-white p-1 mx-2 my-2 w-full shadow-lg rounded-xl cursor-pointer md:w-1/2 lg:w-1/3"
        >
          <div className="bg-blue-950 rounded-lg p-4">
            <div className="flex items-center">
              <FaCheckCircle
                size="3em"
                className="p-2 fill-white-500 bg-gradient-radial from-blue-600 rounded-full"
              />
              <h3 className="ms-4 text-lg tracking-tighter md:text-xl">
                Note Taker
              </h3>
            </div>
          </div>
        </article>

        <article
          onClick={() => setShowProjectModal(true)}
          className="bg-white p-1 mx-2 my-2 w-full shadow-lg rounded-xl cursor-pointer md:w-1/2 lg:w-1/3"
        >
          <a href="#">
            <div className="bg-blue-950 rounded-lg p-4">
              <div className="flex items-center">
                <FaMicroblog
                  size="3em"
                  className="p-2 fill-white-500 bg-gradient-radial from-blue-600 rounded-full"
                />
                <h3 className="ms-4 text-xl tracking-tighter md:text-xl">
                  Tech Blog
                </h3>
              </div>
            </div>
          </a>
        </article>

        <article
          onClick={() => setShowProjectModal(true)}
          className="bg-white p-1 mx-2 my-2 w-full shadow-lg rounded-xl cursor-pointer md:w-1/2 lg:w-1/3"
        >
          <div className="bg-blue-950 rounded-lg p-4">
            <div className="flex items-center">
              <FaCalendarDay
                size="3em"
                className="p-3 fill-white-500 bg-gradient-radial from-blue-600 rounded-full"
              />
              <h3 className="ms-4 text-xl tracking-tighter md:text-xl">
                Workday Scheduler
              </h3>
            </div>
          </div>
        </article>
      </div>
      <ProjectModal onClose={handleOnClose} visible={showProjectModal} />
    </>
  );
}
