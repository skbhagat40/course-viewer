import React from 'react'
import { Button } from 'antd'

class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.courseName = React.createRef();
    }
    componentDidMount() {
        this.props.getCourses();
        this.props.getAuthors();
    }
    getAuthor = (authorId) => {
        return this.props.authors.length && this.props.authors.filter((author) => author.id === authorId)[0]?.name;
    }
    render() {
        return (
            <div className='card w-50 text-center mx-auto mt-5 px-5'>
                <div className='mb-1 text-left'>
                    <h4>
                        Courses
                </h4>
                    <Button className='btn btn-success' onClick={() => this.props.history.push('/course')}>Add Course</Button>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th itemScope='col'></th>
                            <th itemScope='col'>Title</th>
                            <th itemScope='col'>Author</th>
                            <th itemScope='col'>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.courses.map((course, id) => (
                            <tr>
                                <th itemScope='row'>
                                    <Button className='btn btn-primary'>Watch</Button>
                                </th>
                                <td>{course.title}</td>
                                <td>{this.getAuthor(course.authorId)}</td>
                                <td>{course.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Courses