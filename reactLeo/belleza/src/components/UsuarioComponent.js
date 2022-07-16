import React from "react";
import "../styles/Nav.css";

const UsuarioComponent = () => {
    return (
        <div >
            <header>
                <div id="logo-header">

                </div>
            </header>
            <nav id="nav-bar">
                <ul>
                    <div class="nav-li">
                        <li id="home">Inicio</li>
                        <li id="about">Quienes Somos</li>
                        <li id="service">Servicios</li>
                        <li id="Catalogo">Catálogo</li>
                        <li id="galery">Galería de imágenes</li>
                        <li id="contact">Contacto</li>
                    </div>
                </ul>
            </nav>
            <aside>
                <div id="carousel-nav">

                </div>

            </aside>
            <footer>
                <div class="container-footer">
                    <div id="horario-footer">
                        <article>
                            <header>
                                Horario de atención
                            </header>
                            <br />
                            <h3>
                                De lunes a viernes
                            </h3>
                            <p>
                                de 9.30 a 13.30
                                de 15.30 a 20.00
                            </p>
                            <br />

                            <h3>
                                Sábados
                            </h3>
                            <p>
                                de 9.30 a 14.30
                            </p>
                        </article>

                    </div>
                    <div id="service-footer">
                        <article>
                            <header>
                                Horario de atención
                            </header>
                            <br />
                            <h3>
                                De lunes a viernes
                            </h3>
                            <p>
                                de 9.30 a 13.30
                                de 15.30 a 20.00
                            </p>
                            <br />

                            <h3>
                                Sábados
                            </h3>
                            <p>
                                de 9.30 a 14.30
                            </p>
                        </article>
                    </div>
                    <div id="contact-footer">
                        <article>
                            <header>
                                Horario de atención
                            </header>
                            <br />
                            <h3>
                                De lunes a viernes
                            </h3>
                            <p>
                                de 9.30 a 13.30
                                de 15.30 a 20.00
                            </p>
                            <br />

                            <h3>
                                Sábados
                            </h3>
                            <p>
                                de 9.30 a 14.30
                            </p>
                        </article>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default UsuarioComponent;