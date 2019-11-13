import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import LeftBar from "./leftBar";
import AddNewContact from "./AddNewContact";
import AllContacts from "./AllContacts";
import {Route} from "react-router-dom";
import styled from 'styled-components';

// const classes = {
//     AppBar:{
//         root:{
//             flexGrow: 1,
//         },
//         menuButton: {
//             marginRight:2,
//         },
//         title: {
//             flexGrow: 1,
//         },
//     },
//     fab: {
//         margin: 1,
//     },
//     text:{
//         color: 'primary',
//     },
//
// }

const GridWrap = styled.div`{
    display: grid
    grid-template-areas:
    "sidebar main"
    "sidebar main";
    grid-template-rows: 73px 1fr ;
    grid-template-columns: 332px 1fr;
    grid-gap: 0;
}`;
class PhoneBook extends Component{
    constructor(){
        super();
        this.state={
            contacts:[],
            idChangeCard: "",
            categories:[],

        }
    }

    // componentDidMount() {
    //     let ContactDataPromise=fetch('http://phonebook.hillel.it/api/phonebook?',{
    //         credentials: 'include'
    //     });
    //     ContactDataPromise.then(response=>{
    //         response.json().then(response=>{
    //             this.setState({
    //                 contacts:response,
    //             }, ()=> console.log(this.state))
    //         })
    //     })
    // }

    addNewCard = (e)=>{
        e.preventDefault()
        this.props.history.push("/addCard");
    };

    ifChange = (id) =>{
        this.props.history.push("/changeCard");
        this.setState({
            idChangeCard:id,
        },()=>console.log('phone',this.state))
    };

    getAllCategories = (categories) =>{
        this.setState({categories: categories})
    }



    render() {
        return(
            <GridWrap>
            {/*<Grid container spacing={1} direction='row' wrap='nowrap' alignItems="stretch" justify="center" component={'div'} style={{ height: '100vh', paddingLeft:10}}>*/}
                <Route render = {(props) => <LeftBar {...props} addNewCard={this.addNewCard} getAllCategories = {this.getAllCategories}/>}/>
                <Route exact path="/" render = {(props) => <AllContacts {...props} ifChange = {this.ifChange} change = {false} allCategories={this.state.categories}/> }/>
                <Route  path="/addCard" render = {(props)=> <AddNewContact {...props} change = {false} /> }/>
                <Route
                    path="/changeCard" render = {(props) => <AddNewContact {...props} change = {true} idChangeCard={this.state.idChangeCard} />}
                />
            {/*</Grid>*/}
            </GridWrap>
        )
    }
}

export default PhoneBook;