import React from "react";

class SearchBar extends React.Component {
    state = {term : ''};
    
    onFormSubmit = event => {
        event.preventDefault();
        if(this.state.term === ""){
            return;
        }
        
        //Invoking callback with search term when form is submited
        this.props.onEnter(this.state.term);

        
    };
    
    render(){
        return(
            <div className="container">
            <form onSubmit = {this.onFormSubmit}>
                <label>Search Radius</label>
                <input type="number" placeholder= "Enter Zip-code" onChange={e => this.setState({term: e.target.value}) }/>
                <button>Submit</button>
            </form>
            </div>
        );
    }

}

export default SearchBar;