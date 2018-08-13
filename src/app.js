'use strict';

const React = require('react');
const Component = React.Component;

// Import style
require('./style/app.less');

/**
 * Main homepage application container.
 */
class App extends Component {
    // Main container render function
    render() {
        return (
            <div className='main'>
                <h1>Main Container</h1>
            </div>
        );
    }
}

module.exports = App;
