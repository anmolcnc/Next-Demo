import React from 'react'

const Section3 = () => {
  return (
    <div
      className="uk-section-secondary"
      uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: 200;"
    >
      <div
        className="uk-background-norepeat uk-background-cover uk-background-top-right uk-section uk-section-large uk-flex uk-flex-middle"
        uk-height-viewport="offset-top: true;"
      >
        <div className="uk-width-1-1">
          <div className="uk-container uk-container-large">
            <div className="tm-grid-expand uk-grid-margin" uk-grid="true">
              <div className="uk-width-3-5@m">
                <h2
                  className="uk-heading-small uk-text-left"
                  uk-scrollspy-class="true"
                >
                  What do you <br />
                  want to
                  <span className="uk-text-primary">study</span>?
                </h2>
                <div className="uk-margin-large uk-text-center@m uk-text-center">
                  <div
                    className="uk-child-width-1-2 uk-child-width-1-4@s uk-child-width-1-4@m uk-grid-large uk-grid-match"
                    uk-grid="true"
                  >
                    <div>
                      <a
                        className="el-item uk-panel uk-margin-remove-first-child uk-link-toggle uk-display-block"
                        href="#"
                        uk-scroll="true"
                        uk-scrollspy-class="true"
                      >
                        <img
                          src="icons/engineer.svg"
                          className="el-image uk-text-emphasis"
                          alt='icon'
                          loading="lazy"
                          uk-svg="true"
                        />

                        <h3 className="el-title uk-h3 uk-margin-small-top uk-margin-remove-bottom">
                          Engineering
                        </h3>
                      </a>
                    </div>
                    <div>
                      <a
                        className="el-item uk-panel uk-margin-remove-first-child uk-link-toggle uk-display-block"
                        href="#"
                        uk-scroll="true"
                        uk-scrollspy-class="true"
                      >
                        <img
                          src="icons/it.svg"
                          className="el-image uk-text-emphasis"
                          alt='icon'
                          loading="lazy"
                          uk-svg="true"
                        />

                        <h3 className="el-title uk-h3 uk-margin-small-top uk-margin-remove-bottom">
                          Info Tech
                        </h3>
                      </a>
                    </div>
                    <div>
                      <a
                        className="el-item uk-panel uk-margin-remove-first-child uk-link-toggle uk-display-block"
                        href="#"
                        uk-scroll="true"
                        uk-scrollspy-class="true"
                      >
                        <img
                          src="icons/nurse.svg"
                          className="el-image uk-text-emphasis"
                          alt='icon'
                          loading="lazy"
                          uk-svg="true"
                        />

                        <h3 className="el-title uk-h3 uk-margin-small-top uk-margin-remove-bottom">
                          Nursing
                        </h3>
                      </a>
                    </div>
                    <div>
                      <a
                        className="el-item uk-panel uk-margin-remove-first-child uk-link-toggle uk-display-block"
                        href="#"
                        uk-scroll="true"
                        uk-scrollspy-class="true"
                      >
                        <img
                          src="icons/mba.svg"
                          className="el-image uk-text-emphasis"
                          alt='icon'
                          loading="lazy"
                          uk-svg="true"
                        />

                        <h3 className="el-title uk-h3 uk-margin-small-top uk-margin-remove-bottom">
                          MBA
                        </h3>
                      </a>
                    </div>
                    <div>
                      <a
                        className="el-item uk-panel uk-margin-remove-first-child uk-link-toggle uk-display-block"
                        href="#"
                        uk-scroll="true"
                        uk-scrollspy-class="true"
                      >
                        <img
                          src="icons/accounting.svg"
                          className="el-image uk-text-emphasis"
                          alt='icon'
                          loading="lazy"
                          uk-svg="true"
                        />

                        <h3 className="el-title uk-h3 uk-margin-small-top uk-margin-remove-bottom">
                          Accounting
                        </h3>
                      </a>
                    </div>
                    <div>
                      <a
                        className="el-item uk-panel uk-margin-remove-first-child uk-link-toggle uk-display-block"
                        href="#"
                        uk-scroll="true"
                        uk-scrollspy-class="true"
                      >
                        <img
                          src="icons/hospitality.svg"
                          className="el-image uk-text-emphasis"
                          alt='icon'
                          loading="lazy"
                          uk-svg="true"
                        />

                        <h3 className="el-title uk-h3 uk-margin-small-top uk-margin-remove-bottom">
                          Hospitality
                        </h3>
                      </a>
                    </div>
                    <div>
                      <a
                        className="el-item uk-panel uk-margin-remove-first-child uk-link-toggle uk-display-block"
                        href="#"
                        uk-scroll="true"
                        uk-scrollspy-class="true"
                      >
                        <img
                          src="icons/public-health.svg"
                          className="el-image uk-text-emphasis"
                          alt='icon'
                          loading="lazy"
                          uk-svg="true"
                        />

                        <h3 className="el-title uk-h3 uk-margin-small-top uk-margin-remove-bottom">
                          Public Health
                        </h3>
                      </a>
                    </div>
                    <div>
                      <a
                        className="el-item uk-panel uk-margin-remove-first-child uk-link-toggle uk-display-block"
                        href="#"
                        uk-scroll="true"
                        uk-scrollspy-class="true"
                      >
                        <img
                          src="icons/next.svg"
                          className="el-image uk-text-emphasis"
                          alt='icon'
                          loading="lazy"
                          uk-svg="true"
                        />

                        <h3 className="el-title uk-h3 uk-margin-small-top uk-margin-remove-bottom">
                          More
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="uk-width-2-5@m"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3