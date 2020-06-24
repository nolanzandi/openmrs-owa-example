import patientService from './services/PatientService'
import encounterService from './services/EncounterService.js'

/*
 * Action Types
 */
export const LOAD_CURRENT_PATIENT = 'LOAD_CURRENT_PATIENT';
export const DISCARD_CURRENT_PATIENT = 'DISCARD_CURRENT_PATIENT';

export const PATIENT_SEARCH = 'PATIENT_SEARCH';

export const LOAD_CURRENT_ENCOUNTER = 'LOAD_CURRENT_ENCOUNTER';
export const DISCARD_CURRENT_ENCOUNTER = 'DISCARD_CURRENT_ENCOUNTER';

export const ENCOUNTER_SEARCH = 'ENCOUNTER_SEARCH';

/*
 * Action Creators
 */

export function discardCurrentPatient() {
    return {type: DISCARD_CURRENT_PATIENT};
}

export function loadCurrentPatient(patientUuid) {
    return {type: LOAD_CURRENT_PATIENT, payload: patientService.getPatient(patientUuid)};
}

export function patientSearch(query) {
    return {type: PATIENT_SEARCH, payload: patientService.findPatients(query)};
}

export function discardCurrentEncounter() {
    return {type: DISCARD_CURRENT_ENCOUNTER};
}

export function loadCurrentEncounter(encounterUuid) {
    return {type: LOAD_CURRENT_ENCOUNTER, payload: encounterService.getEncounter(encounterUuid)};
}

export function encounterSearch(query) {
    return {type: ENCOUNTER_SEARCH, payload: encounterService.findEncounters(query)};
}
