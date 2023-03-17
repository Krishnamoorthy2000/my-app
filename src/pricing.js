import React from 'react';
import './pricing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons';


function Pricing() {
  return (
    <section className="pricing">
      <h1 className='heading'>Pricing Table in React</h1>
      <div className="pricing__container">
        <div className="pricing__card">
          <h5 className="pricing__title">Free</h5>
          <h6 className="pricing__price">$0<span>/month</span></h6>
          <hr className="pricing__divider" />
          <ul className="pricing__list">
            <li><FontAwesomeIcon icon={faCheck} /> Single User</li>
            <li><FontAwesomeIcon icon={faCheck} />5GB Storage</li>
            <li><FontAwesomeIcon icon={faCheck} />Unlimited Public Projects</li>
            <li><FontAwesomeIcon icon={faCheck} />Community Access</li>
            <li className="cross"><FontAwesomeIcon icon={faTimes} />Unlimited Private Projects</li>
            <li className="cross"><FontAwesomeIcon icon={faTimes} />Dedicated Phone Support</li>
            <li className="cross"><FontAwesomeIcon icon={faTimes} />Free Subdomain</li>
            <li className="cross"><FontAwesomeIcon icon={faTimes} />Monthly Status Reports</li>
          </ul>
          <button className="pricing__button">Button</button>
        </div>
        <div className="pricing__card">
          <h5 className="pricing__title">Plus</h5>
          <h6 className="pricing__price">$9<span>/month</span></h6>
          <hr className="pricing__divider" />
          <ul className="pricing__list">
            <li><FontAwesomeIcon icon={faCheck} /><strong> 5 Users</strong></li>
            <li><FontAwesomeIcon icon={faCheck} />50GB Storage</li>
            <li><FontAwesomeIcon icon={faCheck} />Unlimited Public Projects</li>
            <li><FontAwesomeIcon icon={faCheck} />Community Access</li>
            <li><FontAwesomeIcon icon={faCheck} />Unlimited Private Projects</li>
            <li><FontAwesomeIcon icon={faCheck} />Dedicated Phone Support</li>
            <li><FontAwesomeIcon icon={faCheck} />Free Subdomain</li>
            <li className="cross"><FontAwesomeIcon icon={faTimes} />Monthly Status Reports</li>
          </ul>
          <button className="pricing__button">Button</button>
        </div>
        <div className="pricing__card">
          <h5 className="pricing__title">Pro</h5>
          <h6 className="pricing__price">$49<span>/month</span></h6>
          <hr className="pricing__divider" />
          <ul className="pricing__list">
            <li><FontAwesomeIcon icon={faCheck} /><strong> Unlimited Users</strong></li>
            <li><FontAwesomeIcon icon={faCheck} />150GB Storage</li>
            <li><FontAwesomeIcon icon={faCheck} />Unlimited Public Projects</li>
            <li><FontAwesomeIcon icon={faCheck} />Community Access</li>
            <li><FontAwesomeIcon icon={faCheck} />Unlimited Private Projects</li>
            <li><FontAwesomeIcon icon={faCheck} />Dedicated Phone Support</li>
            <li><FontAwesomeIcon icon={faCheck} /><strong> Unlimited</strong> Free Subdomains</li>
            <li><FontAwesomeIcon icon={faCheck} />Monthly Status Reports</li>
          </ul>
          <button className="pricing__button">Button</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
