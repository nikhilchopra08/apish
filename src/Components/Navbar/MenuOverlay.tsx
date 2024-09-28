import React from 'react';
import NavLinks from './NavLinks';

type Link = {
  path: string;
  title: string;
};

type Props = {
  links: Link[];
};

const MenuOverlay = ({ links }: Props) => {
  return (
    <ul className='flex flex-col items-center py-4'>
      {links.map((link, index) => (
        <li key={index}>
          <NavLinks href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
