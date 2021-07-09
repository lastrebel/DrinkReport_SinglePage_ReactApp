import React from 'react';
import PanelStatus from './PanelStatus';
import PanelTable from './PanelTable';
import PanelInput from './PanelInput';

function Wrapper() {

    return (
        <div class="container">
            <h1>Drinking Report 2</h1>
            <PanelStatus />
            <PanelTable />
            <PanelInput />
        </div>
    )
}

export default Wrapper
