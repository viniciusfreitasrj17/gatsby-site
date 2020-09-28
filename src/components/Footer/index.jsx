import React from "react"
import { FacebookIcon, GithubIcon, LinkedinIcon } from "./styled.js"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const {
    site: {
      siteMetadata: {
        socialMedia: { facebook, github, linkedin },
        copyright,
        description,
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialMedia {
            facebook
            github
            linkedin
          }
          copyright
          description
        }
      }
    }
  `)

  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row text-white py-4 mt-5">
          <div className="col-6">{description}</div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <a href={facebook} target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <GithubIcon />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon />
            </a>
          </div>
          <div className="col-12 d-flex justify-content-center">
            {copyright}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
