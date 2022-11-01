import React from 'react';


const MenuCard = ({ menuData }) => {
    // console.log(menuData);

    return (
        <>                    
                {menuData.map((curElem) => {
                    const {id,name,image,category,description,price}=curElem;
                    return (
                        <>
                        <div className="col-sm-4 text-center"> 
                      
                        
                                    <div className="card" key={id}>
                                        <div className="card-body">
                                      <span className="btn btn-success">{id}</span>
                                            <h1>{category}</h1><h2 className="card-title">{name}</h2>
                                            <img src={image} alt="" className="card-img" height={'200px'}/><br />
                                            <span className="card-text text-center">{description}</span>
                                            <div className="card-read">{price}</div>
                                        </div>

                                        <div className="card-footer">Order now</div>
                                    </div>
                                    <br />
                                    </div> 
                           
                        </>
                    )
                })}
       
               
           
        </>)
}

export default MenuCard;
