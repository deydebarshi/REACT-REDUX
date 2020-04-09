import React, {Componet} from 'react';
import {connect} from 'react-redux'
import * as courseActions from '../src/redux/actions/courseActions'
import propTypes from 'prop-types'

class App extends React.Component{
      constructor(){
        super()
        this.state = {
          course : {
            title : ""
          }
        }
      }
      

      handleChange = event =>{
        const course = {...this.state.course , title : event.target.value}
        this.setState({course})
      }


      handleSubmit = event =>{
        event.preventDefault()
        this.props.dispatch(courseActions.createCourse(this.state.course))
      }

      render(){
      
        return (
             <form onSubmit={this.handleSubmit}>
                  <h2>Courses</h2>
                  <h3>Add courses</h3>
                  <input type="text" onChange={this.handleChange} value={this.state.course.title}/>
                  <input type="submit"  value="submit"/>
                  {
                    this.props.courses.map(val=>(
                      <div key={val.course.title}>{val.course.title}</div>
                    ))
                  }
             </form>
        )
      }
}

App.propTypes = {
  dispatch : propTypes.func.isRequired
}


function mapStateToProps(state){
  console.log(state)
  return {
    courses : state.Courses
  }
}

export default connect(mapStateToProps)(App);
