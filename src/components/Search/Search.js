import React from "react";
import Gold from "../../assets/gold.png";

import "./SearchStyles.css";

function Search() {
  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p> come experince</p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={Gold} alt="/" style={{ marginRight: "1rem" }} />
              </div>
              <div>
                <h3>WORLD'S LEADING</h3>
                <p> ALL- INCLUSIVE COMPANY FOR 20 YEARS IN-A- ROW</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>NO ONE INCLUDES MORE</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                <button>View Packages </button>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="promo">
            <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
            <p className="timer">12 HOURS LEFT</p>
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
          </div>
          <form>
            <div className="input-wrap">
              <label>Destination</label>
              <select>
                <option value="1">Grande Antiqua</option>
                <option value="1">Granda</option>
                <option value="1">Emerald Bay</option>
                <option value="1">Bora Bora</option>
                <option value="1">Key West </option>
                <option value="1">Maldives</option>
                <option value="1">Barbados</option>
              </select>
            </div>

            <div className="date">
              <div className="input-wrap">
                <label>Check-in</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
              </div>
            </div>
            <button> Rates & Availabilities </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
