import React from 'react'
import "../styles/Home.scss"
import Tech from './Tech'
import Card from './Card'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Home() {
    AOS.init({
        duration: 1200,
        offset: 0,
        once: true
    });
    return (
        <div className='homepage'>
            <h1 className='name' id='intro' data-aos="slide-right" data-aos-duration="1300" data-aos-delay="100">Manuel Gudiño</h1>
            <h3 id='dw' data-aos="slide-right" data-aos-duration="1250">Sobre Mi</h3>
            <div className='intro'>
                <p data-aos="fade-right" data-aos-duration="1300" data-aos-delay="200">Soy un desarrollador de 17 años de Buenos Aires, haciéndome camino en las tecnologías web. Estudio informática en el Instituto Luis A. Huergo, a día de hoy cursando 5to año. Me considero un aficionado a la resolución de problemas, tanto en el desarrollo de software como en cualquier tipo de puzzles.
                </p>
                <br />
                <p data-aos="fade-right" data-aos-duration="1300" data-aos-delay="200">
                Hace varios meses comencé a interesarme por el diseño web, y desde entonces le dedico una muy buena parte de mi tiempo libre. Mi objetivo personal es introducirme por primera vez a la industria. Ansío trabajar con un equipo, en proyectos grandes y dedicarles todo mi tiempo. Quiero ponerme a prueba con situaciones reales y en un entorno más serio.
                </p>

            </div>
            <div className='intro skills' id='skills'>
                <h1 data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">Conocimientos</h1>
                <p className='mbt_2' data-aos="fade-down" data-aos-duration="1100">
                    Tengo conocimientos sobre las siguientes tecnologías:
                </p>
                <div className='tech_list'>
                    <div className='tech' data-aos="fade-right" data-aos-duration="1150" data-aos-delay="100"><Tech src="js.png" h2='JavaScript' alt='JS' /></div>
                    <div className='tech' data-aos="fade-right" data-aos-duration="1150" data-aos-delay="100"><Tech src="react.png" h2='React' alt='React' /></div>
                    <div className='tech' data-aos="fade-right" data-aos-duration="1150" data-aos-delay="100"><Tech src="bootstrap.png" h2='Bootstrap' alt='Bootstrap' /></div>
                    <div className='tech' data-aos="fade-right" data-aos-duration="1150" data-aos-delay="200"><Tech src="python.png" h2='Python' alt='Python' /></div>
                    <div className='tech' data-aos="fade-right" data-aos-duration="1150" data-aos-delay="200"><Tech src="flask.webp" h2='Flask' alt='Flask' /></div>
                    <div className='tech' data-aos="fade-right" data-aos-duration="1150" data-aos-delay="200"><Tech src="sass.webp" h2='Sass' alt='Sass' /></div>
                    <div className='tech' data-aos="fade-right" data-aos-duration="1150" data-aos-delay="300"><Tech src="mysql.png" h2='MySQL' alt='MySQL' /></div>
                    <div className='tech' data-aos="fade-right" data-aos-duration="1150" data-aos-delay="300"><Tech src="mongodb.png" h2='MongoDB' alt='MongoDB' /></div>
                    <div className='tech' data-aos="fade-right" data-aos-duration="1150" data-aos-delay="300"><Tech src="git.png" h2='Git' alt='Git' /></div>
                </div>
            </div>
            <div className='projects' id='projects'>
                <h1 id='mb_2' data-aos="fade-down" data-aos-duration="1400" data-aos-delay='200'>Proyectos</h1>
                <div className='list'>

                    <div className="project" data-aos="fade-down" data-aos-duration="1400"><Card img='games.png' h1='GamesDB' alt='gamesdb' p='Librería de juegos compuesta por contenido dinámico, generado mediante API de FreeToGames.' preview='https://games-db-api.netlify.app/' github='https://github.com/m4nute/react_gamesdb' /></div>

                    <div className="project" data-aos="fade-down" data-aos-duration="1400"><Card img='martin.png' h1='San Martín' alt='san martin' p='Web conmemorativa al general San Martín. Presenta información relacionada y una trivia.' preview='https://san-martin-2022.netlify.app/' github='https://github.com/m4nute/san-martin' /></div>

                    <div className="project" data-aos="fade-down" data-aos-duration="1400"><Card img='bdates.png' h1='Calendario' alt='calendar' p='Calendario de cumpleaños. Ayuda al usuario a acordarse de cuándo tiene que saludar a sus amigos.' github='https://github.com/m4nute/birthdate-calendar' /></div>

                </div>
            </div>
            <div className="contact" id='contact'>
                <h1 data-aos="fade-down" data-aos-duration="1250">Contactame</h1>
                <form action="https://formsubmit.co/bf2836f4b132dfc86351d5c217b58298" method="POST">
                    <div className='contact_form'>
                        <input type="hidden" name="_captcha" value="false" />
                        <input data-aos="fade-up" data-aos-duration="1250" data-aos-delay='400' type="email" className='form-control' placeholder='Tu Email' name='email' required />
                        <textarea name="textarea" data-aos="fade-up" data-aos-duration="1250" data-aos-delay='400' placeholder='Mensaje' className='form-control' required />
                        <button className='send' data-aos="fade" data-aos-duration="1250" data-aos-delay='1100'>
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                    </svg>
                                </div>
                            </div>
                            <span id='send'>Enviar</span>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Home