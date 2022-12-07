import React from 'react';

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Enter your email to get more information</h2>
              <p>Sign up now</p>
              <form className="form-section">
                <input placeholder="Enter email..." name="email" type="email" />
                <input value="Confirm" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
