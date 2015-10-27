window.SIZE = 10

class Entity {
    constructor() {}
    update() {}
    render() {}
}

class Thing extends Entity {
    constructor(protothing={}) {
        super("thing", protothing)
        this.position = protothing.position
    }
    render() {
        return {
            width: SIZE,
            height: SIZE,
            x: this.position.x,
            y: this.position.y,
            color: "red"
        }
    }
}

class Frame extends Entity {
    constructor(protoframe={}) {
        super("frame", protoframe)
        this.width = window.innerWidth
        this.height = window.innerHeight
        window.addEventListener("resize", () => {
            this.width = window.innerWidth
            this.height = window.innerHeight
        })
    }
}

var Renderer = require("./scripts/systems/Renderer")
Renderer.update({
    frame: new Frame(),
    things: {
        1: new Thing({
            position: {x: 0, y: 0}
        }),
        2: new Thing({
            position: {x: 15, y: 15}
        })
    }
})
