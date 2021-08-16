import React, { useState } from 'react';
import PanelStatus from './PanelStatus';
import PanelTable from './PanelTable';
import PanelInput from './PanelInput';

function Wrapper() {
    const [records, setRecords] = useState([]);
    const [dataFromParent, setDataFromParent] = useState(0)

    const addRecord = record => {
        const newRecords = [record, ...records]
        setRecords(newRecords)


        const newArrayDataOfOjbect = Object.values(newRecords)
        // >> sposob1 nefunguje - to x treba nejak prehodit na cislo
        // >> lebo ako string sa to len pridava namiesto inkrementovania integeru
        // var filterArr = newArrayDataOfOjbect.map(a => a.amount).reduce((sum, x) => sum += x)

        // >> sposob2 funguje ale nemohol som pouzit reduce
        // >> ale zato som mohol pouzit parseInt
        var filterArr = newArrayDataOfOjbect.map(a => a.amount)
        let sum = 0
        for (let i = 0; i < filterArr.length; i++) {
            sum += parseInt(filterArr[i])
        }

        console.log(
            // record, ...records,
            '\ntype of filterArr: ', typeof (filterArr),
            '\nvalue of filterArr: ', filterArr,
            '\ntype of sum: ', typeof (sum),
            '\nvalue of sum: ', sum
        )
        setDataFromParent(sum)
        //console.log(filterArr)

        //console.log('newRecords of array is: ', newRecords)
        // const getArrOfValues = newRecords(2).filter(i => i.length > 0)
        // return console.log('RECORDS CONTAQIN: ', getArrOfValues)

    }

    const updateRecord = (recordId, newValue) => {
        // if (!newValue.text || /^\s*$/.test(newValue.text)) {
        //     return;
        // }

        setRecords(prev => prev.map(item => (item.id === recordId ? newValue : item)))
    }

    const removeRecord = id => {
        const removeArr = [...records].filter(record => record.id !== id)
        setRecords(removeArr)

    }


    return (
        <div class="container">
            <h1>Drinking Report 2</h1>
            <PanelStatus
                dataFromParent={dataFromParent} />
            <PanelTable
                records={records}
                removeRecord={removeRecord}
                updateRecord={updateRecord}
            // getArrOfValues={getArrOfValues}
            />
            <PanelInput onSubmit={addRecord} />
        </div>
    )
}

export default Wrapper
