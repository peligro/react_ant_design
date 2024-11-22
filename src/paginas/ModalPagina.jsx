import React, { useState } from 'react'
import { Button, Modal, Form, Breadcrumb } from "antd";
import { Link } from 'react-router-dom';
const ModalPagina = () => {
    const [modal, setmodal] = useState(false); 
    const {Item} = Form;
    let abrirModal=(accion)=>
    {
        switch(accion)
        {
            case true:
                setmodal(true);
            break;
            case false:
                setmodal(false);
            break;
        }
    };
    let accionModal=()=>
    {
        
        abrirModal(false);
        console.log("acá puedes hacer cualquier cosa");
    };
    
    //alinear input
    const layout={
        labelCol:{
            span:5,
        },
        wrapperCol:{
            span:16,
        }
    };
    return (
    <>
    <Breadcrumb
    items={[
      {
        title: <Link to="/">Home</Link>,
      },
      {
        title: 'Modal',
      },
    ]}
  />
    <h1>ModalPagina</h1>
    <div className="App">
        <Button type='primary' onClick={()=>{abrirModal(true)}}>Abrir modal</Button>
        <Modal 
        title="Título header" 
        open={modal} 
        onCancel={()=>{abrirModal(false)}} 
         centered
        footer={[
            <Button key={1} onClick={()=>{abrirModal(false)}}>Cancelar</Button>,
            <Button key={2} type='primary' onClick={accionModal}>Enviar</Button>
        ]}
        >
            <h2>Título</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iste officiis ab fugit iure magni accusamus suscipit commodi perferendis, provident dolore sed natus, culpa distinctio itaque nisi sint sapiente incidunt.</p>
        </Modal>
        {/*
         
         */}
    </div>
    </>
  )
}

export default ModalPagina