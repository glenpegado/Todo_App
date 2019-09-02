import React, {
    Component
} from 'react';


class Todos extends Component {
    render() {
        return this.props.todos.map((a) => (
            <h3>{ a.title }</h3>
        ));
    }
}

export default Todos;