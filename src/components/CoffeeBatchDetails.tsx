import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loading from "./Loading";
import useAxios from "axios-hooks";
import NotFound from "./NotFound";
import FarmerCard from "./FarmerCard";
import CoffeeCard from "./CoffeeCard";
import "./CoffeeBatchDetail.scss";
import ActionsCard from "./ActionsCard";

function CoffeeBatchDetails() {
  let { ipfsHash } = useParams();
  const [{ data, loading, error }, refetch] = useAxios(
    `${process.env.REACT_APP_IPFS_URL}/${ipfsHash}`
  );

  if (loading) {
    return <Loading></Loading>;
  } else {
    if (error) {
      return <NotFound message="Couldn't find a Coffee Batch with provided Id"></NotFound>;
    }
  }

  return (
    <>
      <div className="row">
        <main className="coffee-batch-detail main-content col-lg-10 col-md-9 col-sm-12 p-0 ">
          <div className="main-content-container container-fluid px-4">
            <div className="page-header row no-gutters py-4">
              <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                <span className="text-uppercase page-subtitle">Details</span>
                <h3 className="page-title">Coffee Batch</h3>
              </div>
            </div>
            <div className="row mt-0">
              <div className="col-sm-12 col-lg-4">
                <FarmerCard data={data} />
              </div>
              <div className="col-lg-8">
                <CoffeeCard data={data} />
                <ActionsCard data={data} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="row main-footer d-flex p-2 px-3 bg-white border-top">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" rel="nofollow" target="_blank" href="https://affogato.co/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              rel="nofollow"
              target="_blank"
              href="https://medium.com/affogato-network"
            >
              Blog
            </a>
          </li>
        </ul>
        <span className="copyright ml-auto my-auto mr-2">
          Copyright © 2019
          <a href="https://affogato.co/" target="_blank" rel="nofollow" className="ml-2">
            Affogato
          </a>
        </span>
      </footer>
    </>
  );
}

export default CoffeeBatchDetails;
