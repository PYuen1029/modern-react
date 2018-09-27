import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from "../actions/index";
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}>
                    {book.title} </li>
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

// Anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
    // whenever selectbook is called, the result should be passd to all of our redcrs
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

// promote booklist from a component to a container
// it needs to knwo about this new dispatch method, selectBook, make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)