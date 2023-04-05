import React from 'react'

const Section2 = () => {
  return (
    <div className="uk-section-muted uk-section">
      <div className="uk-container">
        <div className="tm-grid-expand uk-child-width-1-1 uk-grid-margin" uk-grid='true'>
          <div className="uk-width-1-1">
            <h3 className="uk-text-uppercase uk-text-center">
              Find your perfect course
            </h3>
            <div className="uk-panel uk-margin uk-margin-remove-bottom">
              <div className="uk-flex uk-flex-middle">
                <div className="uk-width-1-1">
                  <form className="uk-grid-small" uk-grid='true'>
                    <div className="uk-width-1-3@s">
                      <input
                        className="uk-input uk-width-1-1"
                        type="text"
                        placeholder="SUBJECT AREA"
                      />
                    </div>
                    <div className="uk-width-expand">
                      <div className="uk-width-1-1">
                        <div
                          uk-form-custom="target: > * > span:first-child"
                          className="uk-width-1-1"
                        >
                          <select className="uk-width-1-1">
                            <option value="">COUNTRY</option>
                            <option value="1">Option 01</option>
                            <option value="2">Option 02</option>
                            <option value="3">Option 03</option>
                            <option value="4">Option 04</option>
                          </select>
                          <button
                            className="uk-button uk-button-default uk-width-1-1"
                            type="button"
                            tabIndex="-1"
                          >
                            <span></span>
                            <span
                              uk-icon="icon: chevron-down"
                              className="uk-position-center-right uk-margin-right"
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="uk-width-expand">
                      <div className="uk-width-1-1">
                        <div
                          uk-form-custom="target: > * > span:first-child"
                          className="uk-width-1-1"
                        >
                          <select className="uk-width-1-1">
                            <option value="">QUALIFICATION</option>
                            <option value="1">Option 01</option>
                            <option value="2">Option 02</option>
                            <option value="3">Option 03</option>
                            <option value="4">Option 04</option>
                          </select>
                          <button
                            className="uk-button uk-button-default uk-width-1-1"
                            type="button"
                            tabIndex="-1"
                          >
                            <span></span>
                            <span
                              uk-icon="icon: chevron-down"
                              className="uk-position-center-right uk-margin-right"
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="uk-width-1-5@s">
                      <button className="uk-button uk-width-1-1 uk-button-primary">
                        SEARCH
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <h4 className="uk-h6 uk-margin-small uk-text-right">
              <a className="el-link uk-link-reset" href="#" uk-scroll='true'>
                Advanced Search
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2