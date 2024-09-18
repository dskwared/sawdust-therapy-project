import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { links } from './data.jsx'
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <div className="hero-title">
            <h3>Sawdust Therapy Woodworking</h3>
          </div>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          className={
            showLinks ? 'links-container show-container' : 'links-container'
          }
        >
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
