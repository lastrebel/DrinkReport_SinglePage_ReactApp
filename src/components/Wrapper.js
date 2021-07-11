import React, { useState } from 'react';
import PanelStatus from './PanelStatus';
import PanelTable from './PanelTable';
import PanelInput from './PanelInput';

function Wrapper() {
    const [records, setRecords] = useState([]);

    const addRecord = record => {
        const newRecords = [record, ...records]

        setRecords(newRecords)
        console.log(record, ...records)
    }
    return (
        <div class="container">
            <h1>Drinking Report 2</h1>
            <PanelStatus />
            <PanelTable />
            <PanelInput onSubmit={addRecord} />
        </div>
    )
}

export default Wrapper
