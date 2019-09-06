import React from "react";
// import styles from "./ZipDetail.module.css";

class CityInfo extends React.Component {
  renderText() {
    let response = this.props.cityZpiResponse;
    if (!response) {
      // console.log("CityInfo First return", response, " --this.props.cityInfo");

      return;
    }
    return response.map(city => {
      return (
        <div>
          <div className="card border-primary mb-3">
            <div className="card-header">
              <div className="card-body text-primary">
                <label>Zip-code : {city.zip}</label>
                <br />
                <label>City : {city.city}</label>
                <br />
                <label>State : {city.state}</label>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderText()}</div>;
  }
}

export default CityInfo;
