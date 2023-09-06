import "../components-style/Projects.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { projects } from "../sub-components/projects.js";

function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true})

  const mainControls = useAnimation()

  useEffect(()=> {
      if(isInView) {
          mainControls.start("visible")
      }
  }, [isInView])
   
  return (
    <motion.section ref={ref} id="projects" className="projects"
    variants={{
      hidden: {opacity: 0, y: 75},
      visible: {opacity: 1, y: 0}
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: 0.5}}
    >
      <h2> Projects </h2>
      <p>
        {" "}
        "You don´t Understand anything until you learn it more than one way"
        <span>-Marvin Minsky</span>
      </p>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-box" key={project.name}
          >
            <img className="p-image" src={project.picture} alt={project.name} />
            <div className="project-text">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>
                Demo Link: <a target="_blank" href={project.siteLink}>{project.siteLink}</a>
              </p>
              <p>
                Github Link:{" "}
                <a target="_blank" href={project.githubLink}>{project.githubLink}</a>
              </p>
              <div className="icon-box">
                Skapat med:
              {project["made with"].map((logo, index) => (
                <img className="icon-image" key={index} src={logo} alt={logo} />
              ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
