import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleTitle } from 'actions/actions';

import lang from '../utils/language';

class Title extends Component {
     
    render() {        
        const { className, smallTitle, isTitle, activeMenu, language } = this.props;
        const titleClassName = isTitle ? 'title--active' : ''; 
        const smallClassName = smallTitle ? 'title--small' : 'title';
            
        return(
            <h1 className={`${smallClassName} ${titleClassName} ${className}`}>
                <span className='title__letters title__letters--top'>{lang[language][activeMenu].title.top}</span>
                <span className='title__letters title__letters--bottom'>{lang[language][activeMenu].title.bottom}</span>
            </h1>
        )
    }
    
}

const mapStateToProps = state => ({
    isTitle: state.isTitle,
    language: state.language,
    activeMenu: state.activeMenu
})

export default connect(mapStateToProps, { toggleTitle })(Title);