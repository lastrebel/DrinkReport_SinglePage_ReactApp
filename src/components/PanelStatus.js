import React, { useState } from 'react'

function PanelStatus({ dataFromParent }) {
    return (
        <div class="panel1">
            <div class="grow">
                <div class="title">Status</div>
                <div class="value">26% </div>
                <div class="verbal">drink 8 more glasses</div>
            </div>
            <div class="">
                <div class="title">Current Amount</div>
                <div class="value">{dataFromParent} l</div>
            </div>
            <div class="">
                <div class="title">Expected Amount</div>
                <div class="value"><input value="2.5" placeholder="Enter value" /></div>
            </div>
        </div>
    )
}

export default PanelStatus
