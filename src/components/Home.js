import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from './Title';

import 'styles/home.css';

class Home extends Component {
       
    render() {   
        
        return(
            <div className='content__vertical home'>
                <div className='home__wrapper'>
                    <div className='content__left home__left'></div>
                    <div className='content__right home__right'></div>
                </div>
                <Title className='home__title' />
            </div>  
        )
    }
    
}

const mapStateToProps = state => ({
    isNavOpen: state.isNavOpen,
    isGreet: state.isGreet
})

export default connect(mapStateToProps)(Home);