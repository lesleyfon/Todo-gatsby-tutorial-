import React from 'react'
import './Main.css'
import {connect } from 'react-redux'

function Main(props) {
    console.log(props)
    return (
        <div className='main'>
            Main
        </div>
    )
}

const mapStateToProps = state =>{
    return state
}
export default connect(mapStateToProps,  {})(Main)
