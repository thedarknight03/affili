import React from 'react';
import {useForm} from 'react-hook-form';


function RegistrationForm(props) {
  const {
    handleSubmit,
    register,
    formState: {errors}
  } = useForm();

  const submitData = (formData) => {
    props.registrationHandler(formData);
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <div id="book" className="text-dark">
        <h3 className="mb-4">BECOME AN AASAAN AFFILIATE!</h3>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <label>First Name</label>
              <div className="form-group">
                <input
                  className="w-100"
                  {...register('firstName', {required: true, maxLength: 20})}
                />
                {errors.firstName?.type === 'required' && (
                  <div className="error">{'First name is required'}</div>
                )}
              </div>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <div className="form-group">
                <input
                  className="w-100"
                  {...register('lastName', {required: true, maxLength: 20})}
                />
                {errors.lastName?.type === 'required' && (
                  <div className="error">{'Last name is required'}</div>
                )}{' '}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <label>Phone Number</label>
              <div className="form-group">
                <input
                  className="w-100"
                  {...register('phoneNumber', {required: true, maxLength: 20})}
                />
                {errors.phoneNumber?.type === 'required' && (
                  <div className="error">{'Phone Number is required'}</div>
                )}
              </div>
            </div>
            <div className="form-group">
              <label>Company(Optional)</label>
              <div className="form-group">
                <input
                  className="w-100"
                  {...register('company', {required: false, maxLength: 20})}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <button className="btn btn-dark m-t-10 w-100" type="submit">
                Become an Aasaan Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default RegistrationForm;
