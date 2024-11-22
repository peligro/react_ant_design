import React from 'react'
import { Breadcrumb, Button, message } from "antd";
import { Link } from 'react-router-dom';
const MessagePagina = () => {
    const mensajeSuccess=(tipo)=>{
        switch (tipo) {
            case "success":
                //message.success("Mensaje success"); 
                message.success({
                    content:"Mensaje success",
                    className:"successMessage"
                });   
            break;  
            case "error":
                message.error("Mensaje error", 10);    
            break;  
            case "info":
                message.info("Mensaje info");    
            break; 
            case "warning":
                message.warning("Mensaje warning");    
            break; 
            case "loading":
                message.loading("Mensaje loading");    
            break;
            }
        
    };
  return (
    <>
       <Breadcrumb
    items={[
      {
        title: <Link to="/">Message</Link>,
      },
      {
        title: 'Message',
      },
    ]}
  />
    <h1>MessagePagina</h1>
    <Button onClick={()=>{mensajeSuccess("success")}}>Mensaje Success</Button>
  
    <hr />
    <Button onClick={()=>{mensajeSuccess("error")}}>Mensaje Error</Button>
   
    <hr/>
    <Button onClick={()=>{mensajeSuccess("info")}}>Mensaje Info</Button>
    
    <hr />
    <Button onClick={()=>{mensajeSuccess("warning")}}>Mensaje Warning</Button>
    
    <hr />
    <Button onClick={()=>{mensajeSuccess("loading")}}>Mensaje Loading</Button>
    
    </>
  )
}

export default MessagePagina