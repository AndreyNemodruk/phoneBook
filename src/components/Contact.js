import React, { Component } from 'react';
import styled from 'styled-components';
import UserAvatar from '../ui/Avatar/Avatar';
import Menu from './DropMenu';
import { handleDeleteCard } from '../requests';


const ContactWrap = styled.div`{
    min-height: 112px;
    width: 222px;
    display: flex;
    margin-left: 40px;
    align-items: center;
    justify-content: space-between;
    // border: 1px solid black;
    
}`;

const ContactName = styled.span`{
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    max-width: 140px;
}`;

const ContactInfo = styled.span`{
    color: #9b9b9b;
    margin-top: 5px;
    font-size: 12px;
    font-weight: 400;
}`;

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      menuAddCat: false,
      menuItems: ['Edit contact', 'Delete', 'Create Group', 'Add to group'],
    };
  }

  deleteCard = () => {
    const { id } = this.props;
    handleDeleteCard(id).then((response) => {
      response.json().then((result) => {
        alert(result.message);
        console.log('contact', this.props);
      });
    }).catch((e) => {
      alert(e);
    });
  };

    changedCard = () => {
      const { id, changedCard } = this.props;
      changedCard(id);
      this.setState({ anchorEl: null });
    };

    render() {
      const {
        name, surname, id, categories
      } = this.props;
      return (
        <ContactWrap>
          <UserAvatar />
          <div style={{ display: 'flex', 'flex-direction': 'column' }}>
            <ContactName>
              {`${name} ${surname}`}
            </ContactName>
            <ContactInfo>
              Some text here
            </ContactInfo>
          </div>
          <Menu
            marginRight="0"
            deleteCard={this.deleteCard}
            changeCard={this.changedCard}
            typeMenu="dropMenuContact"
            menuItems={this.state.menuItems}
            id={id}
            categories={categories}
          />
        </ContactWrap>
      );
    }
}
export default Contact;
