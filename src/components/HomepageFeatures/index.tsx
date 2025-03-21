import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Define SVG components properly for Docusaurus
function LightningIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PaintbrushIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H11C12.1046 3 13 3.89543 13 5V12M7 21C8.10457 21 9 20.1046 9 19V17H7C5.89543 17 5 17.8954 5 19C5 20.1046 5.89543 21 7 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 17L11 15.5L17.5 9L19 10.5L12.5 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 15.5L9.5 19L13 17.5L11 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 19V13M9 19H5M9 19H13M9 13V7C9 5.89543 9.89543 5 11 5H13C14.1046 5 15 5.89543 15 7V9M9 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13H15M15 9V5M15 9H19C20.1046 9 21 9.89543 21 11V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const FeatureList = [
  {
    title: 'Simple Integration',
    icon: <LightningIcon />,
    description: (
      <>
        Add an audio player effortlessly to your React app with just a few lines of code.
      </>
    ),
  },
  {
    title: 'Customizable',
    icon: <PaintbrushIcon />,
    description: (
      <>
        Modify controls and themes to match your app's needs with ease.
      </>
    ),
  },
  {
    title: 'Performance Optimized',
    icon: <ChartIcon />,
    description: (
      <>
        Built with React ensuring smooth component integration and performance.
      </>
    ),
  },
];

function Feature({icon, title, description, index}) {
  return (
    <div className={clsx('col col--4 animate-fade-in margin-bottom--md ', {
      'animation-delay-300': index === 0,
      'animation-delay-400': index === 1,
      'animation-delay-500': index === 2,
    })}>
      <div className="feature-card text--center">
        <div className="feature-icon">
          <div className={styles.featureSvg}>{icon}</div>
        </div>
        <h3 className='gradient'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center">
            <h2 className="margin-bottom--lg heading-2 gradient">What Makes Tunez Unique ? </h2>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} index={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
