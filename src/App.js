import React,  {useState} from 'react';

import DB from './assets/db.json'
import Home from "./components/Home";
import AddButtonList from "./components/AddButtonList";

const App = () => {
    return (
        <div className='todo'>
            <div className="todo__home">
              <Home

                  items={[

                  {
                      icon:  <i>#</i>,
                      name:'Дни недели',
                      active:true
                  }
              ]}

              />
                <Home
                    items={DB.lists.map((item) => {
                        item.color = DB.colors.filter((color) => color.id === item.colorId)[0].name
                        return item
                    } )

                    }
                      isRemovable
                />

              <AddButtonList
colors={ DB.colors }
              />

            </div>
            <div className="todo__days">

            </div>
        </div>
    );
};

export default App;
