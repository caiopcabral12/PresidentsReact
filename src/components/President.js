import React, { Component } from 'react';
import axios from 'axios';
import '../components/President.css';

export default class President extends Component {
    state = {
        president: []
    }

    componentDidMount() {
        axios.get('http://localhost:3333/api/models')
            .then(res => {
                const president = res.data;
                this.setState({ president })
            })
    }

    render() {
        return (
            <div>
                {this.state.president.map((p, id )=>
                    <div className="CardPresident" key={id}>
                        <h3>{p.name}</h3>
                        <p>{p.biography}</p>
                    </div>)}
            </div>
        );
    }
}