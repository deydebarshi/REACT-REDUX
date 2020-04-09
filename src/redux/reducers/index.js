import {combineReducers} from 'redux'
import Courses from './courseReducer'

const rootReducer = combineReducers({
    Courses : Courses
})
export default rootReducer