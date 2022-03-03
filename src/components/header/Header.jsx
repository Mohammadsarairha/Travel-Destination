import { Link } from 'react-router-dom';
import "./Header.css";

let Header = () => {
    return (
        <nav>
            <Link to="/"> Home</Link>
        </nav>
    );
}

export default Header;