import "../Styles/Projectspage.css";
const Project = ({ name, animal, breed, images, location, id })  => {
    return (
      <div className="tile">
        <div>
          <img src={images[0]} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
        </div>
      </div>
    )
}

export default Project