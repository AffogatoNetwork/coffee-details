import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import Loading from "./Loading";
import NotFound from "./NotFound";
import constants from "../constants";
import contentStrings from "../constants/localization";

import "./CoffeeBatchDetail.css";
import CoffeeCard from "./CoffeeCard";
import CertificatesCard from "./CertificatesCard";
import CupProfilesCard from "./CupProfilesCard";
import CooperativesCard from "./CooperativesCard";

import { useQuery } from "@apollo/react-hooks";
import { coffeeBatchAllByID } from "./queries/CoffeeBatch";

function LoadCoffeeBatch({ coffeeBatchId }) {
  const { loading, error, data } = useQuery(coffeeBatchAllByID, {
    variables: { coffeeBatchId: coffeeBatchId }
  });

  if (loading) return <Loading />;
  if (error) return <h2>ERROR</h2>;

  return (
    <div className="row mt-0">
      <div className="col-sm-12 col-lg-4">
        <CoffeeCard
          coffeeBatch={data.coffeeBatch}
          farm={data.coffeeBatch.farm}
          cupProfiles={data.coffeeBatch.cupProfiles}
          farmer={data.coffeeBatch.farm.owner}
        />
      </div>
      <div className="col-lg-8">
        <CupProfilesCard cupProfiles={data.coffeeBatch.cupProfiles} />
        <CertificatesCard certificates={data.coffeeBatch.certificates} />
      </div>
    </div>
  );
}

class CoffeeBatchDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coffeeBatch: null,
      farmer: null,
      farm: null,
      cupProfiles: null,
      certificates: null,
      cooperatives: null,
      status: "initialized"
    };
  }

  async componentDidMount() {
    this.setState({
      status: "complete"
    });
  }

  render() {
    /*if (this.state.coffeeBatch == null && this.state.status == "complete") {
      return <NotFound message={contentStrings.coffeeBatch404} />;
    }*/
    if (this.state.status == "initialized") {
      return <Loading />;
    }

    return (
      <>
        <div className="row">
          <main className="coffee-batch-detail main-content col-lg-10 col-md-9 col-sm-12 p-0 ">
            <div className="main-content-container container-fluid px-4">
              <div className="page-header row no-gutters py-4">
                <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                  <span className="text-uppercase page-subtitle">{contentStrings.details}</span>
                  <h3 className="page-title">{contentStrings.coffeeBatch}</h3>
                </div>
              </div>

              <LoadCoffeeBatch coffeeBatchId={this.props.match.params.id} />
            </div>
          </main>
        </div>
        <footer className="row main-footer d-flex p-2 px-3 bg-white border-top">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" rel="nofollow" target="_blank" href="https://affogato.co/">
                {contentStrings.home}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                rel="nofollow"
                target="_blank"
                href="http://buidlhonduras.com/tag/coffee/"
              >
                {contentStrings.blog}
              </a>
            </li>
          </ul>
          <span className="copyright ml-auto my-auto mr-2">
            Copyright © 2019
            <a href="https://affogato.co/" target="_blank" rel="nofollow" className="ml-2">
              {contentStrings.companyName}
            </a>
          </span>
        </footer>
      </>
    );
  }
}

export default withRouter(CoffeeBatchDetails);
