import React, { useState } from 'react'

function PanelInput(props) {
    const [input, setInput] = useState('    lola');
    const handleChange = e => {
        setInput(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log('button clicked');

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })

        setInput('')
    }

    return (
        <div class="panel3">
            <form className="todo-form" onSubmit={handleSubmit}>
                <input type="text" value="id" name="id" className='' />
                <input type="text" placeholder="Drink name"
                    name="drink_name" className='' value={input} onChange={handleChange} />
                <input type="text" placeholder="ml" name="value"
                    className='' />
                <input type="text" value="now" name="now" className='' />
                {/* <!--
                        <input type="text" placeholder="Drink name" value={input} name="text" className='todo-input edit'
                            onChange={handleChange} ref={inputRef} /> --> */}
                <button className="todo-button edit">SUBMIT</button>
            </form>
        </div>
    )
}

export default PanelInput
