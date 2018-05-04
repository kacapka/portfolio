import _ from 'underscore';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import Title from './Title';
import 'styles/projects.css';

const projects = {
    cf: {
        name: 'Crossfit Genius',
        tools: ['Html', 'CSS', 'JavaScript'],
        link: 'https://kacapka.github.io/genius/',
        source: 'https://github.com/kacapka/genius'
    },
    bj: {
        name: 'bazajedzenia.pl',
        tools: ['React', 'Redux', 'Google Maps', 'Firebase'],
        link: '',
        source: ''
    },
    wt: {
        name: 'Wasyl Team',
        tools: ['React', 'Redux', 'Rest API'],
        link: '',
        source: ''
    },
    portfolio: {
        name: 'Portfolio',
        tools: ['React', 'Redux'],
        link: '',
        source: ''
    }
}

class Projects extends Component {
    
    constructor(props) {
        super(props);
        
        this.handleScroll = this.handleScroll.bind(this);
        this.renderProjects = this.renderProjects.bind(this);
    }
    
    componentDidMount() {    
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll() {
        
        if(window.scrollY > 150) {
            this.div.classList.add('projects__mobile--hide');
        } else {
            this.div.classList.remove('projects__mobile--hide');
        }
    
    }
    
    renderProjects() {
        const { isTitle, data } = this.props,
        boxClassName = !isTitle ? 'projects__box--hidden' : '';
        
        return  (
            <div className={`projects__info projects__box ${boxClassName}`} ref={div => this.info = div}>    
                {_.map(projects, (value, key) => (
                    <div className='projects__details' key={key}>
                        <div className='projects__name'>
                            <span>{value.name}</span>
                            <a href={value.link} target='_blank' >live</a>
                            <a href={value.source} target='_blank'>source</a>
                        </div>
                        <div className='projects__tools'>
                            {value.tools.map(item => (<span key={item}>{item}</span>))}
                        </div>
                        <div className='projects__description'>
                            {data.description[key]}
                        </div>
                    </div>
                ))}
            </div>
        )
        
    }
        
    render() {      
        const { isTitle } = this.props,
        boxClassName = !isTitle ? 'projects__box--hidden' : '';
        
        return(
            <div className='content__vertical projects' ref={div => this.div = div}>
                <div className='projects__wrapper'>
                    <div className='content__left projects__left'>
                    </div>
                    <div className='content__right projects__right'>
                        <MediaQuery minDeviceWidth={768}>
                            {this.renderProjects()}
                        </MediaQuery>
                    </div>
                    <ul className={`projects__list projects__box ${boxClassName}`}>
                        {_.map(projects, (value, key) => (
                            <li key={key}>
                                <span>{value.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <MediaQuery maxDeviceWidth={768}>
                    {this.renderProjects()}
                </MediaQuery>
                <Title className='projects__title'
                    smallTitle
                />
            </div>  
        )
    }
    
}

const mapStateToProps = state => ({
    isTitle: state.isTitle
})

export default connect(mapStateToProps)(Projects);