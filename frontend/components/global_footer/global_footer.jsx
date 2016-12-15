import React from 'react';
import { Link, withRouter } from 'react-router';

class GlobalFooter extends React.Component {
  render() {
    return (
      <footer className="global-footer clearfix">
        <div className="footer-nav clearfix">
          <div className="divider"></div>
          <span>Made by <a
            href="https://github.com/BillWiegert"
            target="_blank">
            Bill Wiegert.
            </a>
          </span>
          <span>Modeled after <a
              href="http://www.instructables.com"
              target="_blank">
              instructables.com
            </a> for educational purposes only.
          </span>
          <ul className="footer-links">
            <li>
              <a className="btn"
                href="https://github.com/BillWiegert/Constructibles"
                target="_blank">
                Github Repo
              </a>
            </li>
            <li>
              <a className="btn"
                href="https://github.com/BillWiegert"
                target="_blank">
                My Github
              </a>
            </li>
            <li>
              <a className="btn" href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default withRouter(GlobalFooter);
