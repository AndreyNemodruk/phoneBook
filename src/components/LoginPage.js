import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { handleSubmitLogin, handleSubmitReg } from '../requests';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      email: '',
      password: '',
      name: '',
      surname: '',
    };
  }

    handleClickOpen = (e) => {
      e.preventDefault();
      this.setState({
        open: true,
      });
    };

    handleClose = (e) => {
      e.preventDefault();
      this.setState({ open: false });
    };

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };

    submitReg = (e) => {
      const {
        email, password, name, surname,
      } = this.state;
      handleSubmitReg(e, email, password, name, surname)
        .then((response) => {
          if (response.status === 200) {
            this.setState({ open: false }, () => this.submitLogin(e));
          }
        }).catch(()=>alert('Отсутствует связь с сервером'));
    };

    setCookie = (name, value, days) => {
      let expires = '';
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
      }
      document.cookie = `${name}=${value || ''}${expires}; path=/`;
    };

    submitLogin = (e) => {
      const { email, password } = this.state;
      handleSubmitLogin(e, email, password).then((response) => response.json().then((result) => {
        if (result.message === 'Log in successful') {
          this.setCookie(`${result.cookie.name}LogIn`, result.cookie.value, 0.15);
          this.props.history.push('/');
        } else { alert('Неверно введен пароль или логин'); }
      })).catch(() => alert('отсутствует связь с сервером'));
    };

    render() {
      return (
        <Grid
          container
          justify="center"
          alignItems="center"
          component="div"
          style={{ height: '100vh' }}
        >
          <Grid
            container
            component="form"
            direction="column"
            style={{
              'max-width': '500px',
              'min-width': '320px',
              border: '2px black solid',
              padding: '30px',
            }}
            onSubmit={this.submitLogin}
          >
            <Typography
              component="h2"
              variant="headline"
              gutterBottom
              style={{
                marginBottom: 30,
              }}
            >
                        Авторизация
            </Typography>
            <TextField
              id="outlined-with-placeholder"
              label="Логин"
              placeholder="Введите логин"
                        // className={classes.textField}
              margin="normal"
              name="email"
              variant="outlined"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <TextField
              id="outlined-with-placeholder"
              label="Пароль"
              placeholder="Введите пароль"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
              style={{
                marginTop: '30px',
              }}
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              style={{
                height: 50,
                marginTop: 40,
              }}
              type={onsubmit}
            >
                        Войти
            </Button>
            <Grid
              container
              component="div"
              justify="space-around"
              style={{
                marginTop: 30,
              }}
            >
              <Button
                component="Button"
                size="small"
                fullWidth={false}
                style={{
                  marginTop: 30,
                  'text-decoration': 'underline',
                }}
                onClick={this.handleClickOpen}
              >
                            Зарегистрироваться
              </Button>
              <Button
                component="Button"
                size="small"
                fullWidth={false}
                style={{
                  marginTop: 30,
                  'text-decoration': 'underline',
                }}
              >
                            Забыли пароль?
              </Button>
            </Grid>
          </Grid>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            disableBackdropClick="false"
          >
            <DialogTitle id="form-dialog-title">
                        Регистрация пользователя
            </DialogTitle>
            <DialogContent>
              <Grid
                container
                component="form"
                direction="column"
                style={{
                  width: 550,
                  border: '1px black solid',
                  padding: '30px',
                }}
                onSubmit={this.submitReg}
              >
                <TextField
                  id="outlined-with-placeholder"
                  label="Email"
                  placeholder="Введите ваш Email"
                  margin="normal"
                  name="email"
                  variant="outlined"
                                // value={this.state.date}
                  onChange={this.handleChange}
                />
                <TextField
                  id="outlined-with-placeholder"
                  label="Пароль"
                  placeholder="Введите ваш пароль"
                  margin="normal"
                  type="password"
                  name="password"
                  variant="outlined"
                                // value={this.state.date}
                  onChange={this.handleChange}
                />
                <TextField
                  id="outlined-with-placeholder"
                  label="Имя"
                  placeholder="Введите ваше имя"
                  margin="normal"
                  name="name"
                  variant="outlined"
                                // value={this.state.date}
                  onChange={this.handleChange}
                />
                <TextField
                  id="outlined-with-placeholder"
                  label="Фамилия"
                  placeholder="Введите вашу фамилию"
                  margin="normal"
                  name="surname"
                  variant="outlined"
                                // value={this.state.date}
                  onChange={this.handleChange}
                />
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary" variant="contained">
                                    Отменить
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    type={onsubmit}
                  >
                                    Отправить
                  </Button>
                </DialogActions>
              </Grid>
            </DialogContent>

          </Dialog>
        </Grid>
      );
    }
}

export default LoginPage;
