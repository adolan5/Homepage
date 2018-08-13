'use strict';

const React = require('react');
const Component = React.Component;

// Import components
const Header = require('./components/header.js');

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
            </div>
        );
    }
}

module.exports = App;
