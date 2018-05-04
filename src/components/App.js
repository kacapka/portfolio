import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'

import Header from './Header';
import Menu from './Menu';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

import { toggleTitle, setActiveMenuItem  } from 'actions/actions';

import lang from '../utils/language';

import 'styles/app.css';
import 'styles/content.css';

class App extends Component {
    
    /*constructor(props) {
        super(props);
        
        this.handleScroll = this.handleScroll.bind(this);
    }*/
    
    componentDidMount() {
        const { toggleTitle, setActiveMenuItem, location: { pathname } } = this.props,
        path = pathname.slice(1);
        setTimeout(toggleTitle, 200);
        path && setActiveMenuItem(path);
        
//        window.addEventListener('scroll', this.handleScroll);
    }
    
    /*componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll() {
        
        console.log('hey');
    
    }*/
    

    render() {
        const { isNavOpen, language } = this.props,
        data = lang[language],
        contentClassName = isNavOpen ? 'content--open' : '';
        
        return (
            <Fragment>
                <Header />
                <Menu />
                <div className={`content ${contentClassName}`} ref={div => this.div = div} >
                    <Switch>
                        <Route path='/projects' render={(props) => ( <Projects data={data.projects}/> )} />
                        <Route path='/about' render={(props) => ( <About data={data.about}/> )} />
                        <Route path='/contact' render={(props) => ( <Contact data={data.contact} /> )} />
                        <Route path='/' render={(props) => ( <Home data={data.home} /> )} />
                    </Switch>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    isNavOpen: state.isNavOpen,
    language: state.language
})

export default withRouter(connect(mapStateToProps, { toggleTitle, setActiveMenuItem  })(App));