import React, { Component } from 'react'
import './Home.css'
import Search from './Search';

export class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='home__body'>
          <img className="searchPage__logo"
            src="https://theme.zdassets.com/theme_assets/11496506/453206e3112f9714b34b167c5fd70fd13fd43ba7.png"
            alt=""
            />
            <div className="home__inputContainer">
               <Search /> 
            </div>
        </div>
      </div>
    )
  }
}

export default Home
