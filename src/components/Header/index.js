// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-conbtainer">
    <div className="logo-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1>Wave</h1>
    </div>

    <ul className="nav-item-list">
      <l1 className="link-item">
        <Link to="/">Home</Link>
      </l1>

      <l1 className="link-item">
        <Link to="/about">About</Link>
      </l1>

      <l1 className="link-item">
        <Link to="/contact">Contact</Link>
      </l1>
    </ul>
  </nav>
)

export default Header
