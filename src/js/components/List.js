import React from 'react';
import { connect } from 'react-redux';

const mapStateProps = state => {
    return {
        articles: state.articles
    };
};

const ConnectedList = ({ articles }) => (
    <ul>
        {articles.map(el=>(
            <li key={el.id}>{el.title}</li>
        ))}
    </ul>
);

const List = connect(mapStateProps)(ConnectedList);

export default List;

