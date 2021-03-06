'use strict';

const React = require('react');
const Component = React.Component;

require('../style/components/sidebar.less');

/**
 * Sidebar component.
 */
class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <img src='/images/headshot.jpg' alt='Andy Dolan' />
                <h1>Andy Dolan</h1>
                <h2>Graduate Student at CSU</h2>
            </div>
        );
    }
}

module.exports = Sidebar;
