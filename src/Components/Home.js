import "../Styles/Home.css";
function Home(){
    return(
        <div>
            
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
                                I am a recent graduate from the University of
                                Massachusetts-Boston actively searching for
                                software engineering roles.
                            </p>
                            <p>
                                Since the beginning of my journey in this field,
                                my dedication to my work has led me towards
                                growth as an engineer and towards some exceptional projects.
                                Take a moment to explore my portfolio which includes
                                some of my programming projects from the University
                                Of Massachusetts-Boston as well as some personal
                                projects.
                            </p>
                            <p>
                                I have a passion for technology, specifically artificial
                                intelligence. In the future, I hope that I can be part of
                                a team that will help me grow as an engineer and explore
                                topics such as AI and machine learning.
                            </p>
                            <p>
                                Outside of my profession, I play Hockey and Soccer which
                                are my two favorite sports. I am a first generation immigrant
                                to the United States from Armenia. I have two very large dogs
                                and a cat that likes to scare both of them.
                            </p>
                            <p>
                                Please feel free to reach out to me and have a chat!
                            </p>
                        </li>
                        <li>
                            <a className="resume" href="./images/Resume22.pdf" target="_blank" alt="HELLO"> Download Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="end">
                <ul>
                    <li>
                        <h1> Contact me</h1>
                    </li>
                    <li>
                        <h3>Email: haik.shougarian001@umb.edu</h3>
                    </li>
                    <li>
                        <h3>Phone: 857-600-9172</h3>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
export default Home