import Project from "./Project";

const Results = ({ proj }) => {
  return (
    <div className="search">
      {(
        proj.map((proj) => (
          <Project
            key={proj.id}
            name={proj.name}
            image={proj.image}
            description={proj.description}
            id={proj.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;