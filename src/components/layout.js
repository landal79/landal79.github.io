import React from "react";

import { rhythm } from "../utils/typography";

import Sidebar from "./sidebar";

class Layout extends React.Component {
  render() {
    const { location, children } = this.props;
    const year = new Date().getFullYear();

    return (
      <div>
        <div style={{
            display: `flex`,          
            'flex-direction': `row`,
          }}>
            <Sidebar />
            <div>
              <div style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(24),
                padding: `${rhythm(3 / 4)}`,
              }}>{children}</div> 
              <footer>
                © {year}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>    
             </div>       
        </div>      
      </div>
    )
  }
}

export default Layout
