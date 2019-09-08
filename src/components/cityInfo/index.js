import React from "react";
import { Card, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
// import styles from "./ZipDetail.module.css";

class CityInfo extends React.Component {
  renderText() {
    let response = this.props.cityZpiResponse;
    if (!response) {
      // console.log("CityInfo First return", response, " --this.props.cityInfo");

      return;
    }
    let counter = 0;
    return response.map(city => {
      return (
        <div>
          <Card body outline color="primary">
            <CardTitle>Result {(counter += 1)}</CardTitle>
            <ListGroup className="list-group">
              <ListGroupItem className="list-group-item">
                Zip-code : {city.zip}
              </ListGroupItem>
              <ListGroupItem className="list-group-item">
                City : {city.city}
              </ListGroupItem>
              <ListGroupItem className="list-group-item">
                State : {city.state}
              </ListGroupItem>
            </ListGroup>
          </Card>
          <br></br>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderText()}</div>;
  }
}

export default CityInfo;
