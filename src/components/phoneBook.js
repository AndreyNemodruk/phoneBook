import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import LeftBar from './leftBar';
import AddNewContact from './AddNewContact';
import AllContacts from './AllContacts';
import { getAllCategories } from '../requests';


const GridWrap = styled.div`{
    display: grid
    grid-template-areas:
    "sidebar main"
    "sidebar main";
    grid-template-rows: 73px 1fr ;
    grid-template-columns: 332px 1fr;
    grid-gap: 0;
    margin: 0 auto;
    max-width: 1700px;
    padding-right: 40 px;
}`;

class PhoneBook extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      idChangeCard: '',
      categories: [],
    };
  }

  componentDidMount() {
    getAllCategories().then((response) => response.json().then((result) => {
      result.unshift({ _id: 'allCategories', name: 'All Contacts' });
      this.setState({
        categories: result,
      });
    })).catch((e) => alert(e));
  }

    addNewCard = (e) => {
      const { history } = this.props;
      e.preventDefault();
      history.push('/addCard');
    };

    ifChange = (id) => {
      const { history } = this.props;
      history.push('/changeCard');
      this.setState({
        idChangeCard: id,
      }, () => console.log('phone', this.state));
    };

    getAllCategories = (categories) => {
      this.setState({ categories });
    };

    render() {
      const { idChangeCard, categories } = this.state;
      return (
        <GridWrap>
          <Route render={(props) => (
            <LeftBar
              {...props}
              addNewCard={this.addNewCard}
              getAllCategories={this.getAllCategories}
              categories={categories}
            />
          )}
          />
          <Route exact path="/" render={(props) => <AllContacts {...props} ifChange={this.ifChange} change={false} categories={this.state.categories} />} />
          <Route path="/addCard" render={(props) => <AddNewContact {...props} change={false} />} />
          <Route
            path="/changeCard"
            render={(props) => (
              <AddNewContact
                {...props}
                change
                idChangeCard={idChangeCard}
              />
            )}
          />
        </GridWrap>
      );
    }
}

export default PhoneBook;
