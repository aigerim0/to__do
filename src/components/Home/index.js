import React from 'react';
import classNames from 'classnames'

import DB from '../../assets/db.json'

import './index.scss'
import Badge from "../../Badge";


const Home = ({ items,isRemovable ,onClick}) => {
    return (
        <>
            <ul onClick={onClick} className="todo__days">
                {
                    items.map((item,index) => {
                        return  <li  key={index} className={classNames(item.className, {active:item.active})} >
                            <i>{item.icon
                            ? ( item.icon )
                                : (
                               <Badge color={item.color}/>
                                )
                            }</i>
                            <span>{item.name} </span>
                        </li>
                    })
                }

            </ul>
        </>
    );
};

export default Home;