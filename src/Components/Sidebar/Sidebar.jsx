import React, { useState } from "react";
import "./Sidebar.css";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaHome} from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { GiCardPickup } from "react-icons/gi";
import { IoMdLogIn } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { MdContactMail } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";


const routes = [
  { path: "/Home", name: "Home", icon: <FaHome /> },
  { path: "/Menu", name: "Menu", icon: <MdOutlineMenuBook /> },
  { path: "/delivery", name: "Delivery", icon: <MdDeliveryDining /> },
  { path: "/feedback", name: "Feedback", icon: <MdOutlineFeedback /> },
  { path: "/PickUp", name: "Pick Up", icon: <GiCardPickup /> },
  { path: "/ContactUs", name: "Contact Us", icon: <MdContactMail/> },
  { path: "/Signin", name: "Signin", icon: <IoMdLogIn /> },
];

const Sidebar = ({ children }) => {
  const [IsOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!IsOpen);
  };

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity:0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "8px 28px",
      opacity:1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="main-container">
      <motion.div
        animate={{ width: IsOpen ? "200px" : "40px" }}
        className="sidebar"
      >
        <div className="top_section">
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="search">
          <div className="search_icon">
            <IoIosSearch />
          </div>
          <AnimatePresence>
            {IsOpen && (
              <motion.input
              placeholder="Search here"
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, transition: { delay: 0.2 } }}
                type="text"
                variants={inputAnimation}
                style={{ fontSize: '12px' }}
              ></motion.input>
            )}
          </AnimatePresence>
        </div>
        <section className="routes">
          {routes.map((route) => (
            <NavLink
            to={route.path}
            key={route.name}
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
              <div className="icon">{route.icon}</div>
              <AnimatePresence>
              {IsOpen && <motion.div className="link-text">{route.name}</motion.div>}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
