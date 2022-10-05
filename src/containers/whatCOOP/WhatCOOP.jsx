import React from 'react';
import { Feature } from '../../components';
import './whatcoop.css';

const WhatCOOP = () => {
  return (
    <div className="coop__whatcoop section__margin" id="whatcoop">
      <div className="coop__whatcoop-feature">
        <Feature title="What is coop" text="loremloremloremloremloremloremlor
        emloremloremloremloremloremloremloremloremloremloremloremloremloremlor
        emloremloremloremloremloremloremloremloremloremloremloremloremloremlor
        emloremloremloremloremloremloremloremloremloremloremloremloremloremlore
        mloremloremloremloremloremloremloremloremloremloremloremloremloremloreml
        mloremloremloremloremloremloremloremloremloremloremlorem" />
      </div>
      <div className="coop__whatcoop-heading">
        <h1 className="gradient__text">Connect with IT soulmates!</h1>
        <p>Explore The Library</p>
      </div>
      <div className="coop__whatcoop-container">
        <Feature title="Chatbots" text="loremloremloremloremloremloremloremlorem
        loremloremloremloremlorem"/>
        <Feature title="Knowledgebase" text="loremloremloremloremloremloremloremloremlo
        remloremloremloremlorem"/>
        <Feature title="Education" text="loremloremloremloremloremloremloremlo
        remloremloremloremloremlorem"/>
      </div>
    </div>
  )
}

export default WhatCOOP

