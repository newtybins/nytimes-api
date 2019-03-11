// import modules
import React from "react"

// import components
import Navbar from "../components/Navbar"
import { Link } from "gatsby"

// export page
export default () => (
  <div>
    <Navbar />

    <h1 className="title">Interact with the New York Times' API with ease.</h1>
    <h3 className="subtitle">
      Find out <Link to="/nytimes-api/docs">more</Link>...
    </h3>
  </div>
)
