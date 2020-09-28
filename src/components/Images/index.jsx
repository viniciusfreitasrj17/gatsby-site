import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Images = ({ name }) => {
  const { foto1, foto2, foto3 } = useStaticQuery(graphql`
    query {
      foto1: file(relativePath: { eq: "foto-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto2: file(relativePath: { eq: "foto-02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto3: file(relativePath: { eq: "foto-03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      {(() => {
        switch (name) {
          case "foto1":
            return <Img fluid={foto1.childImageSharp.fluid} alt="foto1" />
          case "foto2":
            return <Img fluid={foto2.childImageSharp.fluid} alt="foto2" />
          case "foto3":
            return <Img fluid={foto3.childImageSharp.fluid} alt="foto3" />
          default:
            return null
        }
      })()}
    </>
  )
}

export default Images
