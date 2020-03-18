import {addCourse, fetchCourses, fetchAuthors} from './actions/index'
import { connect } from 'react-redux';
import Courses from './courses'

const mapStateToProps = (state) => ({courses: state.courses, authors: state.authors});
const mapDispatchToProps = (dispatch) => ({addCourse: (title) => dispatch(addCourse(title)),
getCourses: () => dispatch(fetchCourses()),
getAuthors: () => dispatch(fetchAuthors()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Courses)