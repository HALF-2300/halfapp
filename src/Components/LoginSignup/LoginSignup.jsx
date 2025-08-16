import React from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/user.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';


const LoginSignup = () => {

  const initialValues = { username: '', email: '', password: '' };
  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [action, setAction] = React.useState('Login');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues, action));
    setIsSubmitted(true);
  };

  React.useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      console.log('Form is valid and ready for submission');
      console.log('Form Values:', formValues);
    }
  }, [formErrors, isSubmitted, formValues]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format';
    }
    if (!values.password) {
      errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password must be more than 6 characters';
      } else if (values.password.length > 10) {
        errors.password = 'Password cannot exceed more than 10 characters';
    } return errors;
  };

  return (
    <div className='container'>
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <div className='logsign-container'>
        {action === 'Sign Up' ? <div></div> :
          <div className={action === "Login" ? "Logsign blue" : "LogSign"}
            onClick={() => {
              setAction("Sign Up");
            }}><span>Need an account?</span></div>
          }
        {action === 'Login' ? <div></div> :
          <div className={action === "Sign Up" ? "Logsign blue" : "LogSign"}
            onClick={() => {
              setAction("Login")
            }}><span>Already have an account?</span></div>
          }
        </div>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === 'Login' ? <div></div> :
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                name="username"
                placeholder='Name'
                value={formValues.username}
                onChange={handleChange}
                />
              {formErrors.username && <span className="error">{formErrors.username}</span>}
            </div>
          }
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder='Email Id'
              value={formValues.email}
              onChange={handleChange} />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              name="password"
              placeholder='Password'
              value={formValues.password}
              onChange={handleChange} />
            {formErrors.password && <span className="error">{formErrors.password}</span>}
          </div>
          {action === 'Sign Up' ? <div></div> :
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
          }
        </div>
        <div className="submit-container">
          <button type="submit" className="submit"          >
            {action}
          </button>
        </div>
      </form>
    </div>
  );
}
export default LoginSignup;