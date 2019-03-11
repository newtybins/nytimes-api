// import modules
import React from "react"

// import components
import { Link } from "gatsby"

// export component
export default () => (
  <nav>
    <ul>
      <li>
        <Link to="/" className="brand">
          nytimes-api
        </Link>
      </li>
      <div className="right">
        <li>
          <Link to="/docs">Docs</Link>
        </li>
      </div>
    </ul>
  </nav>
)
