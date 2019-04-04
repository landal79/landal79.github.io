import React from 'react'; 
import { StaticQuery, Link, graphql } from "gatsby"
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import Bio from "./bio";

import { rhythm, scale } from "../utils/typography";

function Sidebar() {
    return (
        <StaticQuery
            query={sidebarQuery}
            render={ data => {
                const title = data.site.siteMetadata.title;
                
                return (
                <div style={{             
                    maxWidth: rhythm(10),
                    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                    backgroundColor: '#606060',}}>
                    <h6 style={{
                        ...scale(1.5),
                        marginBottom: rhythm(1.5),
                        marginTop: 0,
                    }}>
                        <Link style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`,
                            }}
                            to={`/`}>
                            {title}
                        </Link>
                    </h6>
                    <Bio />
                    <TwitterTimelineEmbed
                        sourceType="landal79"
                        screenName="landal79"
                        options={{height: 400}} />
                </div>
                )
            }}
        />
    )
} 

export default Sidebar;

const sidebarQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }   
  }
`