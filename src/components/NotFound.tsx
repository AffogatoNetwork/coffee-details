import React, { Component } from "react";
import empty from "../assets/coffee-glass-empty.png";
import "./Loading.scss";

type props = {
  message: string;
};

const NotFound = (props: props) => (
  <div className="loading-wrapper">
    <img src={empty} alt="Empty..." className="shaking-icon" />
    <h4 className="mt-2">{props.message}</h4>
  </div>
);

export default NotFound;
