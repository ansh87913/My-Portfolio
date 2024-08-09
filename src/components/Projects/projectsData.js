import P1 from "../../images/Project1.png";
import P2 from "../../images/Project2.png";
import P3 from "../../images/Project3.png";

const projectsData = [
  {
    id: 1,
    imageUrl: P3,
    tags: ["JavaScript", "React", "HTML", "CSS", "Bootstrap"],
    title: "Portfolio",
    description: "Created a responsive personal portfolio website using React.js, JavaScript, HTML, CSS, and Bootstrap. It includes a dynamic UI all styled with Bootstrap and CSS for a modern design and optimized for all devices",
    github: "https://github.com/ansh87913/My-Portfolio",
  },
  {
    id: 2,
    imageUrl: P1,
    tags: ["Express JS", "MongoDB", "Node JS", "JavaScript", "React"],
    title: "Student Administrator",
    description: "This is a Student database management app which allows CRUD Operations on student database(i.e. Delete, Create, Update student details)",
    github: "https://github.com/ansh87913/Frontend-Deployment",
  },
  {
    id: 3,
    imageUrl: P2,
    tags: ["JavaScript", "React"],
    title: "Calculator",
    description: "This Calculator is a user-friendly application built using React.js, designed to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It features an intuitive interface with real-time calculation display, keyboard support",
    github: "https://github.com/ansh87913/React-Frontend-2",
  },
];

export default projectsData;
