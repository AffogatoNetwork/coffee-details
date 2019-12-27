import React, { Component } from "react";
import _ from "lodash";
import "./CupProfilesCard.css";
import constants from "../constants";
import contentStrings from "../constants/localization";
import Blockies from "react-blockies";
import Loading from "./Loading";
import FirebaseDBService from "../services/firebaseService";

class CupProfilesCard extends Component {
  constructor(props) {
    super(props);
    this.db = new FirebaseDBService();

    this.state = {
        cupProfileCards: null,
        status: "initialized"
    }

    this.buildCupProfileCards = this.buildCupProfileCards.bind(this);
    this.getTasterData = this.getTasterData.bind(this);
  }

  async buildCupProfileCards(cupProfiles){
    const cupProfileCards = [];

    for (const [j, cupProfile] of cupProfiles.entries()) {
        const taster = await this.getTasterData(cupProfile.taster);

        if (taster != null){
            cupProfileCards.push(
                <div className="row px-3" key={j}>
                  <div className="user-teams__image col-2 col-sm-1 col-lg-2 p-0 my-auto">
                    <a
                      href={`/actors/${taster.address}`}
                      target="_blank"
                    >
                          {taster.image_hash != "" ? (
                            <img
                              src={`${constants.IPFS_URL}/${
                                taster.image_hash
                              }`}
                              width="80"
                              className="user-avatar rounded mr-2"
                            />
                          ) : (
                            <Blockies
                              seed={taster.address}
                              size={6}
                              scale={10}
                              className="identicon user-avatar rounded mr-2"
                            />
                          )}
                    </a>
                  </div>
                  <div className="col user-teams__info pl-3">
                    <h6 className="m-0 title-link">
                      <a
                        href={`/actors/${taster.address}`}
                        target="_blank"
                      >
                        {taster.name}
                      </a>
                    </h6>
                    <span className="text-light">
                      {cupProfile.profile}
                      {cupProfile.imageHash != "" && (
                        <div>
                          <a
                            target="_blank"
                            href={`${constants.IPFS_URL}/${
                              cupProfile.imageHash
                            }`}
                          >
                            {contentStrings.cupProfilePreview}
                          </a>
                        </div>
                      )}
                    </span>
                    <h6 className="ml-auto "> {cupProfile.cuppingNote / 100}/100</h6>
                  </div>
                </div>
            );
        }
    }

    this.setState({
        cupProfileCards: cupProfileCards,
        status: "completed"
    });

  }

  async getTasterData(taster){
    const tasterInfo = await this.db.getAccount(taster.id);

    if (tasterInfo.error) {
      console.error(`Error retrieving account: ${taster.id}`);
      return null;
    }

    return tasterInfo;
  }


  render() {
    var cupProfiles = null;
    var cupProfilesCard = [];
    if (this.props.cupProfiles == null || this.props.cupProfiles.length == 0) {
      return "";
    }
    else {
      this.buildCupProfileCards(this.props.cupProfiles);
    }

    if (this.state.status == 'initialized'){
        return <Loading />;
    }

    return (
      <div className="card card-small user-teams mb-4">
        <div className="card-header border-bottom">
          <h6 className="m-0">{contentStrings.cupProfiles}</h6>
        </div>
        <div className="card-body p-0">
          <div className="container-fluid">
            {_.map(this.state.cupProfileCards, function(cupProfile, index) {
                return cupProfile;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CupProfilesCard;
