import React,{useState} from 'react'
import StudentCard from './StudentCard'
import catagory from './CardApi'
import Homenav from './Homenav'
import HomenavA from './HomeNavApi'

const Home = () => {
    const[card,setcard]=useState(catagory);
    const[homecard,sethomecard]=useState(HomenavA);

    const getCategory = (title)=>{
        if( title!="All"){
        const updatedList=catagory.filter((currelm)=>{
               return currelm.catagory === title;
             })
             
             setcard(updatedList);
            
            }
            else{
                setcard(catagory);
            }
    }
    
    return (

        <>
        
        <div className="row " style={{marginTop:"50px",justifyContent:"center"}}>
            {
                homecard.map((value)=>{
                    return(
                        <>
                        <div className="card-container "  style={{width: "120px", height: "130px",marginTop:"30PX",padding:"10px"}}>
                        
                        <Homenav  nav={value}  getCategory={getCategory} />
                        </div>
                        </>
                    )
                })
            }
        
        </div>
        
        <div className="row " style={{marginTop:"5px",padding:"50px",marginLeft:"130px"}}>


            <StudentCard card={card} />
            
        </div>
        {card.length==0 ?  <div> <h1 style={{display:"flex",justifyContent:"center",alignItems:"center",color:"#ba0419"}}>😔 Sorry! This Item is not available at the moment..</h1></div> : null}
        </>
    )
}

export default Home
