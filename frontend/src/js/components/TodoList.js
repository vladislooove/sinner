import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onClickCheck, onClickDelete }) => (
    <div className="todos">
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClickCheck={() => onClickCheck(todo.id)} onClickDelete={() => onClickDelete(todo.id)} />
        ))}
    </div>
)

export default TodoList