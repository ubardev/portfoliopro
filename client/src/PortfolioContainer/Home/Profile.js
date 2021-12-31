import React from 'react';

const Profile = (props) => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://github.com/ubardev" target="_blank">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://blog.ubar.kr" target="_blank">
              <i className="fa fa-rss"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
