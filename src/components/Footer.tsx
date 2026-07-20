import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="footer__brand">MOSAIC® LEADERSHIP ARCHETYPES®</p>
          <p className="footer__text">
            A proprietary framework for understanding and developing leadership capability. Mosaic
            reveals the full spectrum of leadership archetypes present in every individual and
            organisation.
          </p>
        </div>

        <div>
          <p className="footer__heading">Explore</p>
          <ul className="footer__links">
            <li>
              <Link to="/model">Archetype Model</Link>
            </li>
            <li>
              <Link to="/philosophy">Philosophy</Link>
            </li>
            <li>
              <Link to="/workshops">Workshops</Link>
            </li>
            <li>
              <Link to="/download">Download Handbook</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer__heading">Connect</p>
          <ul className="footer__links">
            <li>
              <Link to="/about">About Mosaic</Link>
            </li>
            <li>
              <Link to="/enquiry">Enquire Now</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/cookies">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Mosaic Leadership Archetypes®. All rights reserved.</span>
        <span>MOSAIC® and LEADERSHIP ARCHETYPES® are registered trademarks.</span>
      </div>
    </footer>
  );
}
