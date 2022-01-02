import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

const Profile = (props) => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/ubardev" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://blog.ubar.kr" target="_blank">
                <i className="fa fa-rss" />
              </a>
              <a href="https://www.linkedin.com/in/jong-in-hwang-876619157/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {' '}
              안녕하세요. <span className="highlighted-text">황종인</span>입니다.{' '}
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                {' '}
                <Typical
                  loop={Infinity}
                  steps={[
                    'Frontend developer 🖥️',
                    1000,
                    'Backend developer ☁️',
                    1000,
                    'Team leader 👑',
                    1000,
                    'JavaScript, React, Augular.js 😎',
                    1000,
                    'Java, Spring boot, Node.js, PHP 🧐',
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                JANDI에서 프론트엔드 팀 리딩을 하고 있습니다.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Contact Me </button>
            <a href="#" download="Hwang22.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
