import "../Styles/Project.css"
import { ExternalLink } from "react-external-link";
const Project = ({ name, description , image, tech, link, id })  => {
    return (
      <div className="card">
          <img className="project-image" src={image} alt={name} />
          <ul>
            <li> 
              <h2>{name}</h2>
              <p>{description}</p>
            </li>
            <li>
              <h3>Technologies Used:</h3>
              <p>{tech}</p>
              <ExternalLink className="source-code" href={link}>Link to source code</ExternalLink>
            </li>
          </ul>
        
      </div>
    )
}

export default Project