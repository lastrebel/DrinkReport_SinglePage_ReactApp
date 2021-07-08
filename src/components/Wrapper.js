import React from 'react'

function Wrapper() {

    return (
        <div class="container">
            <h1>Drinking Report 2</h1>
            <div class="panel1">
                <div class="grow">
                    <div class="title">Status</div>
                    <div class="value">43%</div>
                    <div class="verbal">drink 8 more glasses</div>
                </div>
                <div class="">
                    <div class="title">Current Amount</div>
                    <div class="value">0.8 l gdsdfsdf sdfsdfs sdfsdv dgfsdf ddf</div>
                </div>
                <div class="">
                    <div class="title">Expected Amount</div>
                    <div class="value"><input value="2.5" placeholder="Enter value" /></div>
                </div>
            </div>

            <div class="panel2">
                <div class="title">Records</div>

                <div class="table_container">
                    <table>
                        <tr>
                            <th></th>
                            <th>detail</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>Water</td>
                            <td>100 ml</td>
                            <td>09:30</td>
                            <td>icons</td>
                        </tr>
                        <tr>
                            <td>#2</td>
                            <td>Water</td>
                            <td>150 ml</td>
                            <td>10:30</td>
                            <td>icons</td>
                        </tr>
                        <tr>
                            <td>#3</td>
                            <td>Coffee</td>
                            <td>200 ml</td>
                            <td>30:00</td>
                            <td>icons</td>
                        </tr>
                        <tr>
                            <td>#4</td>
                            <td>Water</td>
                            <td>100 ml</td>
                            <td>16:25</td>
                            <td>icons</td>
                        </tr>
                        <tr>
                            <td>#5</td>
                            <td>Bottle rajec neperlivy jhkjhkjkj kjnjnjnj lkjlkjlk</td>
                            <td>0.5 l</td>
                            <td>17:30</td>
                            <td>icons</td>
                        </tr>
                        <tr>
                            <td>#6</td>
                            <td>Tea</td>
                            <td>130 ml</td>
                            <td>20:50</td>
                            <td>icons</td>
                        </tr>


                        <tr>
                            <th></th>
                            <th>mo0o0o0re mo o o re</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>#7</td>
                            <td>Water</td>
                            <td>100 ml</td>
                            <td>09:30</td>
                            <td>icons</td>
                        </tr>
                        <tr>
                            <td>#8</td>
                            <td>Water</td>
                            <td>150 ml</td>
                            <td>10:30</td>
                            <td>icons</td>
                        </tr>
                        <tr>
                            <td>#9</td>
                            <td>Coffee</td>
                            <td>200 ml</td>
                            <td>30:00</td>
                            <td>icons</td>
                        </tr>
                        <tr>
                            <td>#10</td>
                            <td>Water</td>
                            <td>100 ml</td>
                            <td>16:25</td>
                            <td>icons</td>
                        </tr>
                        <tr>
                            <td>#11</td>
                            <td>Bottle rajec neperlivy jhkjhkjkj kjnjnjnj lkjlkjlk</td>
                            <td>0.5 l</td>
                            <td>17:30</td>
                            <td>icons</td>
                        </tr>
                        <tr>
                            <td>#12</td>
                            <td>Tea</td>
                            <td>130 ml</td>
                            <td>20:50</td>
                            <td>icons</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="panel3">
                <form className="todo-form">
                    <input type="text" value="id" name="id" className='' /><input type="text" placeholder="Drink name"
                        name="drink_name" className='' /><input type="text" placeholder="ml" name="value"
                            className='' /><input type="text" value="now" name="now" className='' />
                    {/* <!--
                        <input type="text" placeholder="Drink name" value={input} name="text" className='todo-input edit'
                            onChange={handleChange} ref={inputRef} /> --> */}
                    <button className="todo-button edit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Wrapper
