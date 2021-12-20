import "./navbar.scss"
import { SearchRounded, NotificationsRounded, ArrowDropDownRounded} from "@material-ui/icons"
import { useState } from "react"

const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);

   
   window.onscroll = () => {
       setIsScrolled(window.pageYOffset === 0 ? false : true);
       return () => (window.onscroll = null);
   };

   console.log(isScrolled);
    return (
        <div className= {isScrolled ? "navbar scrolled" : "navbar" }>
            <div className="container">
                <div className="left">
                    <img src="https://i.ibb.co/jgYHdnP/NITEWAVEWHITE.png" alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New &amp; Trending</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <SearchRounded className="icon" />
                    <span>KIDS</span>
                    <NotificationsRounded className="icon" />
                    <img src="https://i.ibb.co/JCHkpP6/cat-profile-picture.jpg" alt="" />

                    <div className="profile">
                    <ArrowDropDownRounded className="icon" />
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
