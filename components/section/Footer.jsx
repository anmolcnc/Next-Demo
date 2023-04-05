import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <div id="footer#0" className="uk-section-secondary">
      <div
        data-src="/landmark/images/footer-bg.svg"
        uk-img
        className="uk-background-norepeat uk-background-width-1-1 uk-background-bottom-right uk-section"
      >
        <div className="uk-container uk-container-large">
          <div
            className="tm-grid-expand uk-grid-row-large uk-grid-margin-large"
            uk-grid="true"
          >
            <div className="uk-width-1-1@s uk-width-1-4@m">
              <div className="uk-margin uk-text-left@s uk-text-center">
                <Image
                  src="logo-inverse.svg"
                  alt="Logo Footer"
                  width={240}
                  height={500}
                  loading='lazy'
                />
              </div>
            </div>
            <div className="uk-width-1-2@s uk-width-1-4@m">
              <h4>Head Office</h4>
              <div className="uk-panel uk-margin">
                New plaza marga <br />
                (Opposite to Kumari Bank)
                <br />
                Putalisadak, Kathmandu
                <br />
                Tel: 4442781, 4431760
                <br />
                E-mail:
                <span id="cloakaa13791ae61ee472bbdc4c9a0f7779b3">
                  This email address is being protected from spambots. You need
                  JavaScript enabled to view it.
                </span>
              </div>
              <h4 className="uk-margin-remove-bottom">Sydney office</h4>
              <div className="uk-panel uk-margin">
                Suite 12, Level 1, <br />
                301 Castlereagh street,
                <br />
                Sydney, NSW 2000 <br />
                Tel: +61 415 122 814
              </div>
              <h4 className="uk-margin-remove-bottom">Branch office</h4>
              <div className="uk-panel uk-margin">
                Sahidchowk, Chitwan
                <br />
                Tel: 056-590825
              </div>
            </div>
            <div className="uk-width-1-2@s uk-width-1-4@m">
              <ul className="uk-list uk-text-left@s">
                <li className="el-item">
                  <div className="el-content uk-panel">
                    <a
                      href="index.php/about.html"
                      className="el-link uk-link-text uk-margin-remove-last-child"
                    >
                      About Us
                    </a>
                  </div>
                </li>
                <li className="el-item">
                  <div className="el-content uk-panel">
                    <a
                      href="index.php/news-updates.html"
                      className="el-link uk-link-text uk-margin-remove-last-child"
                    >
                      News & Updates
                    </a>
                  </div>
                </li>
                <li className="el-item">
                  <div className="el-content uk-panel">
                    <a
                      href="index.php/blogs.html"
                      className="el-link uk-link-text uk-margin-remove-last-child"
                    >
                      Blogs
                    </a>
                  </div>
                </li>
                <li className="el-item">
                  <div className="el-content uk-panel">
                    <a
                      href="index.php/about.html#testimonials"
                      className="el-link uk-link-text uk-margin-remove-last-child"
                    >
                      Forum
                    </a>
                  </div>
                </li>
                <li className="el-item">
                  <div className="el-content uk-panel">
                    <a
                      href="index.php/events.html"
                      className="el-link uk-link-text uk-margin-remove-last-child"
                    >
                      Events
                    </a>
                  </div>
                </li>
                <li className="el-item">
                  <div className="el-content uk-panel">
                    <a
                      href="index.php/contact.html"
                      className="el-link uk-link-text uk-margin-remove-last-child"
                    >
                      Contact Us
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="uk-list uk-text-left@s">
                <li className="el-item">
                  <div className="el-content uk-panel">
                    <a
                      href="index.php/find-a-course.html"
                      className="el-link uk-link-text uk-margin-remove-last-child"
                    >
                      Find a Course
                    </a>
                  </div>
                </li>
                <li className="el-item">
                  <div className="el-content uk-panel">
                    <a
                      href="index.php/2-uncategorised/50-services.html"
                      className="el-link uk-link-text uk-margin-remove-last-child"
                    >
                      Our Services
                    </a>
                  </div>
                </li>
                <li className="el-item">
                  <div className="el-content uk-panel">
                    <a
                      href="index.php/destinations.html"
                      className="el-link uk-link-text uk-margin-remove-last-child"
                    >
                      Scholarships
                    </a>
                  </div>
                </li>
                <li className="el-item">
                  <div className="el-content uk-panel">
                    <a
                      href="index.php/destinations.html"
                      className="el-link uk-link-text uk-margin-remove-last-child"
                    >
                      Destinations
                    </a>
                  </div>
                </li>
                <li className="el-item">
                  <div className="el-content uk-panel">
                    <a
                      href="index.php/test-preparation.html"
                      className="el-link uk-link-text uk-margin-remove-last-child"
                    >
                      Test Preparation
                    </a>
                  </div>
                </li>
                <li className="el-item">
                  <div className="el-content uk-panel">
                    <a
                      href="index.php/visa-guidance.html"
                      className="el-link uk-link-text uk-margin-remove-last-child"
                    >
                      Visa Guidance
                    </a>
                  </div>
                </li>
                <li className="el-item">
                  <div className="el-content uk-panel">
                    <a
                      href="index.php/application-form.html"
                      className="el-link uk-link-text uk-margin-remove-last-child"
                    >
                      Application Form
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="uk-width-medium@s uk-width-1-4@m">
              <h3 className="uk-h4 uk-text-left@s uk-text-center">
                Subscribe to Our Newsletter
              </h3>
              <div className="uk-text-left@s uk-text-center">
                <form
                  className="uk-form uk-panel js-form-newsletter"
                  method="post"
                  action="http://cncclub.com.np/landmark/index.php/component/ajax/?p=theme%2Fnewsletter%2Fsubscribe&amp;templateStyle=9"
                >
                  <div
                    className="uk-grid-small uk-child-width-1-1"
                    uk-grid="true"
                  >
                    <div>
                      <input
                        className="el-input uk-input"
                        type="email"
                        name="email"
                        required
                      />
                    </div>
                    <div>
                      <button
                        className="el-button uk-button uk-button-default"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <input
                    type="hidden"
                    name="settings"
                    value="IzfDM87KYPZ6RaoOlHmC/w==.N1h1eGlaa1JPamdwUTZkYmFEMzBtS2tjTG13THpTY0Z0ejVzVjhjcDREYzdPNXkwZ2s5MmFZcWhYaUJYRkIvMDdFOW16a2toTVN5dU9WYkNjVHdYbUFiZE96U2lLRDU2QkxpOWhvclRkbVNuQzVFRTMrVExzWnJpQlhFeEJoSlFTckUrMnhybnNCQkRrUlQ2TUJ1alUxN2xMRlAzamNZWFl0SVhGWFRORG16blp3NlZtY0F4ckVjemo4U1g2Y3puZlRuQlRqVURYTHVUUWNvSHdZajZIYTBQdUtDbnc2ZHBOL0ZncjJBOWVob0tnellJd0RoNU9kSEViQVo4L3BXbytOR1E2QzQ5YnpVUEozMnZWUm1wRENGYjFJRzU1bFBUdXdSYVdjWG5KVlk9.NjJlYTQxNmU3N2FmYzYxZTBiYjU0MGVlODYzNTczZGMwODk3NjA1MjJjMDUyYzFjZWYzOTM4NzJkOTU0NmUzMg=="
                  />
                  <div className="message uk-margin uk-hidden"></div>
                </form>
              </div>
              <div className="uk-margin uk-text-left@s uk-text-center">
                <div
                  className="uk-child-width-auto uk-grid-small uk-flex-inline"
                  uk-grid="true"
                >
                  <div>
                    <a
                      className="el-link uk-icon-button"
                      href="https://facebook.com/"
                      rel="noreferrer"
                    >
                      <span uk-icon="icon: facebook;"></span>
                    </a>
                  </div>
                  <div>
                    <a
                      className="el-link uk-icon-button"
                      href="https://twitter.com/"
                      rel="noreferrer"
                    >
                      <span uk-icon="icon: twitter;"></span>
                    </a>
                  </div>
                  <div>
                    <a
                      className="el-link uk-icon-button"
                      href="http://linkedin.com/"
                      rel="noreferrer"
                    >
                      <span uk-icon="icon: linkedin;"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tm-grid-expand uk-grid-row-small uk-margin-xlarge"
            uk-grid="true"
          >
            <div className="uk-grid-item-match uk-flex-middle uk-width-2-5@m">
              <div className="uk-panel uk-width-1-1">
                <div className="uk-panel uk-text-small uk-text-muted uk-text-left">
                  © Landmark Education. All rights reserved. Website by
                  <a
                    className="uk-link-text"
                    href="https://curvesncolors.com/"
                    target="_blank"
                  >
                    Cn'C
                  </a>
                  .
                </div>
              </div>
            </div>
            <div className="uk-grid-item-match uk-flex-middle uk-width-3-5@m">
              <div className="uk-panel uk-width-1-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;