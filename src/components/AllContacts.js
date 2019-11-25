import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/SvgIcon/SvgIcon';
import styled from 'styled-components';
import Contact from './Contact';
import {getAllContactData} from "../requests";

const Main = styled.div`{
    grid-area: main;
}`;

class AllContacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    getAllContactData().then((response) => response.json().then((result) => {
      this.setState({ contacts: result });
    })).catch(() => this.props.history.push('/login'));
  }

    changedCard = (id) => {
      const { history, ifChange } = this.props;
      history.push('/changeCard');
      ifChange(id);
      console.log('ALL', this.state);
    };

    render() {
      const { contacts } = this.state;
      const { categories } = this.props;
      return (
        <Main>
          <AppBar position="static">
            <Toolbar>
              <Grid container component="div" direction="row" justify="space-around" alignItems="center">
                <Typography variant="h6">
                                Все контакты
                </Typography>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Toolbar>
          </AppBar>
          <Grid component="div" container style={{ marginTop: 32 }}>
            {contacts.map((item) => (
              <Contact
                name={item.name}
                surname={item.surname}
                id={item._id}
                changedCard={this.changedCard}
                categories={categories}
              />
            ))}
          </Grid>
        </Main>
      );
    }
}

export default AllContacts;
