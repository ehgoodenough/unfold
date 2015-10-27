var React = require("react")

var FrameView = require("./FrameView")
var EntityView = require("./EntityView")

var PrimaryView = React.createClass({
    render: function() {
        if(!this.state) {
            return (
                <div/>
            )
        } else {
            return (
                <FrameView data={this.state.frame}>
                    <EntityView data={this.state.things[1]}/>
                    <EntityView data={this.state.things[2]}/>
                </FrameView>
            )
        }
    }
})

module.exports = PrimaryView
