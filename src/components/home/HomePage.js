import React from 'react';
import { Link } from 'react-router';
import { ReactDOM } from 'react-dom';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import Instagram from 'node-instagram';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  componentWillMount(){
  //   let temp = JSON.parse(localStorage.getItem('insta-images'));
  //   let clintID ='740ef2d297c845af8e4ca7738416e9b9';
  //   let clientS ='f1a47b53cf014307a3a2883768544479';
  //   let token = '1362124742.3ad74ca.6df307b8ac184c2d830f6bd7c2ac5644';
  //   axios({
  //     adapter: jsonpAdapter,
  //     method: 'get',
  //     dataType: 'jsonp',
  //     url: 'https://api.instagram.com/v1/users/self/media/recent',
  //     data: { access_token: token, client_id: clintID}
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // }
  // handleChange(event) {
  //   this.setState({ value: event.target.value });
    const instagram = new Instagram({
      clientId: '740ef2d297c845af8e4ca7738416e9b9',
      clientSecret: '537ba700395e4b5db33a1a42dc9a91f6',
      accessToken: '2076412487.1677ed0.3253d9576dae408b9f68be1389e85b6f'
    });
    instagram.get('https://api.instagram.com/v1/users/self/media/recent', (err, data) => {
      if (err) {
        debugger;
        // an error occured
        console.log(err);
      } else {
        debugger;
        console.log(data);
      }
    });
  }


  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);

    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search By Hash Tage:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

// ReactDOM.render(
//   <HomePage />,
//   document.getElementById('App')
// );
export default HomePage;