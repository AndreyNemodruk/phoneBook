import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from "@material-ui/core/Toolbar";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import axios from "axios";
import uuid from 'uuid';

const classes = {
    AppBar:{
        root:{
            flexGrow: 1,
        },
        menuButton: {
            marginRight:2,
        },
        title: {
            flexGrow: 1,
        },
    },

    formControl: {
    },
    textField:{

    },
    avatar: {
        margin: 20,
        width: 60,
        height: 60,
    },

}


class AddNewContact extends Component{
    constructor(){
        super();
        this.state={
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
            image:'',
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    cancelAddCard = (e) =>{
        e.preventDefault()
        this.props.history.push("/");

    };

    // isLoggedIn = ()=> {
    //     return console.log(this.getCookie('sessionId'));
    // };

    // getCookie = (name) => {
    //     let matches = document.cookie.match(new RegExp(
    //         "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    //     ));
    //     return matches ? decodeURIComponent(matches[1]) : undefined;
    // };

    // handleSubmitSave = event => {
    //     event.preventDefault();
    //     let id = uuid();
    //     const data = {
    //         email: [this.state.email],
    //         phone: [
    //             {
    //                 //_id: id,
    //                 category: 'Work',
    //                 value: this.state.phone,
    //             }
    //         ],
    //         bornDate: this.state.birthday,
    //         category: id,
    //         name: this.state.name,
    //         surname: this.state.surname,
    //         information: this.state.information,
    //         position: this.state.description,
    //         instagram: this.state.instagram,
    //         facebook: this.state.facebook
    //     };
    //     //const data1 = JSON.stringify(data)
    //     axios.post('https://phonebook.hillel.it/api/phonebook', data, {
    //
    //         headers: {
    //             "Content-Type": 'application/x-www-form-urlencoded',
    //         },
    //         withCredentials:true
    //     })
    //         .then(response => {
    //             if(response.status === 200){
    //                 console.log(response);
    //                 this.props.history.push("/");
    //             }else{
    //                 console.log('Error' , response)
    //             }
    //         })
    //     ;
    // };

    getCookie = (name)=> {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return console.log (c.substring(nameEQ.length, c.length));
            c.substring(nameEQ.length, c.length);

        }

        return null;
    };


    handleSubmitSave = (e) =>{
        e.preventDefault();
        let id = uuid();
        const data = {
                    //email: [this.state.email],
                    //phone: [
                    //     {
                    //         _id: '',
                    //         category: 'mobile',
                    //         value: this.state.phone,
                    //     }
                    // ],
                    // bornDate: this.state.birthday,
                    // category: id,
                    name: this.state.name,
                    surname: this.state.surname,
                    // information: this.state.information,
                    // position: this.state.description,
                    // instagram: this.state.instagram,
                    // facebook: this.state.facebook,
                    // image: this.state.image,
                };
        let request = fetch('http://phonebook.hillel.it/api/phonebook',{
                credentials: 'include',
                method:'POST',
                // headers:{
                //     'Content-Type': "application/json",
                // },
                body: JSON.stringify({"name":"andru", "surname":"nemodruk"}),
            }

        );
        request.then((response)=>{
            response.json().then((result) =>{
            console.log(result.message, JSON.stringify(data));
            })
        }).catch((e)=>{
            console.log(e)
        });
    };


    render() {
        return(
            <Grid item xs={9} component={'div'}>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container component={'div'} direction='row' justify='space-between' alignItems='center' >
                            <Typography variant="h6" className={classes.AppBar.title}>
                                Добавить новый контакт
                            </Typography>
                            <IconButton edge="start" className={classes.AppBar.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid container component={'form'} spacing={3} style={{padding: '10px', marginTop: '10px'}} onSubmit={this.handleSubmitSave}>
                    <Grid item xs={2} component={'div'} justify='center'>
                            <InputLabel htmlFor="ava">
                                <Grid container justify="center" alignItems="center" component={'div'}>
                                    <Avatar alt="Remy Sharp" src="https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/234/avatarka_dlya_instagram_primery_15.jpg" style={{cursor: 'pointer',height:'60px', width:'60px'}}/>
                                </Grid>
                            </InputLabel>
                            <Input id="ava" value={this.state.image} onChange={this.handleChange} name='image' type='file' style={{display:'none'}}/>
                    </Grid>
                    <Grid container spacing={3} component={'div'} xs={10}>
                        <Grid item xs={6} component={'div'}>
                            <FormControl component={'div'} className={classes.formControl} style={{ width: '100%'}}>
                                <InputLabel htmlFor="component-simple">Имя</InputLabel>
                                <Input id="component-simple" value={this.state.name} onChange={this.handleChange} name='name'/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} component={'div'}>
                            <FormControl component={'div'} className={classes.formControl} style={{ width: '100%'}}>
                                <InputLabel htmlFor="component-simple">Фамилия</InputLabel>
                                <Input id="component-simple" value={this.state.surname} onChange={this.handleChange} name='surname'/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} component={'div'}>
                            <FormControl component={'div'} className={classes.formControl} style={{ width: '100%'}}>
                                <InputLabel htmlFor="component-simple">Описание</InputLabel>
                                <Input id="component-simple" value={this.state.description} onChange={this.handleChange} type='text' multiline name='description'/>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container component={'div'} spacing={3} style={{padding: '20px'}}>
                    <Grid item xs={12} component={'div'}>
                        <FormControl component={'div'} className={classes.formControl} style={{ width: '100%'}}>
                            <InputLabel htmlFor="component-simple">Телефон</InputLabel>
                            <Input id="component-simple" value={this.state.phone} onChange={this.handleChange} name='phone'/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} component={'div'}>
                        <FormControl component={'div'} className={classes.formControl} style={{ width: '100%'}}>
                            <InputLabel htmlFor="component-simple">Почтовый ящик</InputLabel>
                            <Input id="component-simple" value={this.state.email} onChange={this.handleChange} name='email'/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} component={'div'}>
                        <FormControl component={'div'} className={classes.formControl} style={{ width: '100%'}}>
                            <InputLabel htmlFor="component-simple">День рождения</InputLabel>
                            <Input id="component-simple" value={this.state.birthday} onChange={this.handleChange} name='birthday'/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} component={'div'}>
                        <FormControl component={'div'} className={classes.formControl} style={{ width: '100%'}}>
                            <InputLabel htmlFor="component-simple">Информация</InputLabel>
                            <Input id="component-simple" value={this.state.information} onChange={this.handleChange} type='text' multiline name='information'/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} component={'div'}>
                        <FormControl component={'div'} className={classes.formControl} style={{ width: '100%'}}>
                            <InputLabel htmlFor="component-simple">Instagram</InputLabel>
                            <Input id="component-simple" value={this.state.instagram} onChange={this.handleChange} name='instagram'/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} component={'div'}>
                        <FormControl component={'div'} className={classes.formControl} style={{ width: '100%'}}>
                            <InputLabel htmlFor="component-simple">Facebook</InputLabel>
                            <Input id="component-simple" value={this.state.facebook} onChange={this.handleChange} name='facebook'/>
                        </FormControl>
                    </Grid>
                    <Grid container xs={12} component={'div'} direction='row' justify='flex-end' style={{marginTop: '20px'}}>
                        <Button variant="contained" color="primary" style={{margin: '10px'}} onClick={this.cancelAddCard}>
                            Отменить
                        </Button>
                        <Button variant="contained" color="primary" type={onsubmit} style={{margin: '10px'}} onClick={this.handleSubmitSave}>
                            Сохранить
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default AddNewContact;