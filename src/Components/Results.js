import Project from "./Project";

const Results = ({ proj }) => {
  return (
    <div className="search">
      {(
        proj.map((proj) => (
          <Project
            animal={proj.animal}
            key={proj.id}
            name={proj.name}
            breed={proj.breed}
            images={proj.images}
            location={`${proj.city}, ${proj.state}`}
            id={proj.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;