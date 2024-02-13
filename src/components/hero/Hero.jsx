import "./hero.scss"
import { motion } from "framer-motion";
const textVariants=
{
  initial:{
    x: -500,
    opacity:0,
  },
  animate:{
    x: 0,
    opacity:1,
    transition:{
      duration: 1,
      staggerChildren:0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  }
};
const sliderVariants=
{
  initial:{
    x: 0,
  },
  animate:{
    x: "-220%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:20,
      staggerChildren:0.1,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div 
            className="textContainer" 
            variants={textVariants} 
            initial ="initial" 
            animate="animate"
            >
                <motion.h2 variants={textVariants}>PRATAY NANDY</motion.h2>
                <motion.h1 variants={textVariants}>Software Development Engineer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants}>See the Lastest Works</motion.button>
                <motion.button variants={textVariants}>Contact Here</motion.button>
                </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="scroll.png" alt="" />
            </motion.div>
        </div>
        <motion.div 
        variants= {sliderVariants} 
        initial = "initial" 
        animate ="animate" 
        className="slidingTextContainer"
        >
          Full Stack Developer
        </motion.div>
        <div className="imageContainer">
            <img src="Candidate Photo.png" alt ="main pic"/>
        </div>
    </div>
  );
};

export default Hero