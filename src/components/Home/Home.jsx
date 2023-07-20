import React from 'react'
import './Home.css'
import client from '../../assets/img/clients/client-1.png'
import client2 from '../../assets/img/clients/client-2.png'
import client3 from '../../assets/img/clients/client-3.png'
import client4 from '../../assets/img/clients/client-4.png'
import client5 from '../../assets/img/clients/client-5.png'
import client6 from '../../assets/img/clients/client-6.png'



function Home() {
    return (
        <div>

            <section id="hero" class="hero">

                <img src="https://wallpapercave.com/wp/wp4385852.jpg" alt="" data-aos="fade-in"/>

                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10">
                                <h2 data-aos="fade-up" data-aos-delay="100">Welcome to Home page</h2>
                                <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with Bootstrap</p>
                            </div>
                            <div class="col-lg-5">
                                <form action="#" class="sign-up-form d-flex" data-aos="fade-up" data-aos-delay="300">
                                    <input type="text" class="form-control" placeholder="Enter email address"/>
                                        <input type="submit" class="btn btn-primary" value="Sign up"/>
                                        </form>
                                    </div>
                            </div>
                        </div>

                    </section>
                    <section id="clients" class="clients">

                        <div class="container-fluid" data-aos="fade-up">

                            <div class="row gy-4">

                                <div class="col-xl-2 col-md-3 col-6 client-logo">
                                    <img src={client} class="img-fluid" alt=""/>
                                </div>

                                <div class="col-xl-2 col-md-3 col-6 client-logo">
                                    <img src={client2} class="img-fluid" alt=""/>
                                </div>

                                <div class="col-xl-2 col-md-3 col-6 client-logo">
                                    <img src={client3} class="img-fluid" alt=""/>
                                </div>

                                <div class="col-xl-2 col-md-3 col-6 client-logo">
                                    <img src={client4} class="img-fluid" alt=""/>
                                </div>

                                <div class="col-xl-2 col-md-3 col-6 client-logo">
                                    <img src={client5} class="img-fluid" alt=""/>
                                </div>

                                <div class="col-xl-2 col-md-3 col-6 client-logo">
                                    <img src={client6} class="img-fluid" alt=""/>
                                </div>

                            </div>

                        </div>

                    </section>
                    <section id="about" class="about">

                        <div class="container" data-aos="fade-up" data-aos-delay="100">
                            <div class="row align-items-xl-center gy-5">

                                <div class="col-xl-5 content">
                                    <h3>About Us</h3>
                                    <h2>Ducimus rerum libero reprehenderit cumque</h2>
                                    <p>Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.</p>
                                    <a href="#" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
                                </div>

                                <div class="col-xl-7">
                                    <div class="row gy-4 icon-boxes">

                                        <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                            <div class="icon-box">
                                                <i class="bi bi-buildings"></i>
                                                <h3>Eius provident</h3>
                                                <p>Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
                                            </div>
                                        </div>

                                        <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                                            <div class="icon-box">
                                                <i class="bi bi-clipboard-pulse"></i>
                                                <h3>Rerum aperiam</h3>
                                                <p>Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia</p>
                                            </div>
                                        </div>

                                        <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                                            <div class="icon-box">
                                                <i class="bi bi-command"></i>
                                                <h3>Veniam omnis</h3>
                                                <p>Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti</p>
                                            </div>
                                        </div>

                                        <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                                            <div class="icon-box">
                                                <i class="bi bi-graph-up-arrow " ></i>
                                                <h3>Delares sapiente</h3>
                                                <p>Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>
        </div>
    )
}

export default Home