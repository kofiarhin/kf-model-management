import "./footer.styles.scss";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="main-wrapper">
          <div className="left-unit">
            <h1 className="heading">StarCast</h1>
          </div>
          <div className="footer-wrapper">
            <div className="footer-unit">
              <ul>
                <li className="title">
                  <a href="#company">Company</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#success">Success Stories</a>
                </li>
                <li>
                  <a href="#details">Company Details</a>
                </li>
                <li>
                  <a href="#podcast">Podcast</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
              </ul>
            </div>

            <div className="footer-unit">
              <ul>
                <li className="title">
                  <a href="#company">Privacy</a>
                </li>
                <li>
                  <a href="#about">Privacy Policys</a>
                </li>
                <li>
                  <a href="#testimonials">Terms of Use</a>
                </li>
              </ul>
            </div>

            <div className="footer-unit">
              <ul>
                <li className="title">
                  <a href="#company">Help</a>
                </li>
                <li>
                  <a href="#about">Safety and Trust</a>
                </li>
                <li>
                  <a href="#testimonials">How it works</a>
                </li>
                <li>
                  <a href="#success">Success Modeling Advice</a>
                </li>
                <li>
                  <a href="#details">Contact Us</a>
                </li>
                <li>
                  <a href="#podcast">Podcast</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-wrapper">
          <a href="https://github.com/kofiarhin" target="_blank">
            <p>Created By Kofi Arhin</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
