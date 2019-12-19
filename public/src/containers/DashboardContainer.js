import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DashboardContainer extends Component {
    render() {
        return (
            <div>
                <h1>Welcome To Dashboard</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
