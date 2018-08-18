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
                <h1>About Me</h1>
            </div>
        );
    }
}

module.exports = ContentContainer;
