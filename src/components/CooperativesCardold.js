import React, { Component } from "react";
import _ from "lodash";
import "./CupProfilesCard.css";
import constants from "../constants";
import contentStrings from "../constants/localization";
import Blockies from "react-blockies";


class CooperativesCard extends Component {
  render() {
    console.log(this.props);
    var cooperatives = null;
    if (
      this.props.cooperatives == null ||
      this.props.cooperatives.length == 0
    ) {
      return "";
    } else {
      cooperatives = this.props.cooperatives;
    }

    return (
      <div className="card card-small user-teams mb-4">
        <div className="card-header border-bottom">
          <h6 className="m-0">{contentStrings.cooperative}s</h6>
        </div>
        <div className="card-body p-0">
          <div className="container-fluid">
            {_.map(cooperatives, function(cooperative, index) {
              return (
                <div className="row px-3" key={index}>
                  <div className="user-teams__image col-2 col-sm-1 col-lg-2 p-0 my-auto">
                    <a href={`/actors/${cooperative.address}`} target="_blank">
                      {cooperative.image_hash != "" ? (
                        <img
                          src={`${constants.IPFS_URL}/${
                            cooperative.image_hash
                          }`}
                          width="80"
                          className="user-avatar rounded mr-2"
                        />
                      ) : (
                        <Blockies
                          seed={cooperative.address}
                          size={8}
                          scale={10}
                          className="identicon user-avatar rounded mr-2"
                        />
                      )}
                    </a>
                  </div>
                  <div className="col user-teams__info pl-3">
                    <h6 className="m-0 title-link">
                      <a
                        href={`/actors/${cooperative.address}`}
                        target="_blank"
                      >
                        {cooperative.name}
                      </a>
                    </h6>
                    <span className="text-light">{cooperative.bio}</span>
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

export default CooperativesCard;
