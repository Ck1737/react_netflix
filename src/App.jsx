import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const App = () => (
    <>
        <h1 className="heading_style">List Of Top 5 Netflix Series in 2020</h1>
        {Sdata.map((val) => {            
            return(
                <Card 
                key = {val.id}
                sname= {val.sname}
                imgsrc= {val.imgsrc}
                title= {val.title}    
                link = {val.link}
                />  
            );
        })}
    </>
);

export default App;




