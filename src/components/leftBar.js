import React, {Component} from "react";
import styled from 'styled-components';
import UserAvatar from "../ui/Avatar/Avatar";
import Button from "../ui/ButtonMenu/ButtonMenu";


const SideBarWrap = styled.div`{
    grid-area: sidebar;
    box-sizing: border-box;
    align-items:stretch;
    width: 100%;
    background-image: linear-gradient(to top, #485173 0%, #24283e 100%);
}`;

const HeadlineBar = styled.h1`{
    color: #ffffff;
    font-size: 32px;
    font-weight: 400;
    margin: 24px 81px 0 56px;
}`;

const BlockUser = styled.section`{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 57px 0 0 55px;
    width: 220px;
}`;

const UserInfo = styled.div`{
    display:flex;
    flex-direction:column;
    margin-left: 14px;
    width: 140px;
}`;

const UserName = styled.span`{
    width: 140px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
}`;
    
const ButtonLogOut = styled.button`{
    width: 60px;
    color: #8992ca;
    font-size: 12px;
    font-weight: 400;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    text-align: left;
    margin-top: 13px;
     &:hover{
            text-decoration: underline;
            color: #ffffff;
        }
}`;

const ButtonMenu = styled.button`{
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display:flex;
    align-self: flex-start;
        svg{
            margin-top: 2px;
            width:16px;
            color: rgba(255, 255, 255, 0.5);
            &:hover{
                color: white; 
            }
        };
      
}`;

const BlockSearch = styled.div`{
    width: 222px;
    height: 32px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    display: flex;
    margin: 57px 0 0 55px;
    align-items: center;
}`;

const InputSearch = styled.input`{
    height: 100%;
    background: none;
    border: 0;
    padding-left: 17px;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    &:focus{
        outline: none;
    }
}`;

const ButtonSearch = styled.button`{
    width:18px;
    height: 18px;
    padding: 0;
    border:none;
    background: none;
    &:focus{
        outline: none;
    }
    svg{
        margin-top: 2px;
        width:16px;
        color: rgba(255, 255, 255, 0.5);
        &:hover{
            color: white; 
        }
    };
}`;

const ListCategoriesWrap = styled.div`{
    height: 192px;
    overflow: auto; 
    margin-top: 19px;  
}`;

const HeadlineSideBar = styled.h2`{
    width: 200px;
    height: 10px;
    color: #8992ca;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 35px 0 5px 55px;
}`;

const ListCategories = styled.ul`{
    padding: 0;
    margin: 0;
}`;

const ItemCategories = styled.li`{
    list-style: none;
    position:relative;
    display: flex;
    
}`;

const ButtonCategories = styled.button`{
    width: 100%;
    height: 48px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 400;
    line-height: 48px;
    background: none;
    padding-left: 55px;
    text-align: left;
    box-sizing: border-box;
    border: none;
    cursor:pointer;
    outline: none;
    border-left: 3px solid transparent;
    &:hover{
        border-left: 3px solid #02bbf1;
    }
    &:focus{
        border-left: 3px solid #02bbf1;
    }
    &:hover:before{
        content: "";
        display:block;
        position:absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(to right, #7e8eda 0%, rgba(255, 255, 255, 0) 100%);
        opacity: 0.13;
    }
    &:focus:before{
        content: "";
        display:block;
        position:absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(to right, #7e8eda 0%, rgba(255, 255, 255, 0) 100%);
        opacity: 0.13;
    }
}`;

const BirthDayWrap = styled.div`{
    height: 236px;
    width: 222px;
    margin: 0 auto;
}`;

const BirthdayItemWrap = styled.div`{
    height:30px;
    display: flex;
    justify-content: space-between;
    margin-top: 23px;
}`;

const BirthdayInfoWrap = styled.div`{
    
}`;


const BirthName = styled.h2`{
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    margin:0;
}`;

const BirthDayAge = styled.span`{
    opacity: 0.5;
    color: #ffffff;
    font-size: 10px;
    font-weight: 400;
}`;

const BirthdayDate = styled.span`{
    color: #ffffff;
    font-size: 10px;
    font-weight: 500;
    line-height: 24px;
    text-transform: uppercase;
}`;

const NewContactBlock = styled.div`{
    margin: 0 auto;
    height: 57px;
    width: 222px;
    border-top: 1px solid #9699a5;
    
}`;

const AddButton = styled.button`{
    background:none;
    cursor: pointer;
    outline: none;
    display:flex;
    align-items: center;
    border: none;
    color: #ffffff;
    margin-top: 17px;
    &:hover{
       text-decoration: underline; 
    }
}`;

const AddButtonIcon = styled.div`{
    width: 23px;
    height: 23px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    padding: 4px;
    box-sizing: border-box;
    svg{
        width: 13px;
    }
}`;

const AddButtonText = styled.span`{
    font-size: 15px;
    font-weight: 400;
    margin-left: 11px;
}`;


class LeftBar extends Component{
    constructor(){
        super();
        this.state={
            name: 'Andrey',
            surname:'Nemodruk',
            categories:[],
            search:'',
            selectCat:'',
            birthday: [
                {name: 'Andrey', surname: 'Nemodruk', date: 'TODAY', age: 'исполняется 58 лет' },
                {name: 'Maxim', surname: 'Lyubavsky', date: '30.01.2000', age: 'исполняется 30 лет' },
                {name: 'Oleksandr', surname: 'Melnyk', date: '25.02.2011', age: 'исполняется 58 лет' },
                {name: 'Andrey', surname: 'Nemodruk', date: '24.12.1997', age: 'исполняется 58 лет' }
                ]
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
                });
                this.props.getAllCategories(response)
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
                <HeadlineBar>
                    Contact Book
                </HeadlineBar>
                <BlockUser>
                    <UserAvatar />
                    <UserInfo>
                        <UserName>{`${this.state.name} ${this.state.surname}`} </UserName>
                        <ButtonLogOut onClick={this.logout}>Log out</ButtonLogOut>
                    </UserInfo>
                    <Button />
                </BlockUser>
                <BlockSearch>
                    <ButtonSearch>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451 451">
                            <path fill="currentColor" d="M447.05 428l-109.6-109.6c29.4-33.8 47.2-77.9 47.2-126.1C384.65 86.2 298.35 0 192.35 0 86.25 0 .05 86.3.05 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126.1-47.2L428.05 447c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.2-5.2 5.2-13.8 0-19zM26.95 192.3c0-91.2 74.2-165.3 165.3-165.3 91.2 0 165.3 74.2 165.3 165.3s-74.1 165.4-165.3 165.4c-91.1 0-165.3-74.2-165.3-165.4z"/>
                        </svg>
                    </ButtonSearch>
                    <InputSearch
                        type='text'
                        placeholder='Search a contact'
                        value={this.state.search}
                        onChange={this.handleChange}
                        name='search'
                    />
                </BlockSearch>
                <HeadlineSideBar>Categories</HeadlineSideBar>
                <ListCategoriesWrap>
                    <ListCategories>
                        <ItemCategories>
                            <ButtonCategories>All Contacts</ButtonCategories>
                            <Button style={{'align-self': 'center', 'margin-right':'20px'}}/>
                        </ItemCategories>
                        {this.state.categories.map(item => (
                            <ItemCategories>
                                <ButtonCategories id={item.name} onClick={this.buttonClick}>{item.name}</ButtonCategories>
                                <Button style={{'align-self': 'center', 'margin-right':'20px'}}/>
                            </ItemCategories>
                        ))}
                    </ListCategories>
                </ListCategoriesWrap>
                <HeadlineSideBar>coming birthday</HeadlineSideBar>
                <BirthDayWrap>
                    {this.state.birthday.map(item => (
                        item.date === 'TODAY' ?
                            <BirthdayItemWrap>
                                <BirthdayInfoWrap>
                                    <BirthName>{`${item.name} ${item.surname}`}</BirthName>
                                    <BirthDayAge>{item.age}</BirthDayAge>
                                </BirthdayInfoWrap>
                            <BirthdayDate>{item.date}</BirthdayDate>
                            </BirthdayItemWrap>
                            :
                            <BirthdayItemWrap style={{"opacity" : 0.3}}>
                                <BirthdayInfoWrap>
                                    <BirthName>{`${item.name} ${item.surname}`}</BirthName>
                                    <BirthDayAge style={{"opacity" : 1}}>{item.age}</BirthDayAge>
                                </BirthdayInfoWrap>
                                <BirthdayDate>{item.date}</BirthdayDate>
                            </BirthdayItemWrap>))}
                </BirthDayWrap>
                <NewContactBlock>
                    <AddButton onClick={this.props.addNewCard}>
                        <AddButtonIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42">
                                <path fill="currentColor" d="M42 20H22V0h-2v20H0v2h20v20h2V22h20z"/>
                            </svg>
                        </AddButtonIcon>
                        <AddButtonText>New Contact</AddButtonText>
                    </AddButton>
                </NewContactBlock>
            </SideBarWrap>
        )
    }
}

export default LeftBar;