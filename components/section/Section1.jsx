import React from 'react';

const Section1 = () => {
  return (
    <div
      id="page#0"
      className="uk-section-secondary"
      tm-header-transparent="light"
      uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
    >
      <div
        data-src="/landmark/images/linework2.svg"
        uk-img='true'
        className="uk-background-norepeat uk-background-width-1-1 uk-background-bottom-left uk-section uk-flex uk-flex-middle"
        uk-height-viewport="offset-top: true; offset-bottom: ! +;"
      >
        <div className="uk-width-1-1">
          <div className="uk-container uk-container-large">
            <div className="tm-header-placeholder uk-margin-remove-adjacent"></div>
            <div
              className="tm-grid-expand uk-child-width-1-1 uk-grid-margin"
              uk-grid='true'
            >
              <div className="uk-width-1-1@m">
                <h1
                  className="uk-heading-large uk-text-uppercase uk-width-2xlarge uk-text-left"
                  uk-scrollspy-class='true'
                >
                  <span className="">
                    Learning <br />
                    Begins <br />
                    With You
                  </span>
                </h1>
                <h2
                  className="uk-h2 uk-text-emphasis uk-width-large uk-text-left"
                  uk-scrollspy-class='true'
                >
                  We Provide
                  <span className="uk-text-primary">High Quality</span> counseling
                  to all the student aspiring to study abroad.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;