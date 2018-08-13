'use strict';

const React = require('react');
const Component = React.Component;

require('../style/components/header.less');

/**
 * Header component.
 * Spans the top of the page, is NOT sticky.
 */
class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>CSU</h1>
            </div>
        );
    }
}

module.exports = Header;
