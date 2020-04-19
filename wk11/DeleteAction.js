import React from 'react';
import axios from 'axios';

class DeleteAction extends React.Component {
    state = {  }

    handleSubmit = event => { 
        event.preventDefault();

        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        this.props.deleteStudent(this.props.index)
    };

    render() { 
        return ( <button onClick={this.handleSubmit}>Delete</button> );
    }
}
 

export default DeleteAction;