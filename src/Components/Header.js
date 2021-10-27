
import react,{useState} from "react";
import Nav from "./Nav";

function Header(props) {
    // console.log(props.data)
    const [sidebar,showSidebar] = useState(false);
    const toggle = () => {
        showSidebar(!sidebar);
    };
    return(
        <div className="Header">
                    <div className="top-header">
                        <div className="container top-header-content">
                            <div className="right">
                                <div className="location">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.902" height="16.025"><path data-name="Path 1" d="M7 0a6.957 6.957 0 0 0-7 7 6.722 6.722 0 0 0 2.1 5c.1.1 4.1 3.7 4.2 3.8a1.049 1.049 0 0 0 1.3 0c.1-.1 4.2-3.7 4.2-3.8a6.722 6.722 0 0 0 2.1-5A6.812 6.812 0 0 0 7 0Zm0 9a2 2 0 1 1 2-2 2.006 2.006 0 0 1-2 2Z" fill="#212529"/></svg>
                                    <span className="top-header-text">1600 Amphitheatre Parkway, CA 94043</span>
                                </div>
                                <div className="email">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="#212529"><path data-name="Path 2" d="M14 0H2a2 2 0 0 0-2 2v.4l8 4.5 8-4.4V2a2 2 0 0 0-2-2Z"/><path data-name="Path 3" d="M7.5 8.9 0 4.7V12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4.7L8.5 8.9a1.243 1.243 0 0 1-1 0Z"/></g></svg>
                                    <span className="top-header-text">vctung@outlook.com</span>
                                </div>
                            </div>
                            <div className="left">
                                <div className="header-icons">
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path data-name="Path 4" d="M3.023 16 3 9H0V6h3V4c0-2.7 1.672-4 4.079-4a22.346 22.346 0 0 1 2.434.124v2.821h-1.67c-1.31 0-1.563.622-1.563 1.535V6H10L9 9H6.28v7Z" fill="#212529"/></svg></a>
                                <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path data-name="Path 8" d="M8 0a8.024 8.024 0 0 0-8 8 7.838 7.838 0 0 0 5.1 7.4 8.845 8.845 0 0 1 0-2.3c.1-.6.9-4 .9-4A2.653 2.653 0 0 1 5.8 8c0-1.1.7-2 1.5-2a.972.972 0 0 1 1 1.1 11.98 11.98 0 0 1-.7 2.7 1.125 1.125 0 0 0 1.2 1.4c1.4 0 2.5-1.5 2.5-3.7A3.206 3.206 0 0 0 8 4.2a3.44 3.44 0 0 0-3.6 3.5A3.216 3.216 0 0 0 5 9.5v.4a5.073 5.073 0 0 0-.2.9c0 .1-.1.2-.3.1a3.577 3.577 0 0 1-1.6-3.1C2.9 5.3 4.7 3 8.2 3a4.662 4.662 0 0 1 4.9 4.6c0 2.8-1.7 5-4.2 5a2 2 0 0 1-1.8-.9s-.4 1.5-.5 1.9a10.243 10.243 0 0 1-1 2.1A9.863 9.863 0 0 0 8 16 8 8 0 0 0 8 0Z" fill="#212529"/></svg></a>
                                <a href="#">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13"><path data-name="Path 5" d="M16 1.5a5.918 5.918 0 0 1-1.9.5A2.827 2.827 0 0 0 15.5.2a6.561 6.561 0 0 1-2.1.8A3.492 3.492 0 0 0 11 0a3.311 3.311 0 0 0-3.2 3.3 1.483 1.483 0 0 0 .1.7A9.2 9.2 0 0 1 1.1.6a3.064 3.064 0 0 0-.4 1.7A3.282 3.282 0 0 0 2.2 5a4.191 4.191 0 0 1-1.5-.4 3.228 3.228 0 0 0 2.6 3.2 2.769 2.769 0 0 1-.9.1 1.268 1.268 0 0 1-.6-.1 3.24 3.24 0 0 0 3.1 2.3 6.359 6.359 0 0 1-4.1 1.4H0A9.757 9.757 0 0 0 5 13a9.256 9.256 0 0 0 9.3-9.3v-.4A5.814 5.814 0 0 0 16 1.5Z" fill="#212529"/></svg></a>
                                <a href="#">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><circle data-name="Ellipse 1" cx=".96" cy=".96" r=".96" transform="translate(11.185 2.932)" fill="#212529"/><path data-name="Path 6" d="M8 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z" fill="#212529"/><path data-name="Path 7" d="M12 16H4a4.214 4.214 0 0 1-4-4V4a4.214 4.214 0 0 1 4-4h8a4.214 4.214 0 0 1 4 4v8a4.214 4.214 0 0 1-4 4ZM4 2a2.265 2.265 0 0 0-2 2v8a2.231 2.231 0 0 0 2 2h8a2.265 2.265 0 0 0 2-2V4a2.265 2.265 0 0 0-2-2Z" fill="#212529"/></svg></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navigation">
                        <div className="container navbar">
                            <div className="logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="66" height="52"><g data-name="Group 8"><g data-name="Group 6"><path data-name="Path 17" d="M0 9.317a171.71 171.71 0 0 1 5.725 30.67C15.418 42.24 25.29 45.826 33.225 52V19.733a45.9 45.9 0 0 0-12.5-6.951A57.508 57.508 0 0 0 0 9.317Z" fill="#103867"/><path data-name="Path 18" d="M33.221 18.812S23.483 8.801 2.961 8l-.794-3.37s23.958 1.428 31.054 14.182Z" fill="#fdc800"/><path data-name="Path 19" d="M33.221 17.032s-7.905-11.75-28.226-13.8L4.348-.002s19.404 1.835 28.873 17.034Z" fill="#bec5d0"/></g><g data-name="Group 7"><path data-name="Path 20" d="M66 9.318a171.674 171.674 0 0 0-5.725 30.67c-9.694 2.253-19.565 5.839-27.5 12.013V19.734a45.9 45.9 0 0 1 12.5-6.95A57.512 57.512 0 0 1 66 9.318Z" fill="#002147"/><path data-name="Path 21" d="M32.778 18.812S42.516 8.801 63.038 8l.794-3.37S39.875 6.059 32.778 18.812Z" fill="#fdc800"/><path data-name="Path 22" d="M32.778 17.033s7.905-11.75 28.225-13.8l.647-3.234S42.246 1.833 32.778 17.033Z" fill="#bec5d0"/></g></g></svg>
                                <span className="logo-text">For Education</span>
                            </div>
                            <div className="menus">
                                {/* <div className="nav">
                                    <ul className="nav-list">
                                        <li className="nav-item"><a href="#">Home</a></li>
                                        <li className="nav-item"><a href="#">About</a></li>
                                        <li className="nav-item"><a href="#">Courses</a></li>
                                        <li className="nav-item"><a href="#">Contact</a></li>
                                    </ul>
                                </div> */}
                                <Nav />
                                <div className="buttons">
                                    <button className="signUp" onClick={props.data}>Sign up</button>
                                    <button className="Search">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path data-name="Path 9" d="M7 14a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7ZM7 2a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5Z" fill="#212529"/><path data-name="Path 10" d="M15.707 14.293 13.314 11.9a8.019 8.019 0 0 1-1.414 1.414l2.393 2.393a1 1 0 1 0 1.414-1.414Z" fill="#212529"/></svg>
                                    </button>
                                </div>
                            </div>
                            {/* mobile menu */}
                            <div class="menu-icon" onClick={()=>toggle(false)}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            {
                                sidebar?
                                <div className="sidebar">

                                </div>
                                :null
                            }
                            
                        </div>
                    </div>
                </div>
    );
}

export default Header;