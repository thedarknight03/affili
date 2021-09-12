import React, { useContext } from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import bg1 from '../../assets/img/affiliate.jpg';

import Section from '../common/Section';
import AppContext from '../../context/Context';

const Banner = () => {
  const { isDark } = useContext(AppContext);
  return (
    <Section className="py-0 overflow-hidden" image={bg1} position="center center" overlay>
      <Row className="justify-content-center align-items-center pt-4 pt-lg-8 pb-lg-8 pb-xl-0">
        <Col md={11} lg={8} xl={6} className="pb-7 pb-xl-9 text-center text-xl-left">
          {/* <Button tag={Link} color="outline-danger" className="mb-4 fs--1 border-2x rounded-pill" to="#!">
            <span className="mr-2" role="img" aria-label="Gift">
              🎁
            </span>
            Become a pro
          </Button> */}
          <h1 className="text-white font-weight-light">
            Bring
            <Typed
              strings={['design', 'beauty', 'elegance', 'perfection']}
              typeSpeed={40}
              backSpeed={50}
              className="font-weight-bold pl-2"
              loop
            />
            <br />
            to your webapp
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
          <Link className="btn btn-outline-light border-2x rounded-pill btn-lg mt-4 fs-0 py-2" to="#!">
            Affiliate Login
            <FontAwesomeIcon icon="play" transform="shrink-6 down-1 right-5" />
          </Link>
        </Col>
        <Col xl={{ size: 5, offset: 1 }} className="align-self-end pb-8">
            <div id="book" class="text-dark">
              <form method="post" action="#">
                  <div class="mb-4" style={{fontSize: '23px'}}>BECOME AN AASAAN AFFILIATE!</div>
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
                      </div>
                  </div>
              </form>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default Banner;
