import {combineReducers} from 'redux'
import {todocategories} from './todocategories'
import {todoreducer} from './todoreducer'


 const reducer = {
    todocategories: todocategories,
    todoreducer
}
const rootReducer = combineReducers(reducer)
export default rootReducer