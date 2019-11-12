import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../styles/VerticalMenu.css';

const VerticalMenu = ({ albums, albumsPathname }) => (
  <div className='ui secondary vertical menu'>
    <div className='header item'>
      Albums
    </div>
    {
      albums.map((album) => {
        const to = `${albumsPathname}/${album.id}`;
        return (
          <NavLink
            to={to}
            className="item"
            key={album.id}
          >
            {album.name}
          </NavLink>
        );


        // const active = window.location.pathname === to;
        // return (
        //   <Link
        //     to={to}
        //     className={active ? 'item active' : 'item'}
        //     key={album.id}
        //   >
        //     {album.name}
        //   </Link>
        // );
      })
    }
  </div>
);

export default VerticalMenu;
