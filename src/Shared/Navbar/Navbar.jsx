import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)
    const menuItem=<>
    
    <li><a><NavLink to="/">Home</NavLink></a></li>
    </>
    const handleLogout=()=>{
        logOut()
    }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                menuItem
                            }
                        </ul>
                    </div>
                        <Link to="/" className="flex gap-2 items-center"><img src={logo} alt="" className="w-14"/> Solo Sphere</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {
                        menuItem
                       }
                        
                    </ul>
                </div>
                <div className="navbar-end z-50">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            
                                <div className="w-10 rounded-full">
                                <img
                                referrerPolicy="no-referrer"
                                    alt="Tailwind CSS Navbar component"
                                    src={user?user.photoURL:'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'} />
                            </div>
                            
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow">
                            <li>
                                <a>
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            {
                                user?<li><button onClick={handleLogout}>Logout</button></li>:
                                <li><a><Link to="/login">Login</Link></a></li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;