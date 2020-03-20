import React from 'react'
import { connect } from 'react-redux'
import './AddCourse.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { addCourseApi, requestAddCourse } from './actions'
// import { Redirect } from 'react-router-dom';


class AddCourse extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps && prevProps.addCourseLoading && !this.props.addCourseLoading){
            this.props.history.push('/courses');
            // return <Redirect to='/courses' />; why this is not working ??
        }
    }
    constructor(props) {
        super(props);
        this.courseDetail = null;
        const { match: { params } } = this.props;
        if (params && params.slug) {
            this.courseDetail = this.props.courses.filter((course) => (course.slug == params.slug))[0];
        }
    }
    renderError = (msg) => (<div className='alert alert-danger mt-2'>{msg}</div>)
    render() {
        console.log(this.props);
        return (
            <div className='card text-left mt-5 px-5'>
                <div className='card-header'>
                    <h4>Add Course</h4>
                </div>
                <div className="card-body">
                    <Formik initialValues={this.courseDetail ? this.courseDetail : {
                        title: '',
                        authorId: '',
                        category: ''
                    }} onSubmit={values => {
                        values.authorId = parseInt(values.authorId);
                        this.props.addCourseApi(values)
                    }}
                        validate={values => {
                            const errors = {};
                            Object.entries(values).map((entry) => { if (entry[1] == null || entry[1] === '') errors[entry[0]] = 'Required' });
                            return errors;
                        }}>
                        <Form>
                            <div className="form-group grid">
                                <label className='label' htmlFor="title">Title</label>
                                <Field type="text" id='title' className="form-contorl" name='title' />
                                <ErrorMessage name="title" render={(msg) => this.renderError(msg)} />
                            </div>
                            <div className="form-group gird">
                                <label className='label' htmlFor="author">Author</label>
                                <Field as='select' id="author" className='form-control' name='authorId'>
                                    {this.props.authors.map(author => (<option value={author.id} key={author.id}>{author.name}</option>))}
                                </Field>
                                <ErrorMessage name="authorId" render={(msg) => this.renderError(msg)} />
                            </div>
                            <div className="form-group grid">
                                <label className='label' htmlFor="category">Category</label>
                                <Field type="text" id='category' className="form-contorl" name='category' />
                                <ErrorMessage name="category" render={(msg) => this.renderError(msg)} />
                            </div>
                            <button className='btn btn-primary' type='submit'>Save</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => ({ authors: state.authors, addCourseLoading: state.addCourseLoading, courses: state.courses })
const mapDispatchToProps = (dispatch) => ({
    addCourseApi: (course) => dispatch(requestAddCourse(course))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddCourse)