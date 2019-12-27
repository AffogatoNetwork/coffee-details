import React, { Component } from "react";
import _ from "lodash";
import constants from "../constants";
import contentStrings from "../constants/localization";

//TODO: Get info from server
class CertificatesCard extends Component {
  render() {
    var certificates = null;
    if (
      this.props.certificates == null ||
      this.props.certificates.length == 0
    ) {
      return "";
    } else {
      certificates = this.props.certificates;
    }
    return (
      <div className="card card-small user-teams mb-4">
        <div className="card-header border-bottom">
          <h6 className="m-0">{contentStrings.certificates}</h6>
        </div>
        <div className="card-body p-0">
          <div className="container-fluid">
            {_.map(certificates, function(certificate, index) {
              return (
                <div className="row px-3" key={index}>
                  <div className="user-teams__image col-2 col-sm-1 col-lg-2 p-0 my-auto">
                    <img
                      src={`${constants.IPFS_URL}/${certificate.image_hash}`}
                      width="56"
                      className=" rounded-circle"
                    />
                  </div>
                  <div className="col user-teams__info pl-3">
                    <h6 className="m-0">{certificate.name}</h6>
                    <span className="text-light">
                      {certificate.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CertificatesCard;
