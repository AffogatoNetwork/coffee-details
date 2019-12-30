import React from "react";
import { IActor, IFarm, ICoffee } from "../types/CoffeeDetails";
import "./CoffeeCard.scss";

type props = {
  data: {
    farmer: IActor;
    farm: IFarm;
    coffee: ICoffee;
  };
};

export default function CoffeeCard(props: props) {
  const { coffee, farm } = props.data;
  return (
    <div className="card card-small user-teams coffee-card mb-4">
      <div className="card-header border-bottom background">
        <h5 className="m-0">
          {farm.country} {coffee.variety}
        </h5>
      </div>
      <div className="card-body p-0">
        <div className="container-fluid coffee-details">
          <div className="row px-3 no-border">
            {coffee.cupProfile ? (
              <div className="col user-teams__info ">
                <h6 className="m-0">Score</h6>
                <span className="text-light">{coffee.cupProfile[0].score}/100</span>
              </div>
            ) : (
              <></>
            )}
            <div className="col user-teams__info ">
              <h6 className="m-0">Process</h6>
              <span className="text-light">{coffee.process}</span>
            </div>
            <div className="col user-teams__info ">
              <h6 className="m-0">Batch Size</h6>
              <span className="text-light">{coffee.size} Lbs</span>
            </div>
            <div className="col user-teams__info ">
              <h6 className="m-0">Altitude</h6>
              <span className="text-light">{coffee.altitude} MAMSL</span>
            </div>
          </div>
          {coffee.cupProfile ? (
            <>
              <div className="row px-3 no-border">
                <div className="col user-teams__info ">
                  <h6 className="m-0">Notes</h6>
                  <span className="text-light">{coffee.cupProfile[0].notes}</span>
                </div>
                <div className="col user-teams__info ">
                  <h6 className="m-0">Aroma</h6>
                  <span className="text-light">{coffee.cupProfile[0].aroma}</span>
                </div>
                <div className="col user-teams__info ">
                  <h6 className="m-0">Body</h6>
                  <span className="text-light">{coffee.cupProfile[0].body}</span>
                </div>
                <div className="col user-teams__info ">
                  <h6 className="m-0">Acidity</h6>
                  <span className="text-light">{coffee.cupProfile[0].acidity}</span>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
