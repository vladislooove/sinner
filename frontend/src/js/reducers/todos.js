const initialState = [
    {
        id: 0,
        text: 'Buy flowers for wife',
        completed: false
    },{
        id: 1,
        text: 'Kick your ass',
        completed: true
    },{
        id: 2,
        text: 'To be awesome',
        completed: true
    }
]

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        case 'DELETE_TODO':
            return state.filter(todo => (todo.id != action.id))

        default:
            return state
    }
}

export default todos