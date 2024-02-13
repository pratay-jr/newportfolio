import { useRef } from "react";
import "./portfolio.scss" 
import { useScroll, motion ,useSpring, useTransform} from "framer-motion";
const items =[
{
    id:1,
    title:"Chat-App",
    // img:"chatapp.gif",
    video:"chatapp.mp4",
    desc:"I have developed a chat application utilizing Node.js and Express.js for the backend, MongoDB for data storage, implemented user authentication for login and user creation, employed React for the frontend, and integrated Socket.io for real-time communication.",
    link:"",
},
{
    id:2,
    title:"Exercise Website",
    // img:"gym.gif
    video:"gym.mp4",
    desc:"It is an informative fitness website that provides details about various exercises targeting different body parts. Additionally, you can access related videos showcasing exercises specific to each body part.",
    link:"https://fitflownation.netlify.app/",
},
{
    id:3,
    title:"Youtube Clone",
    // img:"youtube.gif",
    video:"youtube.mp4",
    desc:"It's a YouTube replica where no user data is retained, allowing users to search for and view any content without storage..",
    link:"https://streamscape.netlify.app/",

},
{
    id:4,
    title:"Old-Chat-App",
    // img:"ppt.jpg",
    video:"portfolio.mp4",
    desc:"A Chat Application which uses React in frontend framework and backend, auntication and realtime communication is is totally hosted by chatengine",
    link:"",
},
{
    id:5,
    title:"Old Portfolio Website",
    // img:"portfolio.gif",
    video:"portfolio.mp4",
    desc:"I have created a portfolio website to showcase my projects,provide detailed information about myself, and add a touch of creativity with subtle effects.",
    link:"https://pratay-jr.github.io/Pratay-Portfolio-Wesbite/",
},
];
const Single = ({item})=>{
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
    });
    
    const y = useTransform(scrollYProgress,[0,1],[-300,300]);


    return <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer"  ref={ref}>
                    {/* <img src={item.img} alt="" />  */}
                    <video controls width="600" >
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
                </div>
            <motion.div className="textContainer" style={{y}} >
                <h2 >{item.title}</h2>
                <p>{item.desc}</p>
                <button><a href={item.link}>Visit Wesbite</a></button>
            </motion.div>
            </div>
        </div>
        </section>
};
const Portfolio = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end","start start"],
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });
  return (
    <div className="portfolio" ref ={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio