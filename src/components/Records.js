import React from 'react'
import { FiEdit2 } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'

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
            <td><FiEdit2 /><IoMdClose /></td>
        </tr>
    ))
}

export default Records
