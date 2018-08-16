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
            </div>
        );
    }

    doThing() {
        console.log('Did thing');
        console.log(document.getElementById('logo').classList[0].toggle('collapsed'));
    }
}

module.exports = Sidebar;
