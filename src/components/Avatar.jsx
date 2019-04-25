import React from 'react';
import logoimg from './../images/logo.png'

const Avatar = (props) => (
  <div className={`c-avatar ${props.modifierClasses}`}>
    <img 
      src={(props.modifierClasses === 'c-avatar--as-author') ? logoimg : logoimg} 
      alt="saifeehardwaremart.com"
    />
  </div>
)

export default Avatar;