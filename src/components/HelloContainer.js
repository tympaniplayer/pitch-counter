import { connect } from 'react-redux'
import { editName } from '../actions/actions.js'
import Hello from './Hello.js'

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.name
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onEdit: (e) => {
            dispatch(editName(e.target.value))
        }
    }
}

const HelloContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)

export default HelloContainer;