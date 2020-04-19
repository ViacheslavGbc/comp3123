import axios from "axios";
import React from 'react';
import DeleteAction from './DeleteAction';
import AddStudent from './AddStudent';

class UserList extends React.Component {
    state = { 
        users: []
    };


    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            this.setState({
                users: res.data
            })
        })
    }

    addNewStudent = (student) => {
        console.log('adding new student')
        var arr = this.state.users
        arr.push(student)
        console.log(arr)
        this.setState({users: arr})
    }

    deleteStudent = (index) => {
        console.log('deleting student..')
        var arr = this.state.users
        arr.splice(index,1)
        this.setState({users: arr})
    }

    render() { 
        return (
            <>
                <AddStudent addNewStudent={this.addNewStudent}/>
                <ul>
                    {this.state.users.map((user, i) => <li>{user.name}<br /><DeleteAction index={i} id={user.id} deleteStudent={this.deleteStudent}/></li>)}
                </ul>
            </>
        );
    }
}
 
export default UserList;