import React, { Component } from 'react';
import styled from 'styled-components';
import ToDo from './todo';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;
const Title = styled.h3`
    padding: 8px;
`;
const ToDosList = styled.div`
    padding: 8px;
`;



export default class Column extends Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <ToDosList>
                {this.props.toDos.map(toDo => <ToDo key={toDo.id} toDo={toDo} />)}
                </ToDosList>
            </Container>
        );
    }
}