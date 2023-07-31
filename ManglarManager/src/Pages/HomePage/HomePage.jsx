// eslint-disable-next-line no-unused-vars
import React from 'react';
//import { Link } from "react-router-dom";
import './HomeStyle.css';





export const HomePage = () => {
    return (
        <>





            <nav class="navbar navbar-expand-lg  navbar navbar-dark bg-dark navbar-custom fixed-top">
                <div class="container">


                    <a class="navbar-brand logo-image" >
                        <img src="src\img\mmLogo.png" alt="alternative" style={{ width: 225, height: 100 }} />
                    </a>


                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-awesome fas fa-bars"></span>
                        <span class="navbar-toggler-awesome fas fa-times"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#header">HOME <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#features">CHARACTERISTICS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#details">DETAILS</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#pricing">MEMBERSHIPS</a>
                            </li>
                        </ul>
                        <span class="nav-item">
                            <a class="btn-outline-sm" href="/login">LOG IN</a>
                        </span>
                    </div>
                </div>
            </nav>






            <header id="header" class="header">
                <div class="header-content">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-xl-5">
                                <div class="text-container">
                                    <h1>Manglar Manager</h1>
                                    <p class="p-large">ManglarManagerᵍᵗ,
                                        <br /> arose from an idea having identified a growing demand for technological solutions that improve productivity and efficiency in companies.
                                        <br /> That is why the development of this software has been considered important, as it provides an effective tool to improve employee efficiency.</p>
                                    <a class="btn-solid-lg page-scroll" href="">FIND MORE!</a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-xl-7">
                                <div class="image-container">
                                    <div class="img-wrapper">
                                        <br></br>
                                        <img class="img-fluid" src="src\img\mmLogo2.png" style={{ width: 800, height: 400 }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="slider-1">
                
                <div class="container">
                  
                    <div class="row">
                        <div class="col-lg-12">


                            <div class="slider-container">
                                <div class="swiper-container image-slider">
                                <h2 className='text-black'>This proyect was Sponsored and Supported by:</h2>
                                    <div class="swiper-wrapper">

                                        <div class="swiper-slide">
                                            <div>
                                                <img class="img-fluid" src="src\img\react.png" alt="react" style={{ width: 200 }} />
                                            </div>
                                            <img class="img-fluid" src="src\img\node.png" alt="node" style={{ width: 200 }} />
                                            <div><img class="img-fluid" src="src\img\swal.png" alt="swal" style={{ width: 200 }} /></div>
                                            <div><img class="img-fluid" src="src\img\mongo.png" alt="mongo" style={{ width: 100 }} /></div>
                                            <div><img class="img-fluid" src="src\img\mdb.png" alt="bootstrap" style={{ width: 200 }} /></div>
                                            
                                            
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
<br></br>



            <div class="cards-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="above-heading">Main</div>
                            <h2 class="h2-heading">OBJECTIVES</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">


                            <div class="card">
                                <div class="card-image">
                                    <img class="img-fluid" src="src\img\description-1.png" alt="alternative" />
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title text-black">List Builder</h4>
                                    <p>Improve employee performance when adding work to them.</p>
                                    <p>Provide better order and discipline to the company.


                                    </p>
                                    <p>Know and take into account the progress of the company in terms of completing tasks and projects.

                                    </p>
                                </div>
                            </div>



                            <div class="card">
                                <div class="card-image">
                                    <img class="img-fluid" src="src\img\description-2.png" alt="alternative" />
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title text-black">Expert</h4>
                                    <p>Manage work in a more organized, collaborative and productive way for the smooth running of the company.</p>
                                    <p>Organize the time of the workers to do each of the tasks without affecting or abusing the available time.</p>
                                    <p>have more control with the Employees and Moderators.</p>
                                </div>
                            </div>



                            <div class="card">
                                <div class="card-image">
                                    <img class="img-fluid" src="src\img\description-3.png" alt="alternative" />
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title text-black">Practice tool</h4>
                                    <p>Take control of each task that employees do or stop doing.
                                    </p>
                                    <p>Know how efficient the company is in terms of carrying out tasks and projects.
                                    </p>
                                    <p>Improve work Life!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div id="features" class="tabs">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="above-heading">facts</div>
                            <h2 class="h2-heading">Information</h2>
                            <p class="p-heading">According to data from the 2019 Survey of the National Institute of Statistics of Guatemala (INE), it is estimated that around 1.4 million people in Guatemala work in conditions of labor exploitation, which is equivalent to 21.4% of the country's workforce. This figure includes workers who do not receive the minimum wage established by law, work more hours than allowed, do not have a work contract or do not have access to employment benefits such as social security or paid vacations.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">






                            <div class="tab-content" id="argoTabsContent">


                                <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="image-container">
                                                <img class="img-fluid" src="src\img\cansancio.png" alt="alternative" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="text-container">
                                                <h3 className='text-black'>Creating Employee Lists Is Easier Than Ever!</h3>
                                                <p> It is very easy to start using Manglar Manager. You just need to complete and submit the Registration Form and you will receive access to the application and all its features within 24 hours.<a class="blue page-scroll" href=""></a> </p>
                                                <ul class="list-unstyled li-space-lg">
                                                    <li class="media">
                                                        <i class="fas fa-square"></i>
                                                        <div class="media-body">Create and embed website newsletter subscription forms Like Roots</div>
                                                    </li>
                                                    <li class="media">
                                                        <i class="fas fa-square"></i>
                                                        <div class="media-body">Manage forms and landing pages for your services</div>
                                                    </li>
                                                    <li class="media">
                                                        <i class="fas fa-square"></i>
                                                        <div class="media-body">Add and remove subscribers using the control panel</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="image-container">
                                                <img class="img-fluid" src="images/features-2.png" alt="alternative" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="text-container">
                                                <h3>Campaigns Monitoring Tools</h3>
                                                <p>Campaigns monitoring is a feature we've developed since the beginning because it's at the core of Tivo and basically to any marketing activity focused on results.</p>
                                                <ul class="list-unstyled li-space-lg">
                                                    <li class="media">
                                                        <i class="fas fa-square"></i>
                                                        <div class="media-body">Easily plan campaigns and schedule their starting date</div>
                                                    </li>
                                                    <li class="media">
                                                        <i class="fas fa-square"></i>
                                                        <div class="media-body">Start campaigns and follow their evolution closely</div>
                                                    </li>
                                                    <li class="media">
                                                        <i class="fas fa-square"></i>
                                                        <div class="media-body">Evaluate campaign results and optimize future actions</div>
                                                    </li>
                                                </ul>
                                                <a class="btn-solid-reg popup-with-move-anim" href="#details-lightbox-2">LIGHTBOX</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="image-container">
                                                <img class="img-fluid" src="images/features-3.png" alt="alternative" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="text-container">
                                                <h3>Analytics Control Panel</h3>
                                                <p>Analytics control  panel is important for every marketing team so it's beed implemented from the begging and designed to produce reports based on very little input information.</p>
                                                <ul class="list-unstyled li-space-lg">
                                                    <li class="media">
                                                        <i class="fas fa-square"></i>
                                                        <div class="media-body">If you set it up correctly you will get acces to great intel</div>
                                                    </li>
                                                    <li class="media">
                                                        <i class="fas fa-square"></i>
                                                        <div class="media-body">Easy to integrate in your websites and landing pages</div>
                                                    </li>
                                                    <li class="media">
                                                        <i class="fas fa-square"></i>
                                                        <div class="media-body">The generated reports are important for your strategy</div>
                                                    </li>
                                                </ul>
                                                <a class="btn-solid-reg popup-with-move-anim" href="#details-lightbox-3">LIGHTBOX</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>
                </div>
            </div>





            <div id="details-lightbox-1" class="lightbox-basic zoom-anim-dialog mfp-hide">
                <div class="container">
                    <div class="row">
                        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>
                        <div class="col-lg-8">
                            <div class="image-container">
                                <img class="img-fluid" src="images/details-lightbox.png" alt="alternative" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <h3>List Building</h3>
                            <hr />
                            <h5>Core service</h5>
                            <p>It's very easy to start using Tivo.Have an account to receive access to the app.</p>
                            <ul class="list-unstyled li-space-lg">
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">List building framework</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">Easy database browsing</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">User administration</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">Automate user signup</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">Quick formatting tools</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">Fast email checking</div>
                                </li>
                            </ul>
                            <a class="btn-solid-reg mfp-close" href="">SIGN UP</a> <a class="btn-outline-reg mfp-close as-button" href="#screenshots">BACK</a>
                        </div>
                    </div>
                </div>
            </div>



            <div id="details-lightbox-2" class="lightbox-basic zoom-anim-dialog mfp-hide">
                <div class="container">
                    <div class="row">
                        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>
                        <div class="col-lg-8">
                            <div class="image-container">
                                <img class="img-fluid" src="images/details-lightbox.png" alt="alternative" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <h3>Campaign Monitoring</h3>
                            <hr />
                            <h5>Core service</h5>
                            <p>It's very easy to start using Tivo. You just need to fill out and submit the Sign Up Form and you will receive access to the app.</p>
                            <ul class="list-unstyled li-space-lg">
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">List building framework</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">Easy database browsing</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">User administration</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">Automate user signup</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">Quick formatting tools</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">Fast email checking</div>
                                </li>
                            </ul>
                            <a class="btn-solid-reg mfp-close" href="">SIGN UP</a> <a class="btn-outline-reg mfp-close as-button" href="#screenshots">BACK</a>
                        </div>
                    </div>
                </div>
            </div>



            <div id="details-lightbox-3" class="lightbox-basic zoom-anim-dialog mfp-hide">
                <div class="container">
                    <div class="row">
                        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>
                        <div class="col-lg-8">
                            <div class="image-container">
                                <img class="img-fluid" src="images/details-lightbox.png" alt="alternative" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <h3>Analytics Tools</h3>
                            <hr />
                            <h5>Core service</h5>
                            <p>It's very easy to start using Tivo. You just need to fill out and submit the Sign Up Form and you will receive access to the app.</p>
                            <ul class="list-unstyled li-space-lg">
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">List building framework</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">Easy database browsing</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">User administration</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">Automate user signup</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">Quick formatting tools</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i><div class="media-body">Fast email checking</div>
                                </li>
                            </ul>
                            <a class="btn-solid-reg mfp-close" href="">Join NOW!</a> <a class="btn-outline-reg mfp-close as-button" href="#screenshots">BACK</a>
                        </div>
                    </div>
                </div>
            </div>





            <div id="details" class="basic-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="text-container">
                                <h2>Now is the time to upgrade your company's solution...</h2>
                                <p>Target the right employees for your business with the help of ManglarManager's patented segmentation technology and implement an employee manager and keep your employees happy and loyal.</p>
                                <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Understand employees and meet their requirements.</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Targeted employee base with efficient Manglar Manager technology</div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image-container">
                                <img class="img-fluid" src="src\img\Portada-gestion-del-desempeno-del-empleado.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>







            <div id="pricing" class="cards-2">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="above-heading">Memberships.</div>
                            <h2 class="h2-heading">Here you can see and check out our membership Services.</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">


                            <div class="card">
                                <div class="card-body">
                                    <div class="card-title">BASIC</div>
                                    <div class="price"><span class="value">$49 Month
                                    </span>
                                        <br />
                                        <span class="value">$499 Year</span>
                                    </div>
                                    <div class="divider"></div>
                                    <ul class="list-unstyled li-space-lg">
                                        <li class="media">
                                            <div class="media-body">This would be the cheapest and most basic license of all,
                                                and that would allow you to access the basic functionalities of Manglar Manager. Could have
                                                a more affordable price for small businesses or individual entrepreneurs.
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="button-wrapper">
                                        <a class="btn-solid-reg page-scroll" href="">Join NOW!</a>
                                    </div>
                                </div>
                            </div>


                            <div class="card">
                                <div class="card-body">
                                    <div class="card-title">PROFESIONAL</div>
                                    <div class="price"><span class="value">$99 Month</span>
                                        <br />
                                        <span class="value">$999 Year
                                        </span>
                                    </div>
                                    <div class="divider"></div>
                                    <ul class="list-unstyled li-space-lg">
                                        <li class="media">
                                            <div class="media-body">This would be the intermediate license, which would give you access to all
                                                the functionalities of Manglar Manager, it is including advanced tools of management of
                                                projects and teams. This is the license that could have a price tag, suitable for your companies
                                                medium or growing.
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="button-wrapper">
                                        <a class="btn-solid-reg page-scroll" href="">Join NOW!</a>
                                    </div>
                                </div>
                            </div>


                            <div class="card">
                                <div class="card-body">
                                    <div class="card-title">PREMIUM</div>
                                    <div class="price"><span class="currency">$</span><span class="value">199 Month</span>
                                        <br />
                                        <span class="currency">$</span><span class="value">$1999 Year
                                        </span>
                                    </div>
                                    <div class="divider"></div>
                                    <ul class="list-unstyled li-space-lg">
                                        <li class="media">
                                            <div class="media-body">This would be the most complete and advanced license for Manglar Manager,
                                                that would include all the features of the Professional version, as well as tools
                                                exclusives and personalized support. This license could have a higher price,
                                                oriented to large corporations or companies that require project management and
                                                highly personalized and scalable teams.
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="button-wrapper">
                                        <a class="btn-solid-reg page-scroll" href="">Join NOW!</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>







            <div class="form">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-container">
                                <div class="above-heading">NEWSLETTER</div>
                                <h2>Stay up to date with the latest news to learn more about upcoming updates.</h2>


                                <form id="newsletterForm" data-toggle="validator" data-focus="false">
                                    <div class="form-group">
                                        <input type="email" class="form-control-input" id="nemail" required />
                                        <label class="label-control" for="nemail">Email</label>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="form-group checkbox">
                                        <input type="checkbox" id="nterms" value="Agreed-to-Terms" required />I read and accept <a href="privacy-policy.html">Privacy Sakes</a> y <a href="terms-conditions.html">and Terms and Conditions wrote by Manglar Manager</a>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="form-control-submit-button">Subscribe</button>
                                    </div>
                                    <div class="form-message">
                                        <div id="nmsgSubmit" class="h3 text-center hidden"></div>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="icon-container">
                                <span class="fa-stack">
                                    <a href="#your-link">
                                        <img src="src\img\facebook.svg" alt="" srcset="" />
                                    </a>
                                </span>
                                <span class="fa-stack">
                                    <a href="#your-link">
                                        <img src="src\img\twitter.svg" alt="" srcset="" />
                                    </a>
                                </span>
                                <span class="fa-stack">
                                    <a href="#your-link">
                                        <img src="src\img\pinterest.svg" alt="" srcset="" />
                                    </a>
                                </span>
                                <span class="fa-stack">
                                    <a href="#your-link">
                                        <img src="src\img\square-instagram.svg" alt="" srcset="" />
                                    </a>
                                </span>
                                <span class="fa-stack">
                                    <a href="#your-link">
                                        <img src="src\img\invision.svg" alt="" srcset="" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="footer-col first">
                                <h4>About Manglar Manager</h4>
                                <p class="p-small">We are passionate about designing and developing one of the best employee manager applications on the market.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="footer-col middle">
                                <h4>Conections</h4>
                                <ul class="list-unstyled li-space-lg p-small">
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Our Social Parthners <a class="white" href="https://www.kinal.org.gt/">https://www.kinal.org.gt/</a></div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Read our <a class="white" href="terms-conditions.html">Terms y Services</a>, <a class="white" href="privacy-policy.html">Privacy Politics</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="footer-col last">
                                <h4>Contact Us!</h4>
                                <ul class="list-unstyled li-space-lg p-small">
                                    <li class="media">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <div class="media-body">Torre Premier Club, Calzada Roosevelt 22-43, Cdad. de Guatemala 01011</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-envelope"></i>
                                        <div class="media-body"><a class="white" href="mailto:contact@tivo.com">manglarmanager@gmail.com</a> <i class="fas fa-globe"></i><a class="white" href="#your-link">www.manglarmanager.com</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>





                </div>
            </div>


            <div class="copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <p class="p-small"><a>ManagerManglar</a></p><h6>Roots of the Progress</h6>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}
