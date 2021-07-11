import React from 'react'

function Records({ records }) {

    // const [edit, setEdit] = useState({
    //     id: null,
    //     item: '',
    //     amount: null,
    // })
    return records.map((record, index) => (
        <tr>
            <td>{record.id}</td>
            <td>{record.item}</td>
            <td>{record.amount}</td>
            <td>{record.time}</td>
            <td>.</td>
        </tr>
    ))
}

export default Records
