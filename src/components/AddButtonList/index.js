import React, {useState} from 'react';
import Home from "../Home";

import './index.scss'
import Badge from "../../Badge";

const AddButtonList = ({colors}) => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const [selectColor, setSelectColor] = useState(colors[0].id)


    return (
        <div className='add-list'>
            <Home
                onClick={() => setVisiblePopup(true)}
                items={[

                    {
                        className: 'todo__days-button',
                        icon: <i>#</i>,
                        name: 'Добавит список',

                    }
                ]}/>
            {
                visiblePopup &&
                <div className="add-list__popup">
                    <div onClick={() => setVisiblePopup(false)} className="add-list__popup-close-btn">
                        X
                    </div>
                    <input className='field' type='text' placeholder='Название дня'/>
                    <div className="add-list__popup-colors">


                        {
                            colors.map((color) => (
                                <Badge
                                    onClick={() => setSelectColor(color.id)}
                                    key={color.id}
                                    color={color.name}
                                    className={selectColor === color.id && 'active'}
                                />

                            ))
                        }

                    </div>
                    <button className='button'>Добавить</button>
                </div>
            }
        </div>


    );
};

export default AddButtonList;