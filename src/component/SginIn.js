import React from 'react';
import Label from './Label';

import "../styles/sginin.scss";

const SginIn = () => {
  return (
    <div className="field" id="sginin">
      <div className="control">
        <div className="forms">
          <h3 className="title form-name">로그인</h3>
          <div className="form">
            <Label value="name"/>
            <input className="input" type="text" placeholder="name"/>
            <Label value="pwd"/>
            <input className="input" type="password" placeholder="pwd"/>
            <div className="bottom">
              <button className="button is-size-5 has-background-warning">
                login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SginIn;