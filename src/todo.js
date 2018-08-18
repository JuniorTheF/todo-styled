import React, { Component } from 'react';
import fakeData from './fake-data';
import styled from 'styled-components';

const Container = styled.div`
    margin: 8px;
    padding: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;

export default class ToDo extends Component {
    render() {
        return <Container>{this.props.toDo.content}</Container>;
    }
};