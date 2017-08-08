import React from 'react'

const Todo = ({ onClickCheck, onClickDelete, completed, text }) => (
    <div className={ completed ? 'todo-card--completed todo-card' : 'todo-card' }>
        {text}
        <div className="todo-card__actions">
            <div className={completed ? "todo-card__check todo-card__check--checked" : "todo-card__check"}
                 onClick={onClickCheck}>
            </div>
            <div className="todo-card__delete"
                 onClick={onClickDelete}>
                ✗
            </div>
        </div>
    </div>
)

export default Todo