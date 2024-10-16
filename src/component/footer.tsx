import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function Footer(){
    return(
       <div> <footer className="footer-container">
            <h3>Follow us</h3>
            <div className="footer-icon">
                <FaInstagram />
            <FaFacebookF />
            <FaYoutube />
            <FaTiktok /></div>
        </footer>
        <div className="footer-label">
   <p>Copyright © 2024 Design By Mahnoor Ashfaq</p>
        </div>
        </div>
    )
}