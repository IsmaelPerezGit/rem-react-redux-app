import React from 'react'

class SignupForm extends React.Component {
  render () {
    return (
      <form>
        <h1>Join our community!</h1>

        <div className="form-group">
          <label className="control-label">UserName</label>
          <input
            type="text"
            name="username"
            className="form-control"
            />
        </div>

        <div>
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

export default SignupForm
