import React, { useContext, useState } from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import bg1 from '../../assets/img/affiliate.jpg';

import Section from '../common/Section';
import AppContext from '../../context/Context';

const Banner = () => {
  const { isDark } = useContext(AppContext);
  const [login, setLogin] = useState(false);

  const flipLoginRegister = () => {
    setLogin(!login);
  };

  return (
    <Section className="py-0 overflow-hidden vh-100" image={bg1} position="center center" overlay>
      <Row className="pt-4 pt-lg-8 pb-lg-8 pb-xl-0">
        <Col md={11} lg={8} xl={6} className="pb-7 pb-xl-9 text-center text-xl-left pt-4">
          {/* <Button tag={Link} className="mb-4 fs--1 border-2x rounded-pill btn-outline-light" to="#!">
            <span className="mr-2" role="img" aria-label="Gift">
              🎁
            </span>
            Become a pro
          </Button> */}
          <h1 className="text-white font-weight-light">
            ECommerce for
            <Typed
              strings={['grocery', 'beauty', 'jewelary', 'any kind of']}
              typeSpeed={40}
              backSpeed={50}
              className="font-weight-bold pl-2"
              loop
            />
            <br />
            shops
          </h1>
          <p className="lead text-white">
            Become an Aasaan Affiliate and earn 20% commission forever!
          </p>
          <ul>
              <li><strong>Earn 20% from all referrals forever</strong></li></ul><ul>
              <li><strong>Easily add e-commerce to any&nbsp;site</strong></li></ul><ul>
              <li><strong>Preferred access to new features and support</strong></li></ul>
              <p className="lead text-white">
              SIGN UP YOUR CUSTOMERS, READERS, AND FRIENDS TO AASAAN, AND EARN 20% OF THEIR SUBSCRIPTION COST FOREVER.
          </p>
          <div className="btn btn-outline-light border-2x rounded-pill btn-lg mt-4 fs-0 py-2" onClick={() => flipLoginRegister()}>
            Affiliate {!login ? 'Login' : 'Register'}
            <FontAwesomeIcon icon="play" transform="shrink-6 down-1 right-5" />
          </div>
        </Col>
        <Col xl={{ size: 5, offset: 1 }} className="pb-8">
            <div id="book" class="text-dark">
              {!login && <form method="post" action="#">
                  <h3 class="mb-4" style={{fontSize: '23px'}}>BECOME AN AASAAN AFFILIATE!</h3>
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
                              <button class="btn btn-dark m-t-10">REGISTER</button>
                          </div>
                          <span className="pe-auto" style={{
                            cursor: 'pointer'
                          }} onClick={() => flipLoginRegister()}>Already have an account? Login</span>
                      </div>
                  </div>
              </form>}
              {login && 
                <form method="post" action="#">
                  <h3 class="mb-4" style={{fontSize: '23px'}}>LOGIN TO YOUR ACCOUNT</h3>
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="form-group">
                              <label>Phone Number</label>
                              <div class="form-group">
                                  <input type="text" class="form-control" />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="form-group">
                              <button class="btn btn-dark m-t-10">LOGIN</button>
                          </div>
                          <span style={{
                            cursor: 'pointer'
                          }} onClick={() => flipLoginRegister()}>Don't have an account? Register</span>
                      </div>
                  </div>
              </form>
              }
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default Banner;
