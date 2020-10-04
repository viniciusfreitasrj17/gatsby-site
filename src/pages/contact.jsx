import React from "react"
import Layout from "../components/Layout"
import {
  EmailContainer,
  PhoneContainer,
  LocationOnContainer,
} from "../styles/pages/styleContact"
import SEO from "../components/seo"

const Contact = () => {
  const text = "Lorem ipsum dolor sit amet consectetur"

  return (
    <Layout>
      <SEO title="Contact" lang="pt-BR" />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4 mb-3">
            <h1>Contact</h1>
            <p>{text}</p>
          </div>
          <div className="col-md-6">
            <form name="contact" method="post" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="exampleInputName"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail"
                  placeholder="E-mail"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                Send
              </button>
            </form>
          </div>
          <div className="col-md-6 col-12">
            <ul className="list-group">
              <li className="list-group-item">
                {/* <EmailContainer color="#9c69ac" width="35px" /> E-mail */}
                <EmailContainer primary /> email@email.com
              </li>
              <li className="list-group-item">
                <PhoneContainer primary /> (00) 9999-9999
              </li>
              <li className="list-group-item">
                <LocationOnContainer primary /> Street Y, N City
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
