import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <div className="todo-add">
            <form className="todo-add__form"
                  onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <input className="todo-add__input"
                       placeholder="Please, enter text"
                       ref={node => {
                        input = node
                    }}
                />
                <div className="todo-add__input-line" />
                <button type="submit"
                        className="todo-add__button">
                    +
                </button>
            </form>
        </div>
    )
}
AddTodo = connect()(AddTodo)

export default AddTodo