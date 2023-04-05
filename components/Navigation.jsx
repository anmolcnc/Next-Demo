import React from 'react'
import Image from "next/image";


const Navigation = () => {
  return (
    <nav>
      <div className="tm-header uk-visible@m" uk-header>
        <div
          uk-sticky
          media="@m"
          cls-active="uk-navbar-sticky"
          sel-target=".uk-navbar-container"
        >
          <div className="uk-navbar-container">
            <div className="uk-container uk-container-expand">
              <nav
                className="uk-navbar"
                uk-navbar='{"align":"center","container":".tm-header &gt; [uk-sticky]","boundary":".tm-header .uk-navbar-container","target-x":".tm-header .uk-navbar","dropbar":true,"target-y":".tm-header .uk-navbar-container","dropbar-anchor":".tm-header .uk-navbar-container"}'
              >
                <div className="uk-navbar-left">
                  <div className="uk-margin-remove-last-child custom">
                    <a href="index-2.html" className="uk-logo uk-navbar-item">
                      <Image
                        src="logo.svg"
                        alt="Logo"
                        width={220}
                        height={500}
                      />
                    </a>
                  </div>
                </div>

                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    <li className="item-119 uk-parent">
                      <a> Find a course</a>
                    </li>
                    <li className="item-108">
                      <a> Scholarship</a>
                    </li>
                    <li className="item-124 uk-parent">
                      <a> Destinations</a>
                    </li>
                    <li className="item-109">
                      <a>Test Preparation</a>
                    </li>
                    <li className="item-121">
                      <a href="/">News &amp; Updates</a>
                    </li>
                    <li className="item-111">
                      <a href="/"> About</a>
                    </li>
                    <li className="item-113">
                      <a href="/"> Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation