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
      title: '?????? ??????????????? ??????',
      duration: { fromDate: '2020', toDate: '??????' },
      description: '?????? ?????????????????? ???????????? ????????????.',
      subHeading: 'Technologies Used: React JS, Angular.js',
    },
    {
      title: '?????? ????????? ??????',
      duration: { fromDate: '2018', toDate: '2020' },
      description: '?????? ???????????? ??????????????????.',
      subHeading: 'Technologies Used: Node.js, JAVA, AWS',
    },
    {
      title: '????????? ?????? ??????',
      duration: { fromDate: '2015', toDate: '2018' },
      description: '????????? ?????? ??????????????????.',
      subHeading: 'Technologies Used: JAVA, PHP',
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={'???????????????'}
        subHeading={'???????????????'}
        fromDate={'2007'}
        toDate={'2010'}
      />

      <ResumeHeading
        heading={'???????????????'}
        subHeading={'???????????????'}
        fromDate={'2002'}
        toDate={'2006'}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={'?????????(??????)'}
          subHeading={'Frontend Head'}
          fromDate={'2020'}
          toDate={'??????'}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            ?????? ??????????????? ??? ???????????? Angular.js, React, Electron??? ??????/??? ???????????? ????????????.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Angular.js??? ?????? ?????? ??????????????? ???????????? ????????????.
          </span>
          <br />
          <span className="resume-description-text">- React??? ?????? ???????????? ??????????????????.</span>
          <br />
          <span className="resume-description-text">
            - Electron?????? ?????? PC App??? ???????????? ????????????.
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
        description="?????? ????????? ???????????????. ????????? ????????? ???????????? ?????? ????????? ?????????."
      />
      <ResumeHeading heading="Car" description="???????????? ???????????????." />
      <ResumeHeading heading="?????????" description="?????? ??? ????????? ??? ????????? ????????? ????????????." />
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
