import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: "",
      valueType: "",
      city: "",
      zipOne: "",
      zipTwo: ""
    };
  }

  onFormSubmit = event => {
    event.preventDefault();

    //Invoking callback with search term when form is submited
    console.log("Search Type on Searchbar --", this.state.valueType);
    if (this.state.valueType === "zipcode") {
      this.props.onEnter(this.state.zipcode, this.state.valueType);
    } else if (this.state.valueType === "city") {
      this.props.onEnter(this.state.city, this.state.valueType);
    } else if (this.state.valueType === "zipTwo") {
      this.props.onEnter(
        this.state.zipOne,
        this.state.valueType,
        this.state.zipTwo
      );
    }
  };

  handleChange = event => {
    //using bracket notation to fatch name of input tag.
    this.setState({
      [event.target.name]: event.target.value,
      valueType: event.target.name
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          {/* First Input */}
          <div className="card border-primary mb-3">
            <div className="card-header">
              <div className="card-body text-primary">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">
                      Search by ZIP code
                    </span>
                  </div>
                  <input
                    type="number"
                    className={`form-control`}
                    placeholder="Enter ZIP code"
                    name="zipcode"
                    value={this.state.zipcode}
                    onChange={this.handleChange}
                  />
                  <input
                    type="submit"
                    className="btn btn-secondary"
                    value="submit"
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-primary mb-3">
            <div className="card-header">
              <div className="card-body text-primary">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">
                      Search by City
                    </span>
                  </div>
                  <input
                    type="text"
                    className={`form-control`}
                    placeholder="Enter City name"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                  />
                  <input
                    type="submit"
                    className="btn btn-secondary"
                    value="submit"
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-primary mb-3">
            <div className="card-header">
              <div className="card-body text-primary">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">
                      Search Distance between Two Zip codes
                    </span>
                  </div>
                  <input
                    type="text"
                    className={`form-control`}
                    placeholder="Zip One"
                    name="zipOne"
                    value={this.state.zipOne}
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    className={`form-control`}
                    placeholder="Zip Two"
                    name="zipTwo"
                    value={this.state.ZipTwo}
                    onChange={this.handleChange}
                  />
                  <input
                    type="submit"
                    className="btn btn-secondary"
                    value="submit"
                  ></input>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="card border-primary mb-3">
            <div className="card-header">
              <div className="card-body text-primary">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">
                      Search by City
                    </span>
                  </div>
                  <input
                    type="text"
                    className={`form-control`}
                    placeholder="Enter City name"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                  />
                  <input
                    type="submit"
                    className="btn btn-secondary"
                    value="submit"
                  ></input>
                </div>
              </div>
            </div>
          </div> */}
        </form>
      </div>
    );
  }
}

export default SearchBar;
