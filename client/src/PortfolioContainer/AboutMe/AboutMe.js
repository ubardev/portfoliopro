import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css';

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      '11년차 개발자 입니다. SI로 개발을 시작했고 서버, 백엔드 개발을 경험했습니다. 현재는 프론트엔드 팀 리더로써 Angular.js와 React를 주력으로 개발하고 있습니다.',
    highlights: {
      bullets: [
        '20.04 ~ 현재 : 토스랩(JANDI) Frontend 개발 팀 리더(Angular.js, React)',
        '18.08 ~ 20.04 : 토스랩(JANDI) Backend 개발(AWS, JAVA, Node.js)',
        '15.06 ~ 18.04 : ST Unitas 빌링개발팀 리더(JAVA, PHP)',
        '11.06 ~ 15.06 : 쌍용정보통신 공공SI개발(JAVA)',
      ],
      heading: '주요경력',
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ''}>
      <div className="about-me-parent">
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">{SCREEN_CONSTSANTS.description}</span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {' '}
                Hire Me{' '}
              </button>
              <a href="Hwang.pdf" download="Hwang.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
