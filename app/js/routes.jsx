import React from 'react'
import {Route} from 'react-router'
import App from './components/App'
import FindPatient from './components/patients/FindPatient.jsx'
import ShowPatientWrapper from './components/patients/ShowPatient.js'
import FindEncounter from './components/encounters/FindEncounter.jsx'
import ShowEncounterWrapper from './components/encounters/ShowEncounter.js'
import Help from './components/Help'
import {loadCurrentPatient} from './actions'
import {loadCurrentEncounter} from './actions'

export default (store) => {

    const fetchPatientOnEnter = (nextState, replace) => {
        store.dispatch(loadCurrentPatient(nextState.params.patientUuid));
    }

    const fetchEncounterOnEnter = (nextState, replace) => {
        store.dispatch(loadCurrentEncounter(nextState.params.encounterUuid));
    }

    return (
            <Route path="/" component={App}>
                <Route path="/findPatient" component={FindPatient}/>
                <Route path="/showPatient/:patientUuid" component={ShowPatientWrapper} onEnter={fetchPatientOnEnter}/>
                <Route path="/findEncounter" component={FindEncounter}/>
                <Route path="/showEncounter/:encounterUuid" component={ShowEncounterWrapper} onEnter={fetchEncounterOnEnter}/>
                <Route path="/help" component={Help}/>
            </Route>
    );
}
