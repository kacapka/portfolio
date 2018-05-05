import _ from 'underscore';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from './Title';
import 'styles/contact.css';

const social = {
    github: 'https://github.com/kacapka',
    linkedIn: 'https://www.linkedin.com/in/wojciech-urba%C5%84ski-086127100/',
    facebook: 'https://www.facebook.com/profile.php?id=100008594897039',
    instagram: 'https://www.instagram.com/_kacapka/',
}

class Contact extends Component {
    
    render() {
        const { isTitle, data } = this.props,
        boxClassName = isTitle ? 'contact__box--hidden' : '';
        
        return(
            <div className='content__horizontal contact'>
                <div className='content__top contact__top'></div>
                <div className='content__bottom contact__bottom'>
                    <div className={`contact__box ${boxClassName}`}>
                        <div className='contact__text'>{data.textMail}</div>
                        <div className='contact__details'>wojciech.urbansk@gmail.com</div>
                        <div className='contact__text'>{data.textPhone}</div>
                        <div className='contact__details'>+48 517 400 277</div>
                    </div>
                    <div className={`contact__box ${boxClassName}`}>
                        <div className='contact__text'>{data.textSocial}</div>
                        <ul className='contact__social'>
                            {_.map(social, (value, key) => (
                                <li key={key}>
                                    <a href={value} target='_blank'>{key}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Title className='contact__title'
                    smallTitle 
                />
            </div> 
        )
    }
    
}

const mapStateToProps = state => ({
    isTitle: state.isTitle
})

export default connect(mapStateToProps)(Contact);