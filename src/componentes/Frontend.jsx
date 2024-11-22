import { Breadcrumb, Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom"; 
const Frontend = () => {
    let items =[
        {key:1, label: <Link to="/" title="Home">Home</Link>}, 
        {key:2, label: <Link to="/iconos" title="Íconos">Íconos</Link>},
        {key:3, label: <Link to="/button" title="Button">Button</Link>},
        {key:4, label: <Link to="/typography" title="Typography">Typography</Link>},
        {key:5, label: <Link to="/message" title="Message">Message</Link>},
        {key:6, label: <Link to="/carousel" title="Carousel">Carousel</Link>},
        {key:7, label: <Link to="/modal" title="Modal">Modal</Link>},
        {key:8, label: <Link to="/grid" title="Grid">Grid</Link>},
        {key:9, label: <Link to="/input" title="Input">Input</Link>},
        {key:10, label: <Link to="/formulario" title="Form">Form</Link>},
        {key:11, label: <Link to="/table" title="Table">Table</Link>},
        {key:12, label: <Link to="/table-fetch" title="Table Fetch">Table Fetch</Link>},
        
    ];
    const {Header, Content, Footer} =Layout;
  return (
    <>
    
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
         
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
  
  <Outlet /> 
  <Footer
        style={{
          textAlign: 'center',
        }}
      >
        <hr/>
        ©Todos los derechos reservados {new Date().getFullYear()} | Desarrollado por <a href="https://www.cesarcancino.com" title="César Cancino">César Cancino</a>
      </Footer>
      </Content>
      </Layout>
      
    </>
  );
};

export default Frontend;
