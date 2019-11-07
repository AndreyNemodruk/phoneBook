import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import LeftBar from "./leftBar";
import AddNewContact from "./AddNewContact";
import AllContacts from "./AllContacts";
import {Route} from "react-router-dom";


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

class PhoneBook extends Component{
    constructor(){
        super();
        this.state={
            contacts:[],
            options: [
                'None',
                'Atria',
                'Callisto',
                'Dione',
            ],
            idChangeCard: "",
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
    }



    render() {
        return(
            <Grid container spacing={1} direction='row' wrap='nowrap' alignItems="stretch" justify="center" component={'div'} style={{ height: '100vh', paddingLeft:10}}>
                <Route render = {(props) => <LeftBar {...props} addNewCard={this.addNewCard}/>}/>
                <Route exact path="/" render = {(props) => <AllContacts {...props} ifChange = {this.ifChange} change = {false}/> }/>
                <Route  path="/addCard" render = {(props)=> <AddNewContact {...props} change = {false} /> }/>
                <Route
                    path="/changeCard" render = {(props) => <AddNewContact {...props} change = {true} idChangeCard={this.state.idChangeCard} />}
                />
            </Grid>
        )
    }
}

export default PhoneBook;