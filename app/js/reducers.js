import {DISCARD_CURRENT_PATIENT, LOAD_CURRENT_PATIENT, PATIENT_SEARCH} from './actions'
import {DISCARD_CURRENT_ENCOUNTER, LOAD_CURRENT_ENCOUNTER, ENCOUNTER_SEARCH} from './actions'

export function currentPatient(state = {}, action) {
    switch (action.type) {
        case DISCARD_CURRENT_PATIENT:
            return {};
        case LOAD_CURRENT_PATIENT + '_PENDING':
            return {
                loading: action.patientUuid
            };
        case LOAD_CURRENT_PATIENT + '_FULFILLED':
            return action.payload;
        default:
            return state
    }
}

export function patientSearch(state = [], action) {
    switch (action.type) {
        case PATIENT_SEARCH + '_PENDING':
            return {loading: true};
        case PATIENT_SEARCH + '_FULFILLED':
            console.log(action);
            return action.payload;
        default:
            return state;
    }
}

export function currentEncounter(state = {}, action) {
    switch (action.type) {
        case DISCARD_CURRENT_ENCOUNTER:
            return {};
        case LOAD_CURRENT_ENCOUNTER + '_PENDING':
            return {
                loading: action.encounterUuid
            };
        case LOAD_CURRENT_ENCOUNTER + '_FULFILLED':
            return action.payload;
        default:
            return state
    }
}

export function encounterSearch(state = [], action) {
    switch (action.type) {
        case ENCOUNTER_SEARCH + '_PENDING':
            return {loading: true};
        case ENCOUNTER_SEARCH + '_FULFILLED':
            console.log(action);
            return action.payload;
        default:
            return state;
    }
}
