import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from './Title';
import Me from '../img/wojtek.png';

import 'styles/about.css';

class About extends Component {
    
    constructor(props) {
        super(props);
        
        this.handleScroll = this.handleScroll.bind(this);
    }
    
    componentDidMount() {    
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll() {
        
        if(window.scrollY > 30) {
            this.greet.classList.add('greet__animate--on');   
        } else {
            this.greet.classList.remove('greet__animate--on');
        }
            
    }
    
    render() {  
        const { isTitle, data } = this.props,
        boxClassName = !isTitle ? 'about__box--hidden' : '';
        
        return(
            <div className='content__horizontal about'>
                <div className='content__top about__top'>
                    <div className={`about__box about__greet greet__animate ${boxClassName}`}
                        ref={greet => this.greet = greet}
                    >
                        <h2>{data.greeting.name}</h2>
                        {data.greeting.description}
                    </div>
                    <div className={`about__box about__photo-wrapper ${boxClassName}`}>
                        <img src={Me} alt='me' className='about__photo'/>
                        <div className='about__gradient'></div>
                    </div>    
                </div>
                <div className='content__bottom about__bottom'>
                    <div className={`about__box about__description ${boxClassName}`}>
                        {data.description}
                    </div>
                    <div className={`about__box about__more ${boxClassName}`}>
                        {data.more}
                        {data.contact}
                    </div>
                </div>
                <Title className='about__title'
                    smallTitle
                />
            </div> 
        )
    }
    
}

const mapStateToProps = state => ({
    isTitle: state.isTitle
});

export default connect(mapStateToProps)(About);