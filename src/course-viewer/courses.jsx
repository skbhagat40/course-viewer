import React from 'react'
import { Button } from 'antd'
import {Link} from 'react-router-dom'

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
        console.log(this.props.courses);    
        return (
            <div className='card w-75 text-center mx-auto mt-5 px-5'>
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
                                <td itemScope='row'>
                                    <Button className='btn btn-primary'>Watch</Button>
                                </td>
                                <td><Link to={`/course/${course.slug}`}>{course.title}</Link></td>
                                <td>{this.getAuthor(course.authorId)}</td>
                                <td>{course.category}</td>
                                <td itemScope='row'>
                                    <Button className='btn btn-primary' onClick={this.props.deleteCourseApi.bind(null, course.id)}>Delete Course</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Courses