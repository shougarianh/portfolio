import Project from "./Project";

const Results = ({ proj }) => {
  return (
    <div className="search">
      {(
        proj.map((proj) => (
          <Project
            key={proj.id}
            tech={proj.tech}
            name={proj.name}
            image={proj.image}
            link={proj.link}
            description={proj.description}
            id={proj.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;