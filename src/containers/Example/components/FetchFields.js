import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./CardList.css";
class FetchFields extends Component {
state = {
  posts: [],
  isLoading: true,
  errors: null
};

// Now we're going to make a request for data using axios
getPosts() {
  axios
  //   // This is where the data is hosted
    .get("https://b6skvn9l7h.execute-api.ap-south-1.amazonaws.com/Dev/getinstrumentscards")
  //   // Once we get a response and store data, let's change the loading state
    .then(response => {
      console.log({response})
      this.setState({
        posts: response.data,
        isLoading: false
      });
    })
  //   // If we catch any errors connecting, let's update accordingly
    .catch(error => this.setState({ error, isLoading: false }));
}
// Let's our app know we're ready to render the data
componentDidMount() {
  this.getPosts();
}

// Putting that data to use
render() {
  const { isLoading, posts } = this.state;
  return (
    <div className = "Item">
      <div>
        {!isLoading  ? (
          posts.map((post,index) => {
            const { ISIN, Issuer_Name,Redemption_Date , Coupon_Rate_Actual} = post;            
            return (
              <Link to={"/pages/four/"+ ISIN }>
              <div className= "Item_Card" key={index.toString()+ISIN.toString()}>
                <div className = "checkbox">
                  <span className="Item_Label mb-7">Compare</span>
                  <input type = "checkbox" checked='checked' value = "true"></input></div>
                <p className='Item'><span className="Item_Label" >ISIN</span><span className="Item_Value">{ISIN}</span></p>
                <p className='Item'> <span className="Item_Label" >Issuer Name</span> <span className="Item_Value">{Issuer_Name}</span></p>
                <p className='Item'><span className="Item_Label" >Redemption Date</span> <span className="Item_Value">{Redemption_Date }</span></p>
                <p className='Item'><span className="Item_Label" >Coupon Rate Actual</span> <span className="Item_Value">{Coupon_Rate_Actual }</span></p>                
                <hr />
              </div>
              </Link>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )};
}

  export default FetchFields