import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, similique modi, excepturi laudantium consequuntur voluptatum repudiandae ducimus aut, sequi soluta nemo illo. Autem a minus commodi saepe praesentium quia officia!</p>

            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className="explore-menu-list-item" key={index}>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p className='menu-name'>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />

        </div>
    );
};

export default ExploreMenu;