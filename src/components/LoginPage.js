import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import axios from "axios";

class LoginPage extends Component{
    constructor(){
        super();
        this.state={
            open: false,
            email:'',
            password:'',
            name:'',
            surname:'',
            isLogin: false,
        }
    }

    handleClickOpen = (e) => {
        e.preventDefault()
        this.setState({
            open: true,
        });
    };

    handleClose = (e) => {
        e.preventDefault()
        this.setState({ open: false });
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmitReg = event => {
        event.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            surname: this.state.surname,
        };
        axios.post('http://phonebook.hillel.it/api/users/register', data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if(response.status === 200){
                    this.setState({ open: false });
                    alert('ok')
                }else{
                    console.log('Error' , response)
                }
            })
        ;
    };

    handleSubmitLogin = event => {
        event.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password,
        };
        axios.post('http://phonebook.hillel.it/api/users/login', data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if(response.status === 200){
                    console.log('response', response);
                    this.setCookie(response.data.cookie.name, response.data.cookie.value, 1)
                    this.props.history.push("/");
                }else{
                    console.log('Error' , response)
                }
            })
    };

    setCookie = (name,value,days)=>{
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    };

    // handleSubmitLogin = (e) =>{
    //     e.preventDefault();
    //     const data = {
    //         email: this.state.email,
    //         password: this.state.password,
    //     };
    //    let request = fetch('http://phonebook.hillel.it/api/users/login',{
    //             method:'POST',
    //             headers:{
    //                 "Content-Type": 'application/json;charset=utf-8',
    //             },
    //             body: JSON.stringify(data),
    //             //credentials: 'include'
    //         }
    //     );
    //     request.then((response)=>{response.json().then((result) =>{
    //         console.log(result.cookie);
    //         if(result.message === 'Log in successful'){
    //             this.setCookie(result.cookie.name, result.cookie.value, 1)
    //             this.props.history.push("/");
    //         }else{console.log(result)}
    //          })
    //     }).catch((e)=>{
    //         console.log(e)
    //     });
    // };

    isLoggedIn = ()=>{
        this.props.login(this.state.isLogin)
    }


    // createLogin = ()=>{
    //     let request = fetch('http://phonebook.hillel.it/api/users/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: '{"email":"y.crai@shipnext.com","password":"12345667","name":"Yrii","surname":"Chrai"}'
    //     });
    //     request.then((response)=>{
    //         response.json().then((result)=>{
    //             if(result.status === 0){
    //                 console.log(result)
    //             }else{
    //                 console.log(result)
    //             }
    //         });
    //     }).catch((e)=>{
    //         console.log(e)
    //     });
    // };

    render() {
        return(
            <Grid
                container={true}
                justify="center"
                alignItems="center"
                component={'div'}
                style={{ height: '100vh' }}
            >
                <Grid
                    container={true}
                    component={'form'}
                    direction="column"
                    style={{
                        'max-width': '500px',
                        'min-width': '320px',
                        'border': '2px black solid',
                        'padding': '30px',
                    }}
                    onSubmit={this.handleSubmitLogin}
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
                        //className={classes.textField}
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
                            marginTop:40,
                        }}
                        type={onsubmit}
                    >
                        Войти
                    </Button>
                    <Grid
                        container={true}
                        component={'div'}
                        justify="space-around"
                        style={{
                            marginTop:30,
                        }}
                    >
                        <Button
                            component={'Button'}
                            size="small"
                            fullWidth={false}
                            style={{
                                marginTop:30,
                                'text-decoration': 'underline'
                            }}
                            onClick={this.handleClickOpen}
                        >
                            Зарегистрироваться
                        </Button>
                        <Button
                            component={'Button'}
                            size="small"
                            fullWidth={false}
                            style={{
                                marginTop:30,
                                'text-decoration': 'underline'
                            }}
                        >
                            Забыли пароль?
                        </Button>
                    </Grid>
                </Grid>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    disableBackdropClick='false'
                >
                    <DialogTitle id="form-dialog-title">
                        Регистрация пользователя
                    </DialogTitle>
                    <DialogContent>
                        <Grid
                            container={true}
                            component={'form'}
                            direction="column"
                            style={{
                                'width': 550,
                                'border': '1px black solid',
                                'padding': '30px',
                            }}
                            onSubmit={this.handleSubmitReg}
                        >
                            <TextField
                                id="outlined-with-placeholder"
                                label="Email"
                                placeholder="Введите ваш Email"
                                margin="normal"
                                name="email"
                                variant="outlined"
                                //value={this.state.date}
                                onChange={this.handleChange}
                            />
                            <TextField
                                id="outlined-with-placeholder"
                                label="Пароль"
                                placeholder="Введите ваш пароль"
                                margin="normal"
                                type='password'
                                name="password"
                                variant="outlined"
                                //value={this.state.date}
                                onChange={this.handleChange}
                            />
                            <TextField
                                id="outlined-with-placeholder"
                                label="Имя"
                                placeholder="Введите ваше имя"
                                margin="normal"
                                name="name"
                                variant="outlined"
                                //value={this.state.date}
                                onChange={this.handleChange}
                            />
                            <TextField
                                id="outlined-with-placeholder"
                                label="Фамилия"
                                placeholder="Введите вашу фамилию"
                                margin="normal"
                                name="surname"
                                variant="outlined"
                                //value={this.state.date}
                                onChange={this.handleChange}
                            />
                            <DialogActions
                            >
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
        )
    }
}

//export default withRouter (LoginPage);
export default LoginPage;