import React from 'react';
import Link from 'gatsby-link';
import Obfuscate from 'react-obfuscate';
import { FaPaperPlaneO, FaWrench } from 'react-icons/lib/fa';

const ForHomePageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>I'm glad</b><br /> that you're interested.
    </p>
    <p>      
    <b>Saifee Hardware Mart</b>, established in 1998, certified company is a leading distributor and stockiest for high tensile industrial fasteners in India. 
    </p>
    <p>
      With Saifee Hardware Mart, you have the perfect the fastener. 
      We guarantee <b>strength</b> and <b>reliability</b>
    </p>
    <p>
      If you realize that we would be a good fit, drop me 
      a message at <b><Obfuscate email='shabbir_dhinojwala@yahoo.com' /></b>. 
      or call <b><Obfuscate tel='9886074251' /></b>.
    </p>
    <p>
      Thank you. Now, you're free to go further.
    </p>
  </div>
);

const ForContactPageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>Hi there</b><br /> Before you leave
    </p>
    <p>
      Bolts and nuts are the invisible foundation of structures. 
      You don’t see them, but you know they are there. 
      All the more reason you want to be absolutely sure that you have the most reliable. 
      Since 2000, we have proven success in the field of fasteners, establishing an indelible presence.
    </p>
    <p>We believe in timely delivery without compromising the quality.</p>
    <p>Each Time, Every Time</p>
    <p>
      If you feel that you want us on your team, drop us 
      a message at <b><Obfuscate email='shaabbir_dhinojwala@yahoo.com' /></b>.
    </p>
    <p>
      Thank you<br />
      <b>Saifee Hardware Mart</b>
    </p>
  </div>
);

const RemarkScreen = (props) => { 
  const links = [ 
    { path: 'toolbox', icon: FaWrench }, 
    //{ path: 'playground', icon: FaPaperPlaneO }
  ];

  return (
    <div className={`c-remark-screen ${props.isActive && 'c-remark-screen--is-active'}`}>
      {props.locationPathName === '/' ? ForHomePageContent : ForContactPageContent}
      {props.locationPathName === '/' &&
        <div className="c-remark-screen__links">
          {
            links.map((link) => (        
              <Link 
                key={link.path}
                className="c-remark-screen__link" 
                to={`/${link.path}/`}
                onClick={props.onClick}
                tabIndex={props.isActive ? '1' : '-1'}
              >
                <link.icon /> {link.path}
              </Link>)
            ) 
          }
        </div>
      }

      <div className="c-remark-screen__bg"></div>
    </div>
  )
};

export default RemarkScreen;
