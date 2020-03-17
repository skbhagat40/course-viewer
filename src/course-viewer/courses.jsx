import React from 'react'
import {addCourse} from './actions/index'
import { connect } from 'react-redux';
class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.courseName = React.createRef();
    }
    addCourse = () => { this.courseName.current.value && this.props.addCourse(this.courseName.current.value); this.courseName.current.value = '';}
    render() {
        return (
            <div className='card w-50 text-center mx-auto mt-5 px-5'>
                <h4>
                    Courses
                </h4>
                <ul>
                    {this.props.courses.map((course, id) => (<li key={id}>{course}</li>))}
                </ul>
                <div>
                    <h4>Add Courses</h4>
                    <div className='input-group mb-3'>
                        <input type='text' className="form-control" placeholder="Course Name" ref={this.courseName} />
                        <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon2" onClick={this.addCourse}>Add Course</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({courses: state});
const mapDispatchToProps = (dispatch) => ({addCourse: (title) => dispatch(addCourse(title))});
export default connect(mapStateToProps, mapDispatchToProps)(Courses)