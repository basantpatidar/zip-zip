import React from 'react';
import styles from './ZipDetail.module.css';

class ZipDetail extends React.Component {
    
    render(){
        return(
            <div className={`${styles.sectionDetail}`}>
                <label>Zip-code : {this.props.zipApiResponse.zip}</label><br/>
                <label>County : {this.props.zipApiResponse.county}</label><br/>
                <label>City : {this.props.city}</label><br/>
                <label>State : {this.props.zipApiResponse.state}</label><br/>
                <label>Country : {this.props.zipApiResponse.country}</label>
            </div>
        );
    }
}

export default ZipDetail;