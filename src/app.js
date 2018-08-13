'use strict';

const React = require('react');
const Component = React.Component;

// Import global style
require('./style/app.less');

/**
 * Main homepage application container.
 */
class App extends Component {
    // Main container render function
    render() {
        return (
            <div>
                <h1>Main Container</h1>
            </div>
        );
    }
}

module.exports = App;
