import {addCourse, requestAuthors, requestCourses, requestDeleteCourse} from './actions/index'
import { connect } from 'react-redux';
import Courses from './courses'

const mapStateToProps = (state) => ({courses: state.courses, authors: state.authors});
const mapDispatchToProps = (dispatch) => ({addCourse: (title) => dispatch(addCourse(title)),
getCourses: () => dispatch(requestCourses()),
getAuthors: () => dispatch(requestAuthors()),
deleteCourseApi: (id) => dispatch(requestDeleteCourse(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Courses)