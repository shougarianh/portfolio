import "../Styles/Projectspage.css";
const Project = ({ name, description , image, id })  => {
    return (
      <div className="card">
        <div className="card-body">
          <img src={image} alt={name} />
          <h2 className="card-title">{name}</h2>
          <p className="card-description">{description}</p>
        </div>
        
      </div>
    )
}

export default Project