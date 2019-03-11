// import modules
import React from "react"

// import components
import { Link } from "gatsby"

// export component
export default () => (
  <nav>
    <ul>
      <li>
        <Link to="/nytimes-api" className="brand">
          nytimes-api
        </Link>
      </li>
      <div className="right">
        <li>
          <Link to="/nytimes-api/docs">Docs</Link>
        </li>
      </div>
    </ul>
  </nav>
)
