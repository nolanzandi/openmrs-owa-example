import {connect} from 'react-redux'
import EncounterSearchHelper from './EncounterSearchHelper.jsx'
import {encounterSearch} from '../../actions.js'

const mapStateToProps = (state) => {

    return {
        encounters: state.encounterSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doSearch: (query) => {
            if (query && (query.length > 1)) {
                dispatch(encounterSearch(query));
            }
        }
    }
}

const EncounterSearch = connect(
    mapStateToProps,
    mapDispatchToProps
)(EncounterSearchHelper);

export default EncounterSearch
