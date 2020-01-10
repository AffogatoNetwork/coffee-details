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
  const { coffee } = props.data;
  return (
    <div className="card card-small user-teams mb-4 action-card ">
      <div className="card-header border-bottom  px-4">
        <h5 className="m-0">Actions</h5>
      </div>
      <div className="container-fluid action-details px-4">
        {_.map(coffee.actions, function(action: IAction, index: number) {
          return (
            <React.Fragment key={index}>
              <div className={`row mb-4 px-3 no-border ${action.type}`}>
                <div className="user-teams__image col-2 col-sm-1 col-lg-2 p-0 my-auto">
                  <a href={action.actor?.url} target="_blank">
                    {" "}
                    <img
                      src={`${process.env.REACT_APP_IPFS_URL}/${action.actor?.image_hash}`}
                      width="56"
                      className=""
                    />
                  </a>
                </div>
                <div className="col user-teams__info pl-3">
                  <h6 className="m-0">{action.actor?.name}</h6>
                  <span className="text-light">
                    {action.type}: {action.description}
                  </span>
                </div>
                {action.type === "Roasted" ? (
                  <div className="best">
                    <h6 className="m-0">Best For</h6>
                    <span>
                      {_.map(action.additionalInformation.best, function(
                        best: string,
                        index: number
                      ) {
                        let image = drip;
                        switch (best) {
                          case "drip":
                            image = drip;
                            break;
                          case "pour":
                            image = pour;
                            break;
                          default:
                            image = drip;
                            break;
                        }
                        return (
                          <img src={image} alt={`${best} coffee`} className={best} key={index} />
                        );
                      })}
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
