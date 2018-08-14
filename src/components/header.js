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
            <div className='headerbar'>
                <img src='/images/HeaderLogo.png' />
                <div className='headertext'>
                    <h1> Andy Dolan</h1>
                </div>
            </div>
        );
    }
}

module.exports = Header;
