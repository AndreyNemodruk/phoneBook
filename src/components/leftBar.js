import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import styled from 'styled-components';



// const ButtonNavigation = styled.button`
//     &:hover .month__next, &:hover .month__prev{
//     background-color: ${data => (
//     data.theme.calendar.hoverColor
// )};
//     }
// `;

const SideBarWrap = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    box-sizing: border-box;
    width: 332px;
    height:861px;
    background-image: linear-gradient(to top, #485173 0%, #24283e 100%);
}`;

const HeadlineBar = styled.h1`{
    color: #ffffff;
    font-size: 32px;
    font-weight: 400;
    margin: 24px 81px 0 56px;
}`;

const BlockUser = styled.section`{
    width: 222px:
    display:flex;
    flex-direction: row;
    
}`;

const UserAvatar = styled.div`{
    width:48px;
    border: 1px solid #ffffff;
    height: 48px;
    border-radius: 50%;
    background-size: cover;
    background-image: url("https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/234/avatarka_dlya_instagram_primery_15.jpg")
}`;

const UserInfo = styled.div`{
    
}`;

const UserName = styled.span`{
    
}`;

const ButtonLogOut
const styles = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: 8,
        flex: 1,

    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
    list: {
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: '#e0f2f1',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
        }
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    listSubheader:{
        backgroundColor: '#3f51b5',
        color: '#fafafa',
        fontSize: 16,
    }
};
class LeftBar extends Component{
    constructor(){
        super();
        this.state={
            name: '',
            surname:'',
            categories:[],
            search:'',
            selectCat:'',
        }
    }

    componentDidMount() {
        let ContactDataPromise=fetch('http://phonebook.hillel.it/api/categories?',{
            credentials: 'include'
        });
        ContactDataPromise.then(response=>{
            response.json().then(response=>{
                this.setState({
                    categories:response
                }, ()=> console.log(this.state))
            })
        }).catch((e)=>{
            console.log(e);
            this.props.history.push("/login")
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        }, ()=>console.log(this.state.selectCat));
    };

    deleteCookie =( name )=> {
        document.cookie = name + '=; expires=Thu, 01 Jan 1900 00:00:01 GMT;';
    };

    buttonClick = event =>{
        this.setState({
            selectCat: event.target.id
        }, ()=>console.log(event, this.state.selectCat));
    };

    logout = (e) =>{
        e.preventDefault();
        this.deleteCookie('sessionId1')
        this.props.history.push("/")

    };

    render() {
        return(
            <SideBarWrap>
            {/*<Grid item xs={3} component={'div'} style={{minWidth: '210px'}} alignContent={"space-between"}>*/}
                <HeadlineBar>
                    Contact Book
                </HeadlineBar>
                <BlockUser container component={'div'} direction={"row"} wrap={"nowrap"} style={{marginBottom:'15px'}}>
                    <UserAvatar />
                    <Grid component={'div'} container direction={"column"} alignContent={"flex-start"}>
                        <Typography gutterBottom component="p" style={{fontSize:"inherit", paddingLeft:20}}>
                            Will Smith
                        </Typography>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={this.logout}
                        >
                            Выйти
                        </Link>
                    </Grid>
                </BlockUser>
                <Grid component={'div'} container style={{marginBottom:20}}>
                    <Paper elevation={1} style={styles.root}>
                        <InputBase value={this.state.search} onChange={this.handleChange} name='search' placeholder="Поиск контакта" style={styles.input} />
                        <IconButton aria-label="Search" style={styles.iconButton}>
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid component={'div'} container style={{paddingBottom:75}}>
                    <List subheader={<li />} style={styles.list.root}>
                        <ListSubheader style={styles.listSubheader}>Категории</ListSubheader>
                        <ListItem button id={'AllContact'} onClick={this.buttonClick}>
                            <ListItemText primary={'Все контакты'} />
                        </ListItem>
                        {this.state.categories.map(item => (
                        <ListItem button id={item.name} onClick={this.buttonClick}>
                            <ListItemText primary={item.name} id={item.name} onClick={this.buttonClick}/>
                        </ListItem>
                        ))}

                    </List>
                </Grid>
                <Grid container component={'div'} direction='row' justify='flex-start' alignItems='center' >
                    <Fab size="small" color="primary" aria-label="add" onClick={this.props.addNewCard}>
                        <AddIcon />
                    </Fab>
                    <Typography component='p' style={{marginLeft: '10px'}}>
                        Новый контакт
                    </Typography>
                </Grid>
            {/*</Grid>*/}
            </SideBarWrap>

        )
    }
}

export default LeftBar;