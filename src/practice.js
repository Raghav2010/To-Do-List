let state = {
    todos : []
}

const a ={
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
console.log(a.todos.map((todo, index) => { 
        return todo[index]
}))


