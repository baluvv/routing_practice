import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <div className="top-container">
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave"
      />
      <h1 className="nav-heading">Wave</h1>
    </div>
    <ul className="nav-bar">
      <li>
        <Link to="/" className="nav-item">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
