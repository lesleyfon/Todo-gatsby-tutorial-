import {combineReducers} from 'redux'
import {todocategories} from './todocategories'


 const reducer = {
    todocategories: todocategories
}
const rootReducer = combineReducers(reducer)
export default rootReducer