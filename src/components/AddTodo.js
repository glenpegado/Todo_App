import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({[e.targer.name]: e.target.value});


    render() {
        return (
            <form>
                <input type="text" name="title" 
                style={{flex: '10', padding: '5px'}}
                placeholder="Add Todo ..."
                value={this.state.title}
                onChange={this.onChange}
                />
                <input type="sumbit" 
                value="submit"
                className="btn"
                style={{flex: 1}}
                />
            </form>
        )
    }
}

export default AddTodo
