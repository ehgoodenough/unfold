var React = require("react")

class FrameView extends React.Component {
    render() {
        return (
            <div {...this.props}
                className="frame-view"
                style={this.style()}/>
        )
    }
    style() {
        return {
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            margin: "auto",
            position: "fixed",
            overflow: "hidden",
            width: (this.props.data.width || 640) + "px",
            height: (this.props.data.height || 480) + "px",
            fontSize: (this.props.data.pixel || 1) + "px",
            backgroundColor: this.props.data.color || "#EEE",
        }
    }
}

export default FrameView
