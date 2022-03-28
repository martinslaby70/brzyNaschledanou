import React from "react";

const LadingPage = () => {
  return (
    <div className="d-flex justify-content-end">
      <div className="inner">
        <div className="circle">
          <div>+</div>
          <span>Jediná společnost svého druhu v ČR</span>
        </div>
        <div className="circle">
          <div>+</div>
          <span>Realizace projektů u nás i v zahraničí</span>
        </div>
        <div className="circle">
          <div>+</div>
          <span>Osobní přístup, empatie, porozumění</span>
        </div>
      </div>
      <div className="section-left overflow-hidden d-flex align-items-end flex-column">
        <div className="skewed1" />
        <div className="skewed2" />
      </div>
      <div className="section-right">
        <div className="landingPageFilter1">
          <h1 className="heading">BRZY NASHLEDANOU</h1>
        </div>
        <div className="landingPageFilter1body">
          <h2 className="heading2">Alternativní pohřební agentura</h2>
        </div>
      </div>
    </div>
  );
};

export default LadingPage;
