import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import NavbarStandard from '../navbar/NavbarStandard';
import bgImage from '../../assets/img/ecommercebg.jpg';

const AffliateLanding = ({ location }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <Fragment>
            <NavbarStandard />
            <section id="section1" className="fullscreen data-bg-image-landing" data-bg-image="homepages/taxi/images/slider/1.jpg" style={{ backgroundImage: 'url(' + bgImage + ')'}}>
                <div class="bg-overlay"></div>
                <div class="container">
                    <div class="container-fullscreen">
                        <div class="text-middle">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="text-light">
                                        <span class="text-medium m-b-0"><a href="tel:1-234-567-8910">call now</a></span>
                                        <h2 class="text-lg-x2 font-weight-800 text-colored m-t-0">Become an Ecwid Affiliate and earn 20% commission forever!</h2>
                                        <div class="content-column">
                                            <h4>Become an Ecwid Affiliate&nbsp;and earn 20% commission forever!</h4>
                                            <h3>
                                                <hr />
                                                <ul>
                                                    <li><strong>Earn 20% from all referrals forever</strong></li></ul><ul>
                                                    <li><strong>Easily add e-commerce to any&nbsp;site</strong></li></ul><ul>
                                                    <li><strong>Preferred access to new features and support</strong></li></ul></h3><h3>
                                            </h3><h4>
                                                <hr />
                                            </h4><h3><strong>Sign up your customers, readers, and friends to ecwid, and earn 20% of their subscription cost forever. Get started!!</strong></h3>
                                            <hr id="horizontalrule" />
                                            <p><a href="https://www.ecwid.com/affiliate-agreement.html" target="_blank">Terms and Conditions</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5 offset-1">
                                    <div id="book" class="text-dark">
                                        <form method="post" action="#">
                                            <h3 class="mb-4">BECOME AN AASAAN AFFILIATE!</h3>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <label>Full Name</label>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Last Name</label>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <label>Phone Number</label>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Company(Optional)</label>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <button class="btn btn-dark m-t-10">Become an Aasaan Partner</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

AffliateLanding.propTypes = { location: PropTypes.object.isRequired };

export default AffliateLanding;
