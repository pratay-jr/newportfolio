import "./services.scss"
import { motion } from "framer-motion"

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerchildren:0.1,
        },
    },
};

const Services = () => {
  return (
    <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <p>Result driven <b>CSE</b> UG with <br /> <b>strong technical skills</b> and <b>project experience</b></p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <h1><b>Skills</b></h1>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
        <div className="container">
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                            <h2>75<span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text">EXPRESS.js</h2>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                            <h2>85<span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text">Javascript</h2>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                            <h2>70<span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text">NODE.js</h2>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                            <h2>75 <span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text">MONGODB</h2>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                            <h2>80 <span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text"> REACT.js</h2>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                            <h2>65 <span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text"> Salesforce</h2>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                            <h2>90 <span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text"> DSA</h2>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                            <h2>85<span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text">Mysql</h2>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                            <h2>80 <span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text"> C</h2>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                            <h2>90 <span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text"> C++</h2>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                            <h2>80 <span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text"> HTML</h2>
                </div>
            </div><div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                            <h2>80 <span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text"> CSS</h2>
                </div>
            </div>
        </div>
        </motion.div>
    </motion.div>
  )
}

export default Services