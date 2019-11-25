import React from 'react';
import { ReactComponent as AddButton } from './AddButton.svg';
import { ReactComponent as IconDots } from './menu-dots.svg';
import { ReactComponent as IconSearch } from './searchIcon.svg';
import { ReactComponent as IconCheck } from './icon.svg';

const Icons = (props) => {
  switch (props.name) {
    case 'NewContactButton':
      return (
        <AddButton />
      );
    case 'MenuDots':
      return (
        <IconDots id={props.id} />
      );
    case 'IconSearch':
      return (
        <IconSearch />
      );
    case 'IconCheck':
      return (
        <IconCheck />
      );
    default:
      return null;
  }
};

export default Icons;
