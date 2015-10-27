var React = require("react")

class EntityView extends React.Component {
    render() {
        var rendering = this.props.data.render() || {}
        return (
            <div style={{
                position: "absolute",
                top: Math.round(rendering.y || 0) + "em",
                left: Math.round(rendering.x || 0) + "em",
                width: Math.round(rendering.width || 16) + "em",
                height: Math.round(rendering.height || 16) + "em",
                backgroundColor: rendering.color || "#FF69B4",
            }} className="entity-view"/>
        )
    }
}

export default EntityView
