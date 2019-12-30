import React from "react";
import { IActor, IFarm, ICoffee, IAction } from "../types/CoffeeDetails";
import _ from "lodash";
import "./ActionsCard.scss";
import drip from "../assets/drip.png";
import pour from "../assets/pour.png";

type props = {
  data: {
    farmer: IActor;
    farm: IFarm;
    coffee: ICoffee;
  };
};
export default function ActionsCard(props: props) {
  const { coffee, farm } = props.data;
  return (
    <div className="card card-small user-teams mb-4 action-card ">
      <div className="card-header border-bottom  px-4">
        <h5 className="m-0">Actions</h5>
      </div>
      <div className="container-fluid action-details px-4">
        {_.map(coffee.actions, function(action: IAction, index: number) {
          return (
            <>
              <div className={`row mb-4 px-3 no-border ${action.type}`} key={index}>
                <div className="user-teams__image col-2 col-sm-1 col-lg-2 p-0 my-auto">
                  <img
                    src={`${process.env.REACT_APP_IPFS_URL}/${action.actor?.image_hash}`}
                    width="56"
                    className=""
                  />
                </div>
                <div className="col user-teams__info pl-3">
                  <h6 className="m-0">{action.actor?.name}</h6>
                  <span className="text-light">
                    {action.type}: {action.description}
                  </span>
                </div>
                <div className="best">
                  <h6 className="m-0">Best For</h6>
                  <span>
                    <img src={pour} alt="pour over coffee" className="pour" />
                    <img src={drip} alt="drip machine" className="drip" />
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
