import React, { Component } from 'react'
import { connect } from 'react-redux'

export class HomeContainer extends Component {
    render() {
        return (
            <div>
               <h1>Welcome to home page</h1> 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
