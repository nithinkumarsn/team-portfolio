import React, { Component } from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';

class Home extends Component {
    render() {
        return (
            <div>
              <Navbar/>
              <Banner/>
            </div>
        );
    }
}

export default Home;