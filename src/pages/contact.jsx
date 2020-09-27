import React from "react"
import Layout from "../components/Layout"
import { EmailContainer } from "../styles/pages/styleContact"

const Contact = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>Contact</h1>
          </div>
          <div className="col-6">
            <ul class="list-group">
              <li class="list-group-item">
                {/* <EmailContainer color="#9c69ac" width="35px" /> E-mail */}
                <EmailContainer primary /> E-mail
              </li>
              {/* <li class="list-group-item">
                <Phone className="w-25 text-purple" /> Telefone
              </li>
              <li class="list-group-item">
                <LocationOn className="w-25 text-purple" /> Localização
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
