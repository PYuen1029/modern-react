import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item"> {book.title} </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// mapStateToProps maps the state to the props of the BookList component. That is why it's described as the bridge between react and redux
// if state changes, this container automatically re-renders.
function mapStateToProps(state) {
    // whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    }
}

// connect takes a function (mapStateToProps) and a component, Booklist and returns a container

export default connect(mapStateToProps)(BookList)