let state = {
    todos : []
}

let a ={
    todos: [...state.todos,{
        title: 'learn',
        done: true
    },
    {
        title: 'learn',
        done: true
    }
    ]
}
console.log(...state.todos);
