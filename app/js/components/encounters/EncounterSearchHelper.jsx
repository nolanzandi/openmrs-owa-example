import React from 'react'
import EncounterList from './EncounterList.jsx'

export default class EncounterSearchHelper extends React.Component {

    render() {
        return (
            <div>
                <input type="text" placeholder="Search for an encounter"
                       onChange={(evt) => this.props.doSearch(evt.target.value)}/>
                <EncounterList encounters={this.props.encounters} routeLink="/showEncounter/:encounterUuid"></EncounterList>
            </div>
        );
    }
}
