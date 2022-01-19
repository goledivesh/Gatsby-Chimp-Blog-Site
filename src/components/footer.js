import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="subscribe-wrap">
          <div className="c-row">
            <div className="c-sub-content">
              <h3>
                Get our best news, stories, and tips for making an impact.
                <span class="primColor">Subscribe to the newsletter</span>
              </h3>
            </div>
            <div className="c-sub-form">
              <form>
                <label>
                  <input
                    type="text"
                    className="form-input"
                    name="emailAddress"
                    placeholder="Email Address"
                  />
                </label>
                <button type="submit" className="sub-form-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footerLinkWraper">
          <div className="c-row">
            <div class="c_footer_logo">
              <div class="f__logo">
                <img
                  src="https://mktchimp.wpengine.com/wp-content/themes/charitableimpact/img/chimp-logo.svg"
                  alt="Charitable Impact"
                />
              </div>
              <div class="address">
                Charitable Impact
                <br />
                #1250 - 1500 W Georgia St <br />
                Vancouver, BC V6G 2Z6 Canada
                <br />
              </div>
            </div>
            <div className="footer-link-cols">
              <div className="footer-col-1">
                <div class="footerLinkList">
                  <div class="linkItem">
                    <Link class="linkListHeader" to="/how-it-works">
                      How it Works
                    </Link>
                  </div>
                </div>
              </div>
              <div className="footer-col-2">
                <div class="footerLinkList">
                  <div class="linkItem">
                    <span class="linkListHeader">About</span>
                  </div>
                  <div class="linkItem">
                    <Link to="/who-we-are" class="">
                      Who we are
                    </Link>
                  </div>

                  <div class="linkItem">
                    <Link to="/foundation" class="">
                      Charitable Impact Foundation
                    </Link>
                  </div>
                  <div class="linkItem">
                    <Link to="/fees" class="">
                      Fees
                    </Link>
                  </div>
                  <div class="linkItem">
                    <Link to="/careers" class="">
                      Careers
                    </Link>
                  </div>
                  <div class="linkItem">
                    <Link to="/press" class="">
                      Press
                    </Link>
                  </div>
                  <div class="linkItem">
                    <Link to="/blog" class="">
                      Blog
                    </Link>
                  </div>
                </div>
              </div>
              <div className="footer-col-3">
                <div class="footerLinkList">
                  <div class="linkItem">
                    <span class="linkListHeader">Support</span>
                  </div>
                  <div class="linkItem">
                    <a
                      href="https://help.charitableimpact.com"
                      rel="noreferrer"
                      class=""
                    >
                      Help Centre
                    </a>
                  </div>
                  <div class="linkItem">
                    <a href="/contact" class="">
                      Contact us
                    </a>
                  </div>
                  <div class="linkItem">
                    <a
                      href="https://my.charitableimpact.com/privacy"
                      target="_blank"
                      rel="noreferrer"
                      class=""
                    >
                      Privacy{" "}
                    </a>
                  </div>
                  <div class="linkItem">
                    <a
                      href="https://my.charitableimpact.com/terms"
                      target="_blank"
                      rel="noreferrer"
                      class=""
                    >
                      Terms
                    </a>
                  </div>
                  <div class="linkItem">
                    <a
                      href="https://my.charitableimpact.com/chimp-account-agreement"
                      target="_blank"
                      rel="noreferrer"
                      class=""
                    >
                      Account Agreement
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-col-4">
                <div class="footerLinkList">
                  <div class="linkItem">
                    <span class="linkListHeader">Solutions</span>
                    <div class="linkItem">
                      <a href="/advisors" class="">
                        For Advisors
                      </a>
                    </div>
                    <div class="linkItem">
                      <a href="/charities" class="">
                        For Charities
                      </a>
                    </div>
                    <hr class="hr-app-button" />
                    <h3 class="mb-1">Get the app</h3>
                    <a href="https://charitableimpact.app.link/android-blogsite">
                      <img
                        src="https://view.charitableimpact.com/hubfs/Template-Kits/assets/google-play-badge.png"
                        alt="Download the Impact Account app for Android"
                        class="appDownload img-fluid"
                      />
                    </a>
                    &nbsp;
                    <a href="https://charitableimpact.app.link/ios-blogsite">
                      <img
                        src="https://cdn2.hubspot.net/hubfs/2004091/giving.charitableimpact.com/images/ios-app-download-dark.svg.svg"
                        alt="Download the Impact Account iOS app"
                        class="appDownload img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row copyright-footer">
          <div class="col-md-12">
            <div class="copyRight">
              © Copyright 2022 CHIMP Technology Inc. – All Rights Reserved.
            </div>
            <div class="footerSocialLinks">
              <a
                href="https://go.charitableimpact.com/facebook"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://mktchimp.wpengine.com/wp-content/themes/charitableimpact/img/facebook.png"
                  alt="facebook"
                />
              </a>
              <a
                href="https://go.charitableimpact.com/linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://mktchimp.wpengine.com/wp-content/themes/charitableimpact/img/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a
                href="https://go.charitableimpact.com/twitter"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="https://mktchimp.wpengine.com/wp-content/themes/charitableimpact/img/twitter.png"
                  alt="twitter"
                />
              </a>
              <a
                href="https://go.charitableimpact.com/instagram"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://mktchimp.wpengine.com/wp-content/themes/charitableimpact/img/instagram.png"
                  alt="instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
