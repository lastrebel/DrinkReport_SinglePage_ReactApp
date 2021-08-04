import React, { useState } from 'react'

function PanelInput(props) {
    var today = new Date();
    //var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();

    const [state, setState] = useState(props.edit ? props.edit : {
        item: '',
        amount: '',
        time: time,
    });

    function handleChange(e) {
        // console.log(e.target.value); // works fine
        // console.log(e.state);
        const value = e.target.value;

        setState({
            ...state,
            [e.target.name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('button clicked');

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            item: state.item,
            amount: state.amount,
            time: state.time,
        })

        setState({
            item: '',
            amount: '',
            time: time,
        })
    }

    return (
        <div class="panel3">
            <form className="todo-form" onSubmit={handleSubmit}>
                <input type="text" value="#2" name="id" className='' onChange={handleChange} />
                <input type="text" placeholder="Drink name" name="item" className='' value={state.item} onChange={handleChange} />
                <input type="text" placeholder="ml" name="amount" className='' value={state.amount} onChange={handleChange} />
                <input type="text" name="time" className='' value={state.time} onChange={handleChange} />
                {/* <!--
                        <input type="text" placeholder="Drink name" value={input} name="text" className='todo-input edit'
                            onChange={handleChange} ref={inputRef} /> --> */}
                <button className="todo-button edit">SUBMIT</button>
            </form>
        </div>
    )
}

export default PanelInput
