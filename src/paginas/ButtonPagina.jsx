import React from 'react'
import { Breadcrumb, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
const ButtonPagina = () => {
  return (
    <>
      <Breadcrumb
    items={[
      {
        title: <Link to="/">Home</Link>,
      },
      {
        title: 'Button',
      },
    ]}
  />
    <h1>Button</h1>
    <h2>Tipos de botones</h2>
    <hr />
    <Button type='primary' size='small'>Botón Primary</Button>
    <hr />
    <Button type='default' size='large'>Botón Default</Button>
    <hr />
    <Button type='dashed'>Botón Dashed</Button>
    <hr />
    <Button type='link' href='https://www.cesarcancino.com' target='blank'>Botón Link</Button>
    <hr />
    <Button type='ghost'>Botón Ghost</Button>
    <hr />
    <Button type='text'>Botón Text</Button>
    <hr/>
    <h2>Propiedades adicionales</h2>
    <hr />
    <Button danger >Botón Danger</Button>
    <hr />
    <Button ghost >Botón Ghost</Button>
    <hr />
    <Button disabled type='primary'>Botón Disabled</Button>
    <hr />
    <Button loading type='primary'>Botón loading</Button>
    <hr/>
    <h2>Agregando íconos</h2>
    <hr />
    <Button type='primary' icon={<SearchOutlined />}>Botón con ícono</Button>
    <h2>Diseño botón</h2>
    <hr />
    <Button type="primary" shape='circle'>Diseño circular</Button>
    <hr />
    <Button className='boton_custom'>Diseño clase css</Button>
    <hr/>
    <h2>Evento onclick</h2>
    <Button onClick={()=>alert("Hola")  }>Evento onclick</Button>
    </>
    
  )
}

export default ButtonPagina