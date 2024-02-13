import Sidebar from "../Sidebar/Sidebar";
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span
              initial={{opacity:0,scale:0.5}}
              animate={{opacity:1,scale:1}}
              transition={{duration:0.7}}>
            {/* Name */}
            Pratay Nandy
            </motion.span>
            <motion.div 
              initial={{opacity:0,scale:0.5}}
              animate={{opacity:1,scale:1}}
              transition={{duration:0.7}}
              className="social">
                <a href="https://github.com/pratay-jr">
                  <img src="/github.png" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/pratay-nandy-9ba57b229/"><img src="/linkedin.png" alt="" /></a>
                <a href="mailto:prataynandy147@gmail.com">
                  <img src="/gmail_NEW.png" alt="" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=9830335113&text=Hi%20,%20how%20are%20you">
                  <img src="/wp.png" alt="" />
                </a>
                <a href="https://www.instagram.com/pratay_nandy/">
                  <img src="/instagram.png" alt="" />
                </a>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar;