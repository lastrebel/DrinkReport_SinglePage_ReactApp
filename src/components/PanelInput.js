import React from 'react'

function PanelInput() {
    return (
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
    )
}

export default PanelInput
