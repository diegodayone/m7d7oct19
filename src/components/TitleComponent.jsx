import React from "react"
import PropTypes from "prop-types"

class TitleComponent extends React.Component {

    render() {
        return <div className={this.props.className}>
            <h1>{this.props.title}</h1>
            <h3>You will be {this.props.age + 10} old in ten years</h3>
            <button onClick={this.props.clicked} >Click Me</button>
        </div>
    }

}

TitleComponent.propTypes = {
    title: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    className: PropTypes.string,
    clicked: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TitleComponent;