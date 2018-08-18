import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fakeData from './fake-data';
import Column from './column';
import ToDo from './todo';
import '@atlaskit/css-reset';


class App extends Component {
    state = fakeData;

    render() {
        return this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const toDos = column.toDosIds.map(todoId => this.state.toDos[todoId]);
            
            
            return <Column key={column.id} column={column} toDos={toDos} />;
        });
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

