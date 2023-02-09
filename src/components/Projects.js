import { Container, Row, Col} from "react-bootstrap"
import { ProjectCard } from './ProjectCard';
import TrackVisibility from 'react-on-screen'
import FlyptoIMG from '../assets/projectsImg/Flypto.png'
// import collabIMG from '../assets/projectsImg/collab.png'
import EcommerceIMG from '../assets/projectsImg/E-commerce.png'
// import itTakesAVillageIMG from '../assets/projectsImg/itTakesAVillage.jpeg'
import CuisineIMG from '../assets/projectsImg/Cuisine.png'
// import tinderFureverIMG from '../assets/projectsImg/tinderFurever.jpeg'
// import portfolioIMG from '../assets/projectsImg/portfolio.jpeg'
// import tictactoeIMG from '../assets/projectsImg/tictactoe.jpeg'

export const Projects = () => {

    const projects = [
        {
            title: "Crypto Trading Platform",
            imgURL: FlyptoIMG,
            stack: "Tech Stack: Ruby-on-Rails, React, Javascript, MUI, REST, Api's",
            description: "Cryptocurrency trading platform with live data, graphs, and trading options.",
            github: "https://github.com/tcloma/Flypto-Crypto",
            demo: "https://youtu.be/zczM6F1afwA"
        },
        {
            title: "Django E-commerce",
            imgURL: EcommerceIMG,
            stack: "Tech Stack: Django, Python, Javascript, Bootstrap, Server Side Rendering, Object-Oriented",
            description: "Django/Python Server Side Rendering E-commerce website equipped with cart, checkout, payment methods, product rating, and live chat",
            github: "https://github.com/AlexTaylorCoder/django-ecommerce",
            demo: "https://youtu.be/YcT69Z1SdZA"
        },
        {
            title: "Recipe Guide Application",
            imgURL: CuisineIMG,
            stack: "Tech Stack: React, Javascript, Spoonacular Api's, Bootstrap, HTML, CSS",
            description: "Recipe Guide application with instructions, ingredients, summary, and search bar for each cuisine",
            github: "https://github.com/Hammad-Faiz/React-Project",
            demo: "https://youtu.be/qE-C4HeX-Ss"
        }, 
        // {
        //     title: "Portfolio Site",
        //     imgURL: portfolioIMG,
        //     stack: "Tech Stack: React, Javascript, Bootstrap, CSS",
        //     description: "Portfolio showcasing skills, projects, & qualifications",
        //     github: "https://github.com/amart78/portfolio",
        //     demo: ""
        // },
        // {
        //     title: "TicTacToe",
        //     imgURL: tictactoeIMG,
        //     stack: "Tech Stack: Python",
        //     description: "Terminal-based 2-player Tic-tac-toe game written in Python",
        //     github: "https://github.com/amart78/tictactoe",
        //     demo: "",
        // },   
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <h2> Projects </h2>
                            <Container >
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                            <ProjectCard 
                                                key={index}
                                                {...project}
                                            />
                                            )
                                        })
                                    }
                                </Row>
                            </Container>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}