import { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/logo.svg"

const Header = () => {
  return (
    <header>
        <div className="container">
            <nav>
                <div>
                    <Link to={"/"}>
                        <img src={logo} alt="Logo"/>
                    </Link>
                    <ul>
                        <li>
                            <NavLink to={"/"}><span>Home</span></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/shop"}><span>Shop</span></NavLink>
                        </li>
                    </ul>
                    <div>
                        <Link to={"/account"}>Account</Link>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  );
};

export default memo(Header);