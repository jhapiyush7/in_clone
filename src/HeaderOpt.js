import React from 'react'
import './HeaderOpt.css'
import Avatar from "@mui/material/Avatar";
function HeaderOpt({avatar,Icon,title,onClick}) {
  return (
      <div onClick={onClick} className="headeroption">
        {Icon && <Icon className="headeroption__icon" />}
        {avatar && <Avatar className="headeroption__icon" H/>}
        {/* <props.Icon/> */}
        <span className='headeroption__title'>{title}</span>
      </div>
  );
}

export default HeaderOpt