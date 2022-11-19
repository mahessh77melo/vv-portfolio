import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import projectsJson from "./projects.json";
import "./Projects.scss";

const Projects = () => {
	const projectsArray = projectsJson || [];
	console.log(projectsArray);
	return (
		<div className="projects">
			{projectsArray.map((pro) => (
				<div className="project" key={projectsArray.title}>
					<div className="project__title">{pro.title}</div>
					<div className="project__domain">{pro.domain}</div>
					<div className="project__tools">
						{pro.tools?.map((tool) => (
							<div className="project__tools-item" key={tool}>
								{tool}
							</div>
						))}
					</div>
					<div className="project__links">
						<a href={pro.github} className="project__link">
							<GitHubIcon />
						</a>
						{pro.website && (
							<a
								href="https://hulu-clone-f9922.web.app/"
								className="project__link link-web"
							>
								<WebIcon />
							</a>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default Projects;
