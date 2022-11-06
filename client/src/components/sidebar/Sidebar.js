import React, { useContext } from 'react';
import './sidebar.css';
import UserContext from '../../context/UserContext';
import { motion } from 'framer-motion';

function Sidebar() {

    const context = useContext(UserContext);
    const { mode } = context;


    return (
        <motion.div
            whileInView={{opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className={`sidebar theme-${mode}`}
        >
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://thumbs.dreamstime.com/b/man-clothed-stylish-suit-holding-bouquet-flower-bearded-character-caucasian-young-male-wearing-elegant-bow-tie-white-shirt-156304328.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, debitis aliquid, quo voluptatum asperiores ratione explicabo praesentium blanditiis ipsa nemo.</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Travel</li>
                    <li className="sidebarListItem">Gaming</li>
                    <li className="sidebarListItem">Movies</li>
                    <li className="sidebarListItem">Science</li>
                </ul>
            </div >

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <a style={{ color: "inherit" }} href="https://www.linkedin.com/in/vaibhav-verma-21122001/" target={"_blank"} rel="noreferrer" ><i className="sidebarIcon fa-brands fa-linkedin"></i></a>
                    <a style={{ color: "inherit" }} href="https://www.instagram.com/vaibhav_verma21/" target={"_blank"} rel="noreferrer" ><i className="sidebarIcon fa-brands fa-square-instagram"></i></a>
                    <a style={{ color: "inherit" }} href="https://www.linkedin.com/in/vaibhav-verma-21122001/" target={"_blank"} rel="noreferrer" ><i className="sidebarIcon fa-brands fa-square-facebook"></i></a>
                    <a style={{ color: "inherit" }} href="https://www.linkedin.com/in/vaibhav-verma-21122001/" target={"_blank"} rel="noreferrer" ><i className="sidebarIcon fa-brands fa-square-twitter"></i></a>
                </div>
            </div>
        </motion.div >
    )
}

export default Sidebar;
