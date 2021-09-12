import React, {useState} from 'react';
import OTPInput, {ResendOTP} from 'otp-input-react';

export default function OtpForm(props) {
  const {checkOTP, otpValidationFailed} = props;
  const {phoneNumber} = props.userDetails;
  const [OTP, setOTP] = useState('');
  const verifycodeHandler = () => {
    if (OTP.length === 6) {
      checkOTP(OTP);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center container">
        <div id="book" className="card py-5 px-3 dark-text">
          <h5>
            {`Enter the code we just send on your mobile phone 
            ${phoneNumber}`}
          </h5>
          <div className="d-flex flex-row mt-3 px-3">
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
              secure
            />
          </div>

          <div className="mt-3">
            <button
              className="btn btn-dark m-t-10 w-100"
              onClick={verifycodeHandler}
            >
              {'Verify code'}
            </button>
          </div>
          {otpValidationFailed && (
            <div className="text-center mt-3 error">{'Invalid Code'}</div>
          )}
        </div>
      </div>
    </>
  );
}
