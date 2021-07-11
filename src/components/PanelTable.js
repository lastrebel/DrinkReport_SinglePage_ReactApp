import React from 'react'
import Records from './Records'

function PanelTable({ records }) {
    return (
        <div class="panel2">
            <div class="title">Records</div>

            <div class="table_container">
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>detail</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <Records records={records} />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PanelTable

