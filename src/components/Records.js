import React, { useState } from 'react'
import { FiEdit2 } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import PanelInput from './PanelInput';

function Records({ records, removeRecord, updateRecord }) {

    const [edit, setEdit] = useState({
        id: null,
        item: '',
        amount: 0,
        time: null,
    });

    const submitUpdate = value => {
        updateRecord(edit.id, value)
        setEdit({
            id: null,
            item: '',
            amount: 0,
            time: null,
        })
    }

    if (edit.id) {
        return <tr><td colspan="5" style={{ padding: '0px', background: '#0000FF' }}>
            <PanelInput edit={edit} onSubmit={submitUpdate} /></td></tr >
    }

    return records.map((record, index) => (
        <tr>
            <td>{record.id}</td>
            <td>{record.item}</td>
            <td>{record.amount}</td>
            <td>{record.time}</td>
            <td><FiEdit2 onClick={() => setEdit({ id: record.id, item: record.item, amount: record.amount, time: record.time })} />
                <IoMdClose onClick={() => removeRecord(record.id)} /></td>
        </tr>
    ))
}

export default Records
