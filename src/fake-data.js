const fakeData = {
    toDos: {
        'todo-1': { id: 'todo-1', content: "my todo 1"},
        'todo-2': { id: 'todo-2', content: "my todo 2"},
        'todo-3': { id: 'todo-3', content: "my todo 3"},
        'todo-4': { id: 'todo-4', content: "my todo 4"}  ,       
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'My toDos',
            toDosIds: ['todo-1', 'todo-2', 'todo-3', 'todo-4'],
        },
    },
    columnOrder: ['column-1'],
};

export default fakeData;