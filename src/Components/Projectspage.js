import Project from "./Project";
import Results from "./Results";
import { useState , useEffect} from "react";


const Projectspage = ()  => {
    const[proj, setProj] = useState([]);
    useEffect(() => {
        requestPets();
      }, []); //eslint-disable-line react-hooks/exhaustive-deps
    
      async function requestPets() {
        const res = await fetch(
          `http://pets-v2.dev-apis.com/pets?animal=dog`
        );
        const json = await res.json();
        setProj(json.pets);
        console.log(json);
      }
    

    return (
        <div>
            <Results proj={proj} />
        </div>
    )
}

export default Projectspage