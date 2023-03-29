import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {

    return (
        <header>
            <h1>GRUPO 3</h1>
            <nav>
                <ul>

                    <Link to="/grupos"><li>GRUPOS</li></Link>

                    <Link to="/"><li class="btn-sign-out">SIGN OUT</li></Link>
                </ul>
            </nav>

        </header>

    )
}

export default Header;