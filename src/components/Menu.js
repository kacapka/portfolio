import _ from 'underscore';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleNav, toggleTitle, setActiveMenuItem } from 'actions/actions';

import 'styles/menu.css';
import lang from '../utils/language';

class Menu extends Component {
    
    constructor(props) {
        super(props);
        
        this.onItemClick = this.onItemClick.bind(this);
    }
    
    onItemClick(key) {
        this.props.toggleNav();
        setTimeout(this.props.toggleTitle, 200);
        this.props.setActiveMenuItem(key);
    }
    
   
    render() {
        const { isNavOpen, language } = this.props;
        const menuClassName = isNavOpen ? 'menu--open' : '';
        
        const listData = {
            about: lang[language].about.nav,
            projects: lang[language].projects.nav,
            contact: lang[language].contact.nav
        };
        
        return(
            <div className={`menu ${menuClassName}`}>
                <ul className='menu__navbar'>
                    {_.map(listData, (val, key) => (
                        <li key={key}>
                            <Link to={`/${key}`} 
                                className={`menu__navbar-item menu__navbar-item--${key}`}
                                onClick={() => this.onItemClick(key)}
                            >
                                {val}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='menu__info'>
                    <div className='menu__city'>{lang[language].city}</div>
                    <div className='menu__phone'>+48 517 400 277</div>
                    <div className='menu__mail'>wojciech.urbansk@gmail.com</div>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
    isNavOpen: state.isNavOpen,
    isTitle: state.isTitle,
    language: state.language
})

export default connect(mapStateToProps, { toggleNav, toggleTitle, setActiveMenuItem })(Menu);