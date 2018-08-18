'use strict';

const React = require('react');
const Component = React.Component;

// Import components
const Header = require('./components/header.js');
const Sidebar = require('./components/sidebar.js');
const ContentContainer = require('./components/contentcontainer.js');

// Import data/content sources
const aboutMe = require('./data/aboutme.json');

// Import global style
require('./style/app.less');

/**
 * Main homepage application container.
 */
class App extends Component {
    /**
     * Main container render function.
     */
    render() {
        return (
            <div className='app'>
                <Header />
                <div className='main'>
                    <div className='contentwrapper'>
                        <div className='logo'>
                            <img src='/images/CSULogo.png' />
                        </div>
                        <img id='headshot' src='/images/headshot.jpg' />
                        <h1>Andy Dolan</h1>
                        <h2>Graduate Student at CSU</h2>
                        <ContentContainer data={ aboutMe } />
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = App;
