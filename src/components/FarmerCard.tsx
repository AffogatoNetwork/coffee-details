import React, { useState, CSSProperties } from "react";
import coffeeImage from "../assets/coffee.jpg";
import "./FarmerCard.scss";
import Blockies from "react-blockies";
import { IActor, IFarm, ICoffee } from "../types/CoffeeDetails";
type props = {
  data: {
    farmer: IActor;
    farm: IFarm;
    coffee: ICoffee;
  };
};

export default function CoffeeCard(props: props) {
  const { farmer, farm, coffee } = props.data;
  let [height, setHeight] = useState("closed");

  let openImage = () => {
    if (height === "closed") {
      setHeight("open");
    } else {
      setHeight("closed");
    }
  };

  return (
    <div className="card card-small user-details mb-4">
      <div className="card-header p-0" onClick={openImage}>
        <i className="fas fa-camera" onClick={openImage}></i>
        <div className={`user-details__bg ${height}`} onClick={openImage}>
          {farm.image_hash && farm.image_hash != "" ? (
            <img
              src={`${process.env.REACT_APP_IPFS_URL}/${farm.image_hash}`}
              alt="Coffee Details Background Image"
            />
          ) : (
            <img src={coffeeImage} alt="Coffee Details Background Image" />
          )}
        </div>
      </div>
      <div className="card-body p-0 ">
        <div className="user-details__avatar mx-auto" onClick={openImage}>
          {farmer.image_hash && farmer.image_hash != "" ? (
            <img
              src={`${process.env.REACT_APP_IPFS_URL}/${farmer.image_hash}`}
              width="80"
              className="user-avatar rounded-circle mr-2"
            />
          ) : farmer.address && farmer.address != "" ? (
            <Blockies
              seed={farmer.address}
              size={8}
              scale={10}
              className="identicon user-avatar rounded-circle mr-2"
            />
          ) : (
            <Blockies
              seed={farmer.name}
              size={8}
              scale={10}
              className="identicon user-avatar rounded-circle mr-2"
            />
          )}
        </div>
        <div className="user-details__user-data p-4 text-center">
          <div className="row mb-3">
            <div className="col w-50">
              <span>Farmer</span>
              <span>{farmer.name} </span>
            </div>
          </div>
          {farmer.bio != null && (
            <div className="row mb-3">
              <div className="col">
                <span>Short Bio</span>
                <span>{farmer.bio}</span>
              </div>
            </div>
          )}
          <div className="row mb-3">
            <div className="col">
              <span>Region</span>
              <span>
                {farmer.region}, {farmer.country}
              </span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <span>Contact Information</span>
              <span>{farmer.email}</span>
            </div>
          </div>
        </div>

        <div className="user-details__user-data border-top border-bottom p-4 text-center">
          <div className="row mb-3">
            <div className="col w-50">
              <span>Farm Name</span>
              <span>{farm.name}</span>
            </div>
            <div className="col w-50">
              <span>Region</span>
              <span>
                {farm.village}, {farm.region}
              </span>
            </div>
            <iframe
              className="mt-2 mx-auto px-4 embed-responsive"
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAkqEYG5LG4ZgOzTK6O7yY-K9manVHQrfk
&q=${farm.village}+${farm.region}&zoom=6`}
              allowFullScreen
            />
          </div>

          <div className="row mb-3">
            <div className="row ">
              <div className="col mx-4">
                <span>Story</span>
                <span>{farm.story}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
