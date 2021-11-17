import React from 'react'

const Homenav = ({nav, getCategory}) => {
    
    const filterItem=(title)=>{
        // const updatedList=card.filter((currelm)=>{
        //     return currelm.catagory === title;
        // })
        getCategory(title)
        // setcard(updatedList());
       
    }
    
    return (
        <>
  
                <div className=" shadow" style={{paddingLeft:"5px",marginLeft:"3px",width:"100px",borderRadius:"5px"}} onClick={()=>filterItem(nav.title)}  >
                    
            <div className="card-img-top-fluid">
        <img src={nav.image} width="100%" style={{height:"80px" ,width:"90px",objectFit: "cover",padding:"3px"}} alt="" />
    </div>
    
        
        <div className="d-flex justify-content-center">
        
            <h6 className="card-title"style={{padding:"3px"}}>{nav.title}</h6>
        
        </div>
      
    </div>

            
     
        </>
    )
}

export default Homenav
