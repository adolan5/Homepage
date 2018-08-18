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
                <a href='https://www.colostate.edu/' target='_blank'>
                    <img src='/images/HeaderLogo.png' alt='CSU Logo'/>
                </a>
                <div className='headertext'>
                    <a href='http://cs.colostate.edu' target='_blank'>
                        <h1>Computer Science</h1>
                    </a>
                </div>
            </div>
        );
    }
}

module.exports = Header;
