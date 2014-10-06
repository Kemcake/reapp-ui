var React = require('react');
var ReactStyle = require('react-style');
var { AutoLayout, Box } = require('react-gss');

var View = React.createClass({
  styles: ReactStyle({
    background: '#efeff4'
  }),

  render() {
    return (
      <AutoLayout
        top="window.top"
        bottom="window.bottom"
        left="window.left"
        right="window.right">

        <Box name="view">
          {this.transferPropsTo(
            <div className="pane" styles={this.styles}>
              {this.props.children}
            </div>
          )}
        </Box>

      </AutoLayout>
    );
  }
});

module.exports = View;