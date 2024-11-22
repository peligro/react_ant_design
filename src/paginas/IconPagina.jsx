import { AlipayCircleOutlined, DeleteFilled, Html5TwoTone, PieChartOutlined, SkypeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
//npm install @ant-design/icons --save

const IconPagina = () => {
  return (
    <>
     <Breadcrumb
    items={[
      {
        title: <Link to="/">Home</Link>,
      },
      {
        title: 'Íconos',
      },
    ]}
  />
    <h1>Íconos</h1>
    <PieChartOutlined style={{fontSize:"90px", color:"red"}} spin={true} />
    <hr />
    <SkypeOutlined style={{fontSize:"90px", color:"aqua"}}  />
    <hr/>
    <AlipayCircleOutlined style={{fontSize:"90px", color:"aqua"}} rotate={180}   />
    <hr/>
    <AlipayCircleOutlined style={{fontSize:"90px", color:"aqua"}}   />
    <hr />
    <DeleteFilled style={{fontSize:"90px", color:"blue"}} rotate={90} />
    <hr/>
    <Html5TwoTone style={{fontSize:"90px" }} twoToneColor="orange" />{/* los íconos de 2 tonos no pueden modificar el color desde el style */}
    </>
  )
}

export default IconPagina