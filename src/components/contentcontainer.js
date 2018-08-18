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
                { this.getText() }
            </div>
        );
    }

    /**
     * Utility function to extract text snippets from data and render
     * them on their own lines.
     */
    getText() {
        // Take the array of text snippets and transform them into <p>'s
        return this.props.data.text.map((snippet, i) => {
            // Since we're returning an array of JSX elements, we should give them a key;
            // let's have that be i, the index of the snippet
            return <p key={ i }>{ snippet }</p>
        });
    }
}

module.exports = ContentContainer;
