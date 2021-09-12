import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import NavbarStandard from '../navbar/NavbarStandard';
import bgImage from '../../assets/img/ecommercebg.jpg';
import RegistrationForm from './RegistrationForm';
import OtpForm from './OtpForm';
import _ from 'lodash';
import * as RegistrationService from './registrationService';

const AffliateLanding = ({location}) => {
  const [userDetails, setUserDetails] = useState({});
  const [otpValidationFailed, setOtpValidationFailed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const registrationHandler = async (userDetails) => {
    console.log(_.isEmpty(userDetails));
    await RegistrationService.generateOTP(userDetails.phoneNumber);
    setUserDetails(userDetails);
  };

  const checkOTPHandler = async (otp) => {
    try {
      const checkOTP = await RegistrationService.verifyPhoneNumberAndOTP(
        userDetails.phoneNumber,
        otp
      );
      if (checkOTP.data.loggedIn) {
        window.location = './dashboard';
      } else {
        setOtpValidationFailed(true);
      }
    } catch (error) {
      setOtpValidationFailed(true);
    }
  };
  return (
    <Fragment>
      <NavbarStandard />
      <section
        id="section1"
        className="fullscreen data-bg-image-landing"
        data-bg-image="homepages/taxi/images/slider/1.jpg"
        style={{backgroundImage: 'url(' + bgImage + ')'}}
      >
        <div class="bg-overlay" />
        <div class="container">
          <div class="container-fullscreen">
            <div class="text-middle">
              <div class="row">
                <div class="col-lg-6">
                  <div class="text-light">
                    <span class="text-medium m-b-0">
                      <a href="tel:1-234-567-8910">call now</a>
                    </span>
                    <h2 class="text-lg-x2 font-weight-800 text-colored m-t-0">
                      Become an Ecwid Affiliate and earn 20% commission forever!
                    </h2>
                    <div class="content-column">
                      <h4>
                        Become an Ecwid Affiliate&nbsp;and earn 20% commission
                        forever!
                      </h4>
                      <h3>
                        <hr />
                        <ul>
                          <li>
                            <strong>Earn 20% from all referrals forever</strong>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <strong>
                              Easily add e-commerce to any&nbsp;site
                            </strong>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <strong>
                              Preferred access to new features and support
                            </strong>
                          </li>
                        </ul>
                      </h3>
                      <h3 />
                      <h4>
                        <hr />
                      </h4>
                      <h3>
                        <strong>
                          Sign up your customers, readers, and friends to ecwid,
                          and earn 20% of their subscription cost forever. Get
                          started!!
                        </strong>
                      </h3>
                      <hr id="horizontalrule" />
                      <p>
                        <a
                          href="https://www.ecwid.com/affiliate-agreement.html"
                          target="_blank"
                        >
                          Terms and Conditions
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 offset-1">
                  {_.isEmpty(userDetails) && (
                    <RegistrationForm
                      registrationHandler={registrationHandler}
                    />
                  )}
                  {!_.isEmpty(userDetails) && (
                    <OtpForm
                      userDetails={userDetails}
                      checkOTP={checkOTPHandler}
                      otpValidationFailed={otpValidationFailed}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

AffliateLanding.propTypes = {location: PropTypes.object.isRequired};

export default AffliateLanding;
