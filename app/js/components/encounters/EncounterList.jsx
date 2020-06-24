import React from 'react';

import {Link} from 'react-router'

export default class EncounterList extends React.Component {
    renderLink(et) {
        return (
            <Link to={this.props.routeLink.replace(":encounterUuid", et.uuid)}>
                {et.display}
            </Link>
        )
    }

    render() {

        if (this.props.encounters == null) {
            return null;
        } else if (this.props.encounters.loading) {
            return <div>Loading...</div>;
        } else if (this.props.encounters.length === 0) {
            return <div>None</div>;
        } else {
            return (
                <ul>
                    {this.props.encounters.map((et) => <li key={et.uuid}>{this.renderLink(et)}</li>)}
                </ul>
            );
        }
    }
}
