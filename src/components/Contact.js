import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import UserAvatar from "../ui/Avatar/Avatar";
import Button from "../ui/ButtonMenu/ButtonMenu";
import styled from 'styled-components';

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

const ButtonMenu = styled.button`{
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display:flex;
    align-self: flex-start;
    color: #9b9b9b;
    position: relative;
    &:focus{
        outline:none;
    };
        svg{
            margin-top: 2px;
            width:16px;
            &:hover{
                color: black; 
            }
        };
      
}`;

const DropMenu = styled.ul`{
    margin: 0;
    padding: 0 10px;
    width:175px;
    box-shadow: 0 0 10px rgba(48, 54, 80, 0.2);
    background-color: #2c314a;
    border-radius: 5px;
    z-index:10;
    position:absolute;
}`;

const DropMenuItem = styled.li`{
    list-style:none;
    height:28px;
    width:100%;
    :not(:last-child){
        border-bottom: 1px solid #ffffff;
    }
    
}`;

const DropMenuItemButton = styled.button`{
    width:100%;
    height:100%;
    background: none;
    border: none;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    position: relative;
    cursor: pointer;
    :hover{
        text-decoration: underline; 
    }
    :focus{
        outline: none;
    }
}`;

const ButtonIcon = styled.div`{
    width:6px;
    height: 6px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right:0;
    :before{
        content:"";
        display:block;
        height: 5px;
        width: 1px;
        background-color: #ffffff;
        position: absolute; 
        top:0;
        left:0;
        transform: rotate(45deg) translate(2px, -2px);
    };
    :after{
        content:"";
        display:block;
        height: 5px;
        width: 1px;
        background-color: #ffffff;
        position: absolute;
        top:0;
        left:0;
        transform: rotate(-45deg)
    }
}`;

// const classes = {
//     card: {
//
//     },
// };

class Contact extends Component{
    constructor(){
        super();
        this.state={
            anchorEl: null,
            menuAddCat: false,
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef = (node)=> {
        this.wrapperRef = node;
    };

    handleClickOutside = (event)=> {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.handleClose()
        }
    };

    toggleMenuGroup = () =>{
        this.setState((prevState)=>({menuAddCat:!this.state.menuAddCat}))
    };

    handleClick = event => {
       this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    deleteCard = (e) =>{
        e.preventDefault();
        this.setState({ anchorEl: null},()=>{console.log(this.state)});
        let id=this.props.id;
        let request = fetch(`http://phonebook.hillel.it/api/phonebook/${id}`,{
                credentials: 'include',
                method:'DELETE',
            }
        );
        request.then((response)=>{
            response.json().then((result) =>{
                console.log(result.message);
            })
        }).catch((e)=>{
            console.log(e)
        });
    };

    changedCard = ()=>{
        let id = this.props.id;
        this.props.changedCard(id);
        this.setState({ anchorEl: null});
    };



    render() {
        return(
            <ContactWrap >
                    <UserAvatar/>
                    <div style={{display: 'flex', 'flex-direction': 'column'}}>
                        <ContactName>
                            {`${this.props.name} ${this.props.surname}`}
                        </ContactName>
                        <ContactInfo>
                            Some text here
                        </ContactInfo>
                    </div>
                    <div>
                        <ButtonMenu
                            onClick={this.handleClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                <path fill="currentColor" d="M55.636 250.364C24.907 250.364 0 275.27 0 306c0 30.73 24.907 55.636 55.636 55.636S111.273 336.73 111.273 306c0-30.73-24.907-55.636-55.637-55.636zm259.637 0c-30.73 0-55.636 24.907-55.636 55.636 0 30.729 24.907 55.636 55.636 55.636 30.729 0 55.636-24.905 55.636-55.636 0-30.73-24.906-55.636-55.636-55.636zm241.091 0c-30.73 0-55.636 24.907-55.636 55.636 0 30.729 24.906 55.636 55.636 55.636C587.093 361.636 612 336.73 612 306c0-30.73-24.907-55.636-55.636-55.636z"/>
                            </svg>
                        </ButtonMenu>
                        { this.state.anchorEl  ?
                        <DropMenu
                            ref={this.setWrapperRef}>{this.props.children}

                            <DropMenuItem>
                                <DropMenuItemButton onClick={this.changedCard}>
                                    Edit contact
                                </DropMenuItemButton>
                            </DropMenuItem>
                            <DropMenuItem>
                                <DropMenuItemButton onClick={this.deleteCard}>
                                    Delete
                                </DropMenuItemButton>
                            </DropMenuItem>
                            <DropMenuItem>
                                <DropMenuItemButton onClick={this.handleClose}>
                                    Create Group
                                </DropMenuItemButton>
                            </DropMenuItem>
                            <DropMenuItem onMouseOver = {this.toggleMenuGroup} onMouseOut={this.toggleMenuGroup}>
                                <DropMenuItemButton>
                                    Add to group
                                    <ButtonIcon/>
                                </DropMenuItemButton>
                                {this.state.menuAddCat ?
                                    <DropMenu>
                                        {this.props.categories.map(item => (
                                            <DropMenuItem>
                                                <DropMenuItemButton>
                                                {item.name}
                                                </DropMenuItemButton>
                                            </DropMenuItem>
                                        ))}
                                    </DropMenu>
                                    : null}
                            </DropMenuItem>
                        </DropMenu>
                            :
                            null
                        }
                        {/*<IconButton*/}
                        {/*    aria-owns={anchorEl ? 'simple-menu' : undefined}*/}
                        {/*    aria-haspopup="true"*/}
                        {/*    onClick={this.handleClick}*/}
                        {/*>*/}
                        {/*    <MoreVertIcon fontSize={'small'}/>*/}
                        {/*</IconButton>*/}
                        {/*<Menu*/}
                        {/*    id="simple-menu"*/}
                        {/*    anchorEl={anchorEl}*/}
                        {/*    open={Boolean(anchorEl)}*/}
                        {/*    onClose={this.handleClose}*/}
                        {/*>*/}
                        {/*    <MenuItem*/}
                        {/*        onClick={this.changedCard}*/}
                        {/*        style={{fontSize:12}}*/}
                        {/*    >*/}
                        {/*        Изменить контакт*/}
                        {/*    </MenuItem>*/}
                        {/*    <MenuItem*/}
                        {/*        onClick={this.deleteCard}*/}
                        {/*        style={{fontSize:12}}*/}
                        {/*    >*/}
                        {/*        Удалить контакт*/}
                        {/*    </MenuItem>*/}
                        {/*    <MenuItem*/}
                        {/*        onClick={this.handleClose}*/}
                        {/*        style={{fontSize:12}}*/}
                        {/*    >*/}
                        {/*        Создать группу*/}
                        {/*    </MenuItem>*/}
                        {/*    <MenuItem*/}
                        {/*        style={{fontSize:12}}*/}
                        {/*        onClick={this.handleClose}*/}
                        {/*    >*/}
                        {/*        Добавить в группу*/}
                        {/*    </MenuItem>*/}
                        {/*</Menu>*/}
                    </div>
                {/*<Grid component={'div'}>*/}
                {/*    <Typography gutterBottom  component="p" style={{fontSize:12, padding:5}}>*/}
                {/*        {`телефон: ${this.props.phone}`}*/}
                {/*    </Typography>*/}
                {/*    <Typography gutterBottom component="p" style={{fontSize:12, padding:5}}>*/}
                {/*        ikibana2@gmail.com*/}
                {/*    </Typography>*/}
                {/*</Grid>*/}
            </ContactWrap>
        )
    }
}
export default Contact;