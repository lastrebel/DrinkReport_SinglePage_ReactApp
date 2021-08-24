import React, { useState } from 'react'

function PanelStatus({ dataFromParent, handleChange }) {
    //const [requested, setRequested] = useState();
    const [requiredAmount, setRequiredAmount] = useState(0);
    var status = Math.round((dataFromParent / requiredAmount) * 100)
    var displayStatus
    isNaN(status) || !Number.isFinite(status) ? displayStatus = 'Check Data Entries' : displayStatus = status + ' %'
    function handleChange(e) {
        e.preventDefault();
        console.log('value changed ' + requiredAmount);
        setRequiredAmount(e.target.value)
        // getStatus()
    }

    // function getStatus() {
    //     // const status = (dataFromParent / requiredAmount) * 100
    //     return console.log(
    //         '\nrequiredAmount type je ' + typeof (requiredAmount) +
    //         '\nrequiredAmount je ' + requiredAmount +
    //         '\ndataFromParent type je ' + typeof (dataFromParent) +
    //         '\ndataFromParent je ' + dataFromParent +
    //         '\nstatus type je ' + typeof (status) +
    //         '\nstatus je ' + status)
    // }


    return (
        <div class="panel1">
            <div class="grow">
                <div class="title">Status</div>
                <div class="value">{displayStatus}</div>
                {/* <div class="verbal">drink 8 more glasses</div> */}
            </div>
            <div class="">
                <div class="title">Current Amount</div>
                <div class="value">{dataFromParent} l</div>
            </div>
            <div class="">
                <div class="title">Expected Amount</div>
                <div class="value"><input placeholder="Enter value" value={requiredAmount} onChange={handleChange} /></div>
            </div>
        </div>
    )
}

export default PanelStatus
