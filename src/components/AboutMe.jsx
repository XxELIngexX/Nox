import backgroun from "../assets/photo.jpg"
import "../styles/aboutMe.css"
export const aboutMe = () => {
    return (
        <>  
        <section id="about-me" className="aboutMe">
            <div className="text">
                <h1>Siempre es un gusto recibir visitas, así que bienvenido.</h1>
                
                <p>Soy un desarrollador Full-Stack Jr. con una pasion por crear sistemas bien estructurados. 
                Han pasado 5 años desde que empece mi carrera en este mundo del software, aprendiendo, experimentando y construyendo 
                soluciones que no solo funcionan, sino que están diseñadas para escalar y mantenerse en el tiempo.
                
                Me gusta ver la ingeniería como un equilibrio entre creatividad y estrategia: cada proyecto empieza como un lienzo en blanco, y ahí es donde disfruto pensar en la arquitectura, los flujos, la seguridad y la experiencia del usuario antes de escribir la primera línea de código. No solo construyo; diseño cómo debe construirse.
                Gracias por pasar por aquí. Si lo que viste conecta contigo, me encantará ser parte de tu próximo proyecto.</p>
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