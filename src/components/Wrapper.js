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

    const removeRecord = id => {
        const removeArr = [...records].filter(record => record.id !== id)
        setRecords(removeArr)

    }
    // const removeTodo = id => {
    //     const removeArr = [...todos].filter(todo => todo.id !== id)

    //     setTodos(removeArr)
    // }
    return (
        <div class="container">
            <h1>Drinking Report 2</h1>
            <PanelStatus />
            <PanelTable
                records={records}
                removeRecord={removeRecord}
            />
            <PanelInput onSubmit={addRecord} />
        </div>
    )
}

export default Wrapper
