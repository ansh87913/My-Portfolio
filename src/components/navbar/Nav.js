import {Link} from "react-router-dom";

export default function Nav(){
    return(
    <div class="container_flex text-light">
      <nav>
        <ul class="nav__links">
          <li class="link">
            <Link to="/">About</Link>
          </li>
          <li class="link">
            <Link to="/skills">Skills</Link>
          </li>
          <li class="link">
            <Link to="/projects">Projects</Link>
          </li>
          <li class="link">
            <Link to="/certificates">Certificates</Link>
          </li>
          <li class="link">
            <Link to="/education">Education</Link>
          </li>
          <li class="link">
            <a href="https://drive.google.com/file/d/1A05KNWkmRJNAZEL-6AHMCZUezD_97cgs/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
          <li class="link">
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </div>
    )
}
