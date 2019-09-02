import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zipcode: "", valueType: "", city: "" };
  }

  onFormSubmit = event => {
    event.preventDefault();

    //Invoking callback with search term when form is submited
    // let searchBarState = this.state;
    this.props.onEnter(this.state.zipcode, this.state.valueType);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
          {/*
                <div className="card border-primary mb-3">
                <div className="card-header">
                <div className="card-body text-primary">
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">First Zip Code</span>
                </div>
                <input type="number" className={`form-control`} placeholder= "Enter Zip-code" onChange={e => this.setState({term: e.target.value}) }/>
                </div>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Second Zip Code</span>
                </div>
                <input type="number" className={`form-control`} placeholder= "Enter Zip-code" onChange={e => this.setState({term: e.target.value}) }/>
                </div>
                </div>
                </div>
                </div>
                <div className="card border-primary mb-3">
                <div className="card-header">
                <div className="card-body text-primary">
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Search by ZIP code</span>
                </div>
                <input type="number" className={`form-control`} placeholder= "Enter Zip-code" onChange={e => this.setState({term: e.target.value}) }/>
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
