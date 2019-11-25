import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { getDataCurrentContact } from '../requests';

class AddNewContact extends Component {
  constructor() {
    super();
    this.state = {
      _id: '',
      name: '',
      surname: '',
      information: '',
      phone: '',
      email: '',
      birthday: '',
      description: '',
      instagram: '',
      facebook: '',
      image: '',
      dataCard: [],
    };
  }

  componentDidMount() {
    const { change, idChangeCard } = this.props;
    if (change && idChangeCard) {
      getDataCurrentContact(idChangeCard).then((response) => response.json().then((ressult) => {
        this.setState({
          dataCard: ressult,
        }, () => {
          this.updateState();
        });
      })).catch(()=> alert('отсутствует связь с сервером'));
    }
  }

  // необходимо расширить на все поля
    updateState = () => {
      this.setState({
        name: this.state.dataCard.name,
        surname: this.state.dataCard.surname,
        email: this.state.dataCard.email,
        phone: this.state.dataCard.phone.length !== 0 ? this.state.dataCard.phone[0].value : 'none',
      });
    };


    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };

    cancelAddCard = (e) => {
      e.preventDefault();
      this.props.history.push('/');
      console.log('addnew', this.props.idChangeCard, this.props.change);
    };


    handleSubmitSave = (e) => {
      e.preventDefault();
      // let id = uuid();
      const data = {
        // email: [this.state.email],
        // phone: [
        //     {
        //         _id: '',
        //         category: 'mobile',
        //         value: this.state.phone,
        //     }
        // ],
        // bornDate: this.state.birthday,
        // category: id,
        // name: this.state.name,
        // surname: this.state.surname,
        // information: this.state.information,
        // position: this.state.description,
        // instagram: this.state.instagram,
        // facebook: this.state.facebook,
        image: this.state.image,
      };
      const request = fetch('http://phonebook.hillel.it/api/phonebook/5db895f2204dbd15b86e58b4', {
        credentials: 'include',
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify({ name: 'andru', surname: 'nemodruk' }),
      });
      request.then((response) => {
        response.json().then((result) => {
          console.log(result.message, JSON.stringify(data), this.state);
        });
      }).catch((e) => {
        console.log(e);
      });
    };


    render() {
      return (
        <Grid item xs={12} component="div">
          <AppBar position="static">
            <Toolbar>
              <Grid container component="div" direction="row" justify="space-between" alignItems="center">
                <Typography variant="h6">
                  {this.props.change ? 'Изменить контакт' : 'Добавить новый контакт'}
                </Typography>
              </Grid>
            </Toolbar>
          </AppBar>
          <Grid container component="form" spacing={3} style={{ padding: '10px', marginTop: '10px' }} onSubmit={this.handleSubmitSave}>
            <Grid item xs={2} component="div">
              <InputLabel htmlFor="ava">
                <Grid container justify="center" alignItems="center" component="div">
                  <Avatar alt="Remy Sharp" src="https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/234/avatarka_dlya_instagram_primery_15.jpg" style={{ cursor: 'pointer', height: '60px', width: '60px' }} />
                </Grid>
              </InputLabel>
              <Input id="ava" value={this.state.image} onChange={this.handleChange} name="image" type="file" style={{ display: 'none' }} />
            </Grid>
            <Grid item component="div" xs={10}>
              <Grid item xs={12} component="div">
                <FormControl component="div" style={{ width: '100%' }}>
                  <InputLabel htmlFor="component-simple">Имя</InputLabel>
                  <Input id="component-simple" value={this.state.name} onChange={this.handleChange} name="name" />
                </FormControl>
              </Grid>
              <Grid item xs={12} component="div">
                <FormControl component="div" style={{ width: '100%' }}>
                  <InputLabel htmlFor="component-simple">Фамилия</InputLabel>
                  <Input id="component-simple" value={this.state.surname} onChange={this.handleChange} name="surname" />
                </FormControl>
              </Grid>
              <Grid item xs={12} component="div">
                <FormControl component="div" style={{ width: '100%' }}>
                  <InputLabel htmlFor="component-simple">Описание</InputLabel>
                  <Input id="component-simple" value={this.state.description} onChange={this.handleChange} type="text" multiline name="description" />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid container component="div" spacing={3} style={{ padding: '20px' }}>
            <Grid item xs={12} component="div">
              <FormControl component="div" style={{ width: '100%' }}>
                <InputLabel htmlFor="component-simple">Телефон</InputLabel>
                <Input id="component-simple" value={this.state.phone} onChange={this.handleChange} name="phone" />
              </FormControl>
            </Grid>
            <Grid item xs={6} component="div">
              <FormControl component="div" style={{ width: '100%' }}>
                <InputLabel htmlFor="component-simple">Почтовый ящик</InputLabel>
                <Input id="component-simple" value={this.state.email} onChange={this.handleChange} name="email" />
              </FormControl>
            </Grid>
            <Grid item xs={6} component="div">
              <FormControl component="div" style={{ width: '100%' }}>
                <InputLabel htmlFor="component-simple">День рождения</InputLabel>
                <Input id="component-simple" value={this.state.birthday} onChange={this.handleChange} name="birthday" />
              </FormControl>
            </Grid>
            <Grid item xs={12} component="div">
              <FormControl component="div" style={{ width: '100%' }}>
                <InputLabel htmlFor="component-simple">Информация</InputLabel>
                <Input id="component-simple" value={this.state.information} onChange={this.handleChange} type="text" multiline name="information" />
              </FormControl>
            </Grid>
            <Grid item xs={6} component="div">
              <FormControl component="div" style={{ width: '100%' }}>
                <InputLabel htmlFor="component-simple">Instagram</InputLabel>
                <Input id="component-simple" value={this.state.instagram} onChange={this.handleChange} name="instagram" />
              </FormControl>
            </Grid>
            <Grid item xs={6} component="div">
              <FormControl component="div" style={{ width: '100%' }}>
                <InputLabel htmlFor="component-simple">Facebook</InputLabel>
                <Input id="component-simple" value={this.state.facebook} onChange={this.handleChange} name="facebook" />
              </FormControl>
            </Grid>
            <Grid container component="div" direction="row" justify="flex-end" style={{ marginTop: '20px' }}>
              <Button variant="contained" color="primary" style={{ margin: '10px' }} onClick={this.cancelAddCard}>
                            Отменить
              </Button>
              <Button variant="contained" color="primary" type={onsubmit} style={{ margin: '10px' }} onClick={this.handleSubmitSave}>
                {this.props.change ? 'Сохранить' : 'Добавить'}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      );
    }
}

export default AddNewContact;
