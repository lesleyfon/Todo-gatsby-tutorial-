import React from 'react';
import './List.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CategoryList from './Body/CategoryList';

function List() {
    return (
        <div className='list'>
            <Header />
            <CategoryList />
            <Footer />
        </div>
    )
}

export default List
