import React from 'react';
import moment from 'moment';

import encounterService from '../../services/EncounterService.js'

export default class ShowEncounterHelper extends React.Component {

    ageFrom(birthdate) {
        return moment().diff(moment(birthdate), 'years')
    }

    displayGender(person) {
        if (person.gender === 'M') {
            return "Male";
        } else if (person.gender === "F") {
            return "Female";
        } else {
            return "Other";
        }
    }

    render() {
        if (this.props.loading) {
            return <div>Loading...</div>
        }
        else if (this.props.encounter.patient) {
            let et = this.props.encounter;
            console.log("display data")
            console.log(et)
            return (
                <div>
                    <h2>{et.patient.display}, {et.display}</h2>
                    <h3>{et.location.display}</h3>
                    <h3>{et.encounterType.description}</h3>
                    <h3>{et.visit.display}, {et.visit.startDatetime} - {et.visit.stopDatetime}</h3>
                </div>
            )
        }
        else {
            return <div></div>
        }
    }
}
