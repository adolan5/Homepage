'use strict';

const React = require('react');
const Component = React.Component;

require('../style/components/contentcontainer.less');

/**
 * Container for some content.
 */
class ContentContainer extends Component {

    /**
     * Render function.
     * Note that the props we construct with includes a 'data' object,
     * which will contain "header" and "text" keys and associated values.
     */
    render() {
        return (
            <div className='contentcontainer'>
                <h1><i>{ this.props.data.header }</i></h1>
                <p>{ this.props.data.text }</p>
            </div>
        );
    }
}

module.exports = ContentContainer;
