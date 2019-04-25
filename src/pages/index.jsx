import React from "react";

import HeadlineWithFocus from "../components/HeadlineWithFocus";

const Index = props => {
  return (
    <div className="c-content-box">
      <h2>Hi, Welcome to </h2>
      <HeadlineWithFocus
        modifierClassNames={`
          c-headline-focus 
          c-headline-focus--super-big 
        `}
      >
        Saifee Hardware Mart
      </HeadlineWithFocus>
      <h2
        className={`
          js-action-button-anchor
          c-content-box__subheadline 
          c-content-box__subheadline--with-button
        `}
      >
        Quality is our product
      </h2>
    </div>
  );
};

export default Index;
