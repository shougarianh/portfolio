import Results from "./Results";
import { useState , useEffect} from "react";


const Projectspage = ()  => {
    const[proj, setProj] = useState([]);
    useEffect(() => {
        requestPets();
      }, []); //eslint-disable-line react-hooks/exhaustive-deps
    
      async function requestPets() {
        const res = await fetch(
          "MyProjects.JSON"
        );
        const json = await res.json();
        console.log(proj);
        setProj(json.projects);
      }

    return (
        <div className="background">
            <Results proj={proj} />
        </div>
    )
}

export default Projectspage