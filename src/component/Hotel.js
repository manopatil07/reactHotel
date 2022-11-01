import React, { useState } from 'react';
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
// import "./style.css";

const uniqueList = [...new Set(
    Menu.map((curElem) => {
        return curElem.category;
    })
),
    "All",
];
console.log(uniqueList);
const Hotel = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList,setMenuList] = useState(uniqueList);
     const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updateList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updateList);
    };

    return (
        <>
         <div className="bg-secondary">
      <div className="container bg-black"> 
        <Navbar filterItem={filterItem} menuList={menuList} />
        </div>
       
          <div className="container bg-light"><br />
         <div className="row">
         <MenuCard menuData={menuData} />
            </div><br />
            </div>
            </div>
        </>
    );
};

export default Hotel;
