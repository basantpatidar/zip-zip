import React from "react";
import { Card, CardTitle, ListGroup, ListGroupItem } from "reactstrap";

class DistanceInfo extends React.Component {
  renderText() {
    if (!this.props.distanceZipResponse) {
      // console.log(
      //   "CityInfo First return",
      //   this.props.distanceZipResponse,
      //   " --this.props.cityInfo"
      // );

      return;
    }
    return (
      <div>
        <div className="card border-primary mb-3">
          <div className="card-header">
            <div className="card-body text-primary">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <label>
                    First ZIP code {this.props.distanceZipResponse.zip1}
                  </label>
                </li>
                <li className="list-group-item">
                  <label>
                    Second ZIP code {this.props.distanceZipResponse.zip2}
                  </label>
                </li>
                <li className="list-group-item">
                  <label>
                    Distance {this.props.distanceZipResponse.distance}
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.renderText()}</div>;
  }
}
export default DistanceInfo;
