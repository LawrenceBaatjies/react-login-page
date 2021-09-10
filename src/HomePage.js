import './HomePage.css';
import { React, useState } from 'react';
import booked from './assets/undraw_Booked_j7rj.svg';
import creative_team from './assets/undraw_creative_team_r90h.svg';
import different_love from './assets/undraw_different_love_a3rg.svg';
import download from './assets/undraw_download_pc33.svg';
import right_places from './assets/undraw_right_places_h9n3.svg';
import schedule from './assets/undraw_schedule_pnbk.svg';
import scrum_board from './assets/undraw_scrum_board_cesn.svg';

const HomePage = () => {
  const [signIn, setSignIn] = useState(true);

  const changeForm = () => {
    setSignIn(!signIn);
  };

  return (
    <div
      className={signIn ? 'container sign-in' : 'container sign-up'}
      id='container'
    >
      <FormSection changeForm={changeForm} />
      <ContentSection signIn={signIn} />
    </div>
  );
};

const ContentSection = ({ signIn }) => {
  return (
    <div className='row content-row content-section'>
      <SignInContent signIn={signIn} />
      <SignUpContent />
    </div>
  );
};

const SignInContent = ({ signIn }) => {
  return (
    <div className='col align-items-center flex-col'>
      <div className='text sign-in'>
        {signIn ? <h1>Welcome back</h1> : ''}
        <h2>Advancing Engaged Citizenship</h2>

        <p className='sign-in-text'>
          A platform where students can journey with a team of advisors to
          assist with the innovation of project ideas, during the
          conceptualization and implementation phase. It allows students to
          complete a standard template with prompts to answer key questions. It
          also allows university staff to provide feedback and mentorship via
          the platform.
        </p>
        <div className='img sign-in'>
          <img src={creative_team} alt='welcome.svg' />
        </div>
      </div>
    </div>
  );
};

const SignUpContent = () => {
  return (
    <div className='col align-items-center flex-col'>
      <div className='img sign-up'>
        <img src={right_places} alt='welcome' />
      </div>
      <div className='text sign-up'>
        <h2>Sign Up With Us</h2>
        <p>
          A platform where students can journey with a team of advisors to
          assist with the innovation of project ideas, during the
          conceptualization and implementation phase.
        </p>
      </div>
    </div>
  );
};

const FormSection = ({ changeForm }) => {
  return (
    <div className='row'>
      <SignUp changeForm={changeForm} />
      <SignIn changeForm={changeForm} />
    </div>
  );
};

const SignUp = ({ changeForm }) => {
  return (
    <div className='col align-items-center flex-col sign-up sign-up-form'>
      <div className='form-wrapper align-items-center'>
        <div className='form sign-up'>
          <div className='input-group'>
            <i className='bx bxs-user'></i>
            <input type='text' placeholder='Username' />
          </div>
          <div className='input-group'>
            <i className='bx bx-mail-send'></i>
            <input type='email' placeholder='Email' />
          </div>
          <div className='input-group'>
            <i className='bx bxs-lock-alt'></i>
            <input type='password' placeholder='Password' />
          </div>
          <div className='input-group'>
            <i className='bx bxs-lock-alt'></i>
            <input type='password' placeholder='Confirm password' />
          </div>
          <button>Sign up</button>
          <p>
            <span>
              <h5>Already have an account?</h5>
            </span>
            <b onClick={changeForm} className='pointer'>
              <br />
              <button>Sign in here</button>
            </b>
          </p>
        </div>
      </div>
      <div className='form-wrapper'>
        <div className='social-list align-items-center sign-up'>
          <div className='align-items-center facebook-bg'>
            <i className='bx bxl-facebook'></i>
          </div>
          <div className='align-items-center google-bg'>
            <i className='bx bxl-google'></i>
          </div>
          <div className='align-items-center twitter-bg'>
            <i className='bx bxl-twitter'></i>
          </div>
          <div className='align-items-center insta-bg'>
            <i className='bx bxl-instagram-alt'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignIn = ({ changeForm }) => {
  return (
    <div className='col align-items-center flex-col sign-in'>
      <div className='form-wrapper align-items-center'>
        <div className='form sign-in'>
          <div className='input-group'>
            <i className='bx bxs-user'></i>
            <input type='text' placeholder='Username' />
          </div>
          <div className='input-group'>
            <i className='bx bxs-lock-alt'></i>
            <input type='password' placeholder='Password' />
          </div>
          <button>Sign in</button>

          <span>Don't have an account?</span>
          <b onClick={changeForm} className='pointer'>
            <br />
            <button>Sign up here</button>
          </b>
          <p></p>
          <b>Forgot password?</b>
          <p></p>
        </div>
      </div>
      <div className='form-wrapper'>
        <div className='social-list align-items-center sign-in'>
          <div className='align-items-center facebook-bg'>
            <i className='bx bxl-facebook'></i>
          </div>
          <div className='align-items-center google-bg'>
            <i className='bx bxl-google'></i>
          </div>
          <div className='align-items-center twitter-bg'>
            <i className='bx bxl-twitter'></i>
          </div>
          <div className='align-items-center insta-bg'>
            <i className='bx bxl-instagram-alt'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
