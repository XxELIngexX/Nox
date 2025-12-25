import backgroun from "../assets/photo.jpeg"
import "../styles/aboutMe.css"

export const aboutMe = () => {
    return (
        <>  
        <section id="about-me" className="aboutMe">
            <div className="text">
                <h1>It’s always a pleasure to have visitors, so welcome.</h1>
                
                <p>
                I’m a Junior Full-Stack Developer with a strong interest in building well-structured and reliable systems. 
                Over the past years, I’ve been growing in the world of software development by learning, experimenting, 
                and building solutions that are not only functional, but designed to evolve and scale over time.
                <br /><br />
                I see software engineering as a balance between creativity and strategy. 
                Every project starts as a blank canvas, and before writing the first line of code, 
                I like to think about architecture, workflows, potential risks, security considerations, 
                and user experience. For me, writing code is not just about making things work, but about making 
                them sustainable and safe.
                <br /><br />
                I enjoy understanding how systems behave, how they can fail, and how to design them better from the beginning. 
                That curiosity is what connects my interest in development with my growing passion for cybersecurity and 
                defensive thinking.
                <br /><br />
                Thanks for stopping by. If what you’ve seen resonates with you, I’d be glad to be part of your next project.
                
                
                </p>
            </div>

            <div className="photo">
                <h3>Based in Colombia</h3>
                <p>24 years old</p>
                
                <img src={backgroun} alt="Profile Photo" className="hero_profile-pic" />
            </div>
        </section>
        </>
    )
}

export default aboutMe
