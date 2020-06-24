import {connect} from 'react-redux'
import ShowEncounterHelper from './ShowEncounterHelper.jsx'

const mapStateToProps = (state, ownProps) => {
    return {
        encounter: state.currentEncounter,
        loading: state.currentEncounter && state.currentEncounter.loading
    }
}

const ShowEncounter = connect(
    mapStateToProps,
    null
)(ShowEncounterHelper);

export default ShowEncounter
