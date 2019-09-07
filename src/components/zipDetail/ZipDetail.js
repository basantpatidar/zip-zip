import React from "react";
import styles from "./ZipDetail.module.css";
import { Card, CardTitle, ListGroup, ListGroupItem } from "reactstrap";

class ZipDetail extends React.Component {
  renderText() {
    if (!this.props.zipApiResponse.zip) {
      return;
      // <div>Enter Zip code
      // {/* {console.log(this.props.zipApiResponse)} */}
      // </div>;
    }
    return (
      <div>
        <Card body outline color="primary">
          <CardTitle>ZIP code Details</CardTitle>
          <ListGroup className="list-group">
            <ListGroupItem className="list-group-item">
              Zip-code : {this.props.zipApiResponse.zip}
            </ListGroupItem>
            <ListGroupItem className="list-group-item">
              County : {this.props.zipApiResponse.county}
            </ListGroupItem>
            <ListGroupItem className="list-group-item">
              City : {this.props.city}
            </ListGroupItem>
            <ListGroupItem className="list-group-item">
              State : {this.props.zipApiResponse.state}
            </ListGroupItem>
            <ListGroupItem className="list-group-item">
              Country : {this.props.zipApiResponse.country}
            </ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    );
  }

  render() {
    return <div className={`${styles.sectionDetail}`}>{this.renderText()}</div>;
  }
}

export default ZipDetail;
