import axios from 'axios';

export const generateOTP = (mobileNumber) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/api/v1/stores/accounts/loginCheckMobileNumber`,
        {
          data: {
            mobileNumber
          }
        }
      )
      .then((response) => {
        if (response.data) {
          resolve(response.data);
        } else {
          reject(response.data.error);
        }
      })
      .catch((error) => {
        reject(error.response.data.errors);
      });
  });
};

export const verifyPhoneNumberAndOTP = (mobileNumber, otp) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/api/v1/stores/accounts/loginWithMobileNumber`,
        {
          data: {
            mobileNumber,
            otp
          }
        }
      )
      .then((response) => {
        if (response.data) {
          resolve(response.data);
        } else {
          reject(response.data.error);
        }
      })
      .catch((error) => {
        reject(error.response.data.errors);
      });
  });
};

export const resendOTP = ({mobileNumber}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/api/v1/stores/accounts/loginResendMobileOTP`,
        {
          data: {
            mobileNumber
          }
        }
      )
      .then((response) => {
        if (response.data) {
          resolve(response.data);
        } else {
          reject(response.data.error);
        }
      })
      .catch((error) => {
        reject(error.response.data.errors);
      });
  });
};
