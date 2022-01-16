import React, { useState, useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">{props.fromDate + '-' + props.toDate}</div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects', logoSrc: 'projects.svg' },
    { label: 'Interests', logoSrc: 'interests.svg' },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: 'JavaScript', ratingPercentage: 50 },
    { skill: 'React JS', ratingPercentage: 50 },
    { skill: 'Node JS', ratingPercentage: 50 },
    { skill: 'Mongo Db', ratingPercentage: 50 },
    { skill: 'AWS', ratingPercentage: 50 },
    { skill: 'Java', ratingPercentage: 50 },
  ];

  const projectsDetails = [
    {
      title: '잔디 프론트엔드 개발',
      duration: { fromDate: '2020', toDate: '현재' },
      description: '잔디 프론트엔드를 개발하고 있습니다.',
      subHeading: 'Technologies Used: React JS, Angular.js',
    },
    {
      title: '잔디 백엔드 개발',
      duration: { fromDate: '2018', toDate: '2020' },
      description: '잔디 백엔드를 개발했습니다.',
      subHeading: 'Technologies Used: Node.js, JAVA, AWS',
    },
    {
      title: '영단기 빌링 개발',
      duration: { fromDate: '2015', toDate: '2018' },
      description: '영단기 빌링 개발했습니다.',
      subHeading: 'Technologies Used: JAVA, PHP',
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={'경희대학교'}
        subHeading={'산업공학과'}
        fromDate={'2007'}
        toDate={'2010'}
      />

      <ResumeHeading
        heading={'한경대학교'}
        subHeading={'환경공학과'}
        fromDate={'2002'}
        toDate={'2006'}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={'토스랩(잔디)'}
          subHeading={'Frontend Head'}
          fromDate={'2020'}
          toDate={'현재'}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            잔디 프론트엔드 팀 리더로써 Angular.js, React, Electron을 개발/팀 리딩하고 있습니다.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Angular.js로 잔디 메인 프로젝트를 개발하고 있습니다.
          </span>
          <br />
          <span className="resume-description-text">- React로 랜딩 페이지를 개편했습니다.</span>
          <br />
          <span className="resume-description-text">
            - Electron으로 잔디 PC App을 개발하고 있습니다.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div className="resume-screen-container programming-skills-container" key="programming-skills">
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="IT"
        description="전자 기기를 좋아합니다. 신제품 리뷰를 즐겨보며 많이 구매도 합니다."
      />
      <ResumeHeading heading="Car" description="자동차를 좋아합니다." />
      <ResumeHeading heading="재테크" description="돈을 잘 모으고 잘 쓰는데 관심이 많습니다." />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'}
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div style={carousalOffsetStyle.style} className="resume-details-carousal">
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ''}>
      <div className="resume-content">
        <ScreenHeading title={'Resume'} subHeading={'My formal Bio Details'} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
