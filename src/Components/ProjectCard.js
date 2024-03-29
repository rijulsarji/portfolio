import { FaGithub } from "react-icons/fa";
import "../CSS/Components CSS/projectCard.css";

function ProjectCard(props) {
  return (
    <div className="pcc-body">
      <div className="pcc-front" style={{ backgroundColor: `${props.color}` }}>
        <img src={props.image} alt={props.link} />
      </div>

      <div
        className="pcc-back"
        style={{
          backgroundColor: `${props.color}`,
          color: `${props.textcolor}`,
        }}
      >
        <p>{props.name}</p>
        <p>{props.description}</p>
        <div className="pcc-back-link">
          <FaGithub />
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: `${props.textcolor}` }}
          >
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
