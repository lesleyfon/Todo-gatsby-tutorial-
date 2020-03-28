import React,{ useState, useEffect}from 'react';
import {connect} from 'react-redux';
import './Category.css'
import { BookmarkPlus } from 'react-bootstrap-icons';

function CategoryList(props) {
    const [category, setCategory]  = useState([]) ;

    useEffect(() => {
        setCategory(props.category)
    }, [props.category])

    //Render Categories
    const renderCat = () =>{
        console.log(category)
        if(category.length <= 0){
            return <div>
                <p>No new categories</p>
            </div>
        }else{
        
            return category.map((items, i) => <div key={i} className='items'> 
            <BookmarkPlus />
            <h5>{items.name} </h5>
        <small className='date'> {items.date}</small>
            </div>)

        }
    }
    return (
        <div className='list-main'>
            {renderCat()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        category: state.todocategories.category
    }
}
export default connect(mapStateToProps, {})(CategoryList)
