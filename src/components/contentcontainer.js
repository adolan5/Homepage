'use strict';

const React = require('react');
const Component = React.Component;

require('../style/components/contentcontainer.less');

/**
 * Container for some content.
 */
class ContentContainer extends Component {
    render() {
        return (
            <div className='contentcontainer'>
                <h1><i>About Me</i></h1>
                <p>Information about me goes here.</p>
            </div>
        );
    }
}

module.exports = ContentContainer;
