import React from "react";


function About() {
    // Up to Top Btn
    window.addEventListener("scroll", function () {
        const upToTop = document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active", window.scrollY > 0);
    });

    return (
        /*
        <div className="about component__space" id="About">
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col__2">

                    </div>
                    <div className="col__2">
                        <h1 className="about__heading">About me</h1>
                        <div className="about__meta">
                            <p className="about__text p__color">
                                Full-Stack / Frontend Web Developer with hands-on experience in
                                building progressive web applications using the latest web
                                technologies such as React.js, Html, Css. <br /> A team player,
                                hard worker, self-learner, responsible and adapt quickly to new
                                environments.
                            </p>
                            <p className="about__text p__color">
                                I have a great passion for coding and developing new practical
                                apps.
                                <br />I am currently seeking full-time job where I can use my
                                skills to make the world a better place while learning from
                                experts.
                            </p>
                            <div className="about__button d__flex align__items__center">
                                <a href="../assets/IbResume.pdf" download="IbResume.pdf">
                                    <button className="about btn pointer">Download CV</button>
                                </a>
                                <a href="#Contact">
                                    <button className="about btn pointer">Hire Me</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="up__to__top__btn">
                <a href="#Home" className="bottom__to__top">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-up white"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        />
                    </svg>
                </a>
            </div>
        </div>
    */
        <>
        </>
    );
}

export default About;