import React from "react"
import Layout from "../components/Layout"
import Cardv2 from "../components/Cardv2"

const About = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>About</h1>

            <div className="container">
              <div className="row">
                <div className="col-4">
                  <Cardv2
                    nameImage="foto1"
                    titleCard="Card 1"
                    textCard="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    colorButton="success"
                    backgroundCard="#e3f"
                    styleDefault={false}
                  />
                </div>
                <div className="col-4">
                  <Cardv2
                    nameImage="foto2"
                    titleCard="Card 2"
                    textCard="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    colorButton="warning"
                    backgroundCard="#e04"
                    styleDefault={false}
                  />
                </div>
                <div className="col-4">
                  <Cardv2
                    nameImage="foto3"
                    titleCard="Card 3"
                    textCard="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    colorButton="danger"
                    backgroundCard="#1e7"
                    styleDefault={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
