import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buttonClick } from '../store/actions/actionClick.js'

class Button extends Component {
    
    handleClick = (e) => {
        this.props.buttonClick();
    }

    render() {
        const {pastColors, className} = this.props;
        const pastColorsList = pastColors.length ? (
            pastColors.map(pastColor => {
                return(
                    
                        <span className={`${pastColor}-text`}>{pastColor},</span>
                    
                )
            })
        ):(
            <p></p>
            
        )
        return (
            <div className='container'>
                <button className={className} onClick={this.handleClick}>Click Me</button>
                <div>
                    {pastColorsList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      colors : state.colors,
      pastColors : state.pastColors,
      className : state.className
    }
}

const mapDispatchToProps = (dispatch) => {
return {
    buttonClick: () => dispatch(buttonClick())
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
