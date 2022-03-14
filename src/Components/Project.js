import "../Styles/Projectspage.css";
import "../Styles/Project.css"
import { ExternalLink } from "react-external-link";
const Project = ({ name, description , image, tech, link, id })  => {
    return (
      <div className="card">
          <img src={image} alt={name} />
          <ul>
            <li> 
              <h2 className="card-title">{name}</h2>
              <p className="card-description">{description}</p>
            </li>
            <li>
              <h3>Technologies Used:</h3>
              <p>{tech}</p>
              <ExternalLink href={link}>Link to source code</ExternalLink>
            </li>
          </ul>
        
      </div>
    )
}

export default Project