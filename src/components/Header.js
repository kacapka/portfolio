import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import isTouchDevice from '../utils/detectTouchDevice';

import { toggleNav, toggleTitle, setLanguage } from 'actions/actions';

import 'styles/header.css';

class Header extends Component {
    
    constructor(props) {
        super(props);
        
        this.navHoverOn = this.navHoverOn.bind(this);
        this.navHoverOut = this.navHoverOut.bind(this);
        this.onNavClick = this.onNavClick.bind(this);
        this.onLanguageClick = this.onLanguageClick.bind(this);
    }
    
    navHoverOn() {
        if(!isTouchDevice() && !this.props.isNavOpen) {
            document.body.classList.add('nav-hover');
        } 
    }
    
    navHoverOut() {
        document.body.classList.remove('nav-hover');
    }
    
    onNavClick() {
        this.props.toggleNav();
        this.props.toggleTitle();
    }
    
    onLanguageClick(lang) {
        this.props.setLanguage(lang);    
    }
    
    render() {
        const { isNavOpen, language } = this.props,
        logoClassName = isNavOpen ? 'header__logo--open': '',
        languageClassName = isNavOpen ? 'header__language--open' : '',
        navClassName = isNavOpen ? 'header__nav-icon--open' : '',
        plClassName = language === 'pl' ? 'active' : '',
        enClassName = language === 'en' ? 'active' : '';
        
        return(
            <Fragment>
                <div className={`header__logo ${logoClassName}`}>
                    <a href='/' onClick={this.onLogoClick}>
                        kacapka
                    </a>
                </div>
                <div className={`header__nav-icon ${navClassName}`}
                    onMouseEnter={this.navHoverOn}
                    onMouseLeave={this.navHoverOut}
                    onClick={this.onNavClick}
                >
                    <div>
                        <span className='header__icon-line'></span>
                        <span className='header__icon-line'></span>
                        <span className='header__icon-line'></span>
                    </div>
                </div>
                <div className={`header__language ${languageClassName}`}>
                    <span className={plClassName}
                        onClick={() => this.onLanguageClick('pl')}
                    > 
                        PL. 
                    </span>
                    <span className={enClassName}
                        onClick={() => this.onLanguageClick('en')}
                    > 
                        EN. 
                    </span>
                </div>
            </Fragment>
        )
    }
    
}

const mapStateToProps = state => ({
    isNavOpen: state.isNavOpen,
    language: state.language
})

export default connect(mapStateToProps, { toggleNav, toggleTitle, setLanguage })(Header);