import React, { Component } from 'react';
import styled from 'styled-components';
import Icons from '../img/icons';

const WrapDropMenu = styled.div`{
    display:flex;
    position: relative;
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
    left: ${(props) => (props.type === 'dropMenuContact' ? '0' : 'auto')};
    top: ${(props) => (props.type === 'dropMenuContact' ? '20px' : '35px')};
    right: ${(props) => (props.type === 'dropMenuContact' ? '0' : '20px')};
}`;

const DropMenuItem = styled.li`{
    list-style:none;
    height:28px;
    width:100%;
    position: relative;
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
    right: 2px;
    bottom:8px;
    display:flex;
    z-index: 20;
    justify-content: center;
    &:hover{
      transform: rotate(180deg) translateY(3px);
    }
}`;

const ButtonMenu = styled.button`{
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display:flex;
    align-self: ${(props) => (props.type === 'dropMenuContact' ? 'flex-start' : 'center')};
    color: #9b9b9b;
    margin-right: ${(props) => (props.type === 'dropMenuContact' ? '0' : '20px')};
    position: relative;
    &:focus{
        outline:none;
    };
        svg{
            margin-top: 2px;
            width:16px;
            &:hover{
                color: ${(props) => (props.type === 'dropMenuContact' ? 'black' : 'white')}; 
            }
        };
      
}`;


class Menu extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      categories: ['Edit contact', 'Delete', 'Create Group', 'Add to group'],
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

    setWrapperRef = (node) => {
      this.wrapperRef = node;
    };

    handleClickOutside = (event) => {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.handleClose();
      }
    };

    handleClick = (event) => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    handleDeleteCard = () => {
      this.props.deleteCard();
      this.handleClose();
      console.log(this.state);
    };

    setHandler = (item) => {
      let handler;
      switch (item) {
        case 'Edit contact': handler = this.props.changeCard();
          break;
        case 'Delete': handler = this.props.typeMenu === 'dropMenuContact' ? this.handleDeleteCard() : null;
          break;
        case 'Create Group': handler = this.handleClose();
          break;
        case 'Add to group': handler = this.handleClose();
          break;
        default: handler = this.handleClose();
      }
      return handler;
    };


    render() {
      return (
        <>
          <WrapDropMenu>
            <ButtonMenu
              onClick={this.handleClick}
              type={this.props.typeMenu}
            >
              <Icons name="MenuDots" />
            </ButtonMenu>
            {this.state.anchorEl
              ? (
                <DropMenu
                  ref={this.setWrapperRef}
                  type={this.props.typeMenu}
                >
                  {this.props.children}
                  {this.props.menuItems.map((item) => (
                    <DropMenuItem>
                      {item === 'Add to group'
                        ? (
                          <>
                            <ButtonIcon>
                              <Icons name="IconCheck" />
                            </ButtonIcon>
                            <DropMenu>
                              {this.props.categories.map((value) => (
                                <DropMenuItem>
                                  <DropMenuItemButton>
                                    {value}
                                  </DropMenuItemButton>
                                </DropMenuItem>
                              ))}

                            </DropMenu>
                          </>
                        ) : null}
                      <DropMenuItemButton onClick={() => this.setHandler(item)}>
                        {item}
                      </DropMenuItemButton>
                    </DropMenuItem>
                  ))}
                </DropMenu>
              )
              : null}
          </WrapDropMenu>
        </>
      );
    }
}

export default Menu;
