'use strict';

const React = require('react');
const Component = React.Component;

// Import components
const Header = require('./components/header.js');
const Sidebar = require('./components/sidebar.js');

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
            <div>
                <Header />
                <Sidebar />
                <div className='logo'>
                    <img src='/images/CSULogo.png' />
                </div>
                <h1>Content</h1>
            </div>
        );
    }
}

module.exports = App;
