import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<<<<<<< HEAD
import { faHouse, faCode, faUser, faPhone, faLaptop} from '@fortawesome/free-solid-svg-icons';
=======
import { faHouse, faCode, faUser, faPhone, faLaptop } from '@fortawesome/free-solid-svg-icons';
>>>>>>> origin/master
import logo from "./logo.png";
import { Link } from 'react-router-dom';

function NavBar() {
return (
<nav>
    <div className="nav-left">
    <Link to="/"><img src={logo} alt="Logo" className="nav-logo" /></Link>
    </div>
    <ul className="nav-bar">
    <li className="nav-item"><Link to="/"><FontAwesomeIcon icon={faHouse} /> Home</Link></li>
    <li className="nav-item"><Link to="/about"><FontAwesomeIcon icon={faUser} /> About</Link></li>
    <li className="nav-item"><Link to="/skills"><FontAwesomeIcon icon={faLaptop} /> Skills</Link></li>
    <li className="nav-item"><Link to="/projects"><FontAwesomeIcon icon={faCode} /> Projects</Link></li>
    <li className="nav-item"><Link to="/Connect"><FontAwesomeIcon icon={faPhone} /> Connect</Link></li>
    </ul>
</nav>
);
}

export default NavBar;
