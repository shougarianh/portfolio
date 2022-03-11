import "../Styles/Home.css";
function Home(){
    return(
        <div>
            <div className="title">
                <h1>Haik Shougarian</h1>
            </div>
            <div className="home">
                <div className="left">
                    <ul>
                        <li><img src="./images/Haik.jpg" alt="Haik" /></li>
                        <li>
                            <h2>Software Engineer</h2>
                            <h3>Actively Seeking Software Engineering Roles</h3>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li>
                            <h1>About Me</h1>
                        </li>
                        <li className="paragraphs">
                            <p>
                                Welcome to my programming portfolio! 
                            </p>
                            <p>
                                I am a recent graduate form the University of
                                Massachusetts-Boston actively searching for
                                software engineering roles.
                            </p>
                            <p>
                                Since the beginning of my journey in this field,
                                my dedication and motivation have led me towards
                                my growth as an engineer and some exceptional projects.
                                Take a moment to explore my portfolio which includes
                                some of my programming projects from the University
                                Of Massachusetts-Boston as well as some personal
                                projects.
                            </p>
                        </li>
                        <li>
                            <button>Resume</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Home