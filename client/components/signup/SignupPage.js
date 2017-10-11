import React from 'react'
import SignupForm from './SignupForm'

class SignupPage extends React.Component {
  render() {
    const { userSignupRequest} this.props
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} />
        </div>
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupPage;
