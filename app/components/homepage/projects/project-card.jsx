// @flow strict

import * as React from "react";

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400 hover:bg-red-600 hover:scale-110 cursor-pointer transition-all duration-200"><div></div></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-300 hover:bg-orange-500 hover:scale-110 cursor-pointer transition-all duration-200"><div></div></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-300 hover:bg-green-400 hover:scale-110 cursor-pointer transition-all duration-200"><div></div></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{"{"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">{tag}</span>
                {project.tools.length - 1 !== i && (
                  <span className="text-gray-400">{`', '`}</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-400">{"'],"}</span>
          </div>
          {project.previewLink && (
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">previewLink:</span>
              <a
                href={project.previewLink}
                target="_blank"
                className="text-orange-400"
              >
                {project.name === "No Fine" && ("demoVideo.mp4")}
                {project.name === "CampusNest" && ("campusnest.com")}
                {project.name === "OnClique" && ("onclique.com")}
                {project.name === "Silhouette" && ("silhouette.com")}
              </a>
              <span className="text-gray-400">,</span>
            </div>
          )}
          {project.frontendRepo && (
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">frontendRepo:</span>
              <a
                href={project.frontendRepo}
                target="_blank"
                className="text-orange-400"
              >
                frontend.github.com
              </a>
              <span className="text-gray-400">,</span>
            </div>
          )}
          {project.backendRepo && (
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">backendRepo:</span>
              <a
                href={project.backendRepo}
                target="_blank"
                className="text-orange-400"
              >
                backend.github.com
              </a>
              <span className="text-gray-400">,</span>
            </div>
          )}
          {project.completeRepo && (
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">projectRepo:</span>
              <a
                href={project.completeRepo}
                target="_blank"
                className="text-orange-400"
              >
                repo.github.com
              </a>
              <span className="text-gray-400">,</span>
            </div>
          )}
          {project.dockerContainer && (
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">dockerRepo:</span>
              <a
                href={project.completeRepo}
                target="_blank"
                className="text-orange-400"
              >
                repo.dockerhub.com
              </a>
              <span className="text-gray-400">,</span>
            </div>
          )}
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{" " + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="text-gray-400">{`};`}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
