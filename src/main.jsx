import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
 
import '/public/css/estilos.css';
 
import Frontend from './componentes/Frontend';
import Home  from './paginas/Home';  
import IconPagina from './paginas/IconPagina';
import ButtonPagina from './paginas/ButtonPagina';
import TypographyPagina from './paginas/TypographyPagina';
import MessagePagina from './paginas/MessagePagina'; 
import CarouselPaguna from './paginas/CarouselPaguna';
import ModalPagina from './paginas/ModalPagina';
import InputPagina from './paginas/InputPagina';
import GridPagina from './paginas/GridPagina';
import FormularioPagina from './paginas/FormularioPagina';
import TablePagina from './paginas/TablePagina';
import TablePaginaFetch from './paginas/TablePaginaFetch';

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <Frontend />,
      children:
      [
        {
          index:true,
          element: <Home /> 
        },{
          path:"/iconos",
          element: <IconPagina />
        },{
          path:"/button",
          element: <ButtonPagina />
        },{
          path:"/typography",
          element: <TypographyPagina />
        },{
          path:"/message",
          element:<MessagePagina />
        },{
          path:"/carousel",
          element:<CarouselPaguna />
        },{
          path:"/modal",
          element:<ModalPagina />
        },{
          path:"/grid",
          element: <GridPagina />
        },{
          path:"/input",
          element: <InputPagina />
        },{
          path:"/formulario",
          element: <FormularioPagina />
        },{
          path:'/table',
          element:<TablePagina />
        },{
          path:"/table-fetch",
          element: <TablePaginaFetch />
        }
      ]
    }
  ] , {
    future: {
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_startTransition: true,
      v7_skipActionStatusRevalidation: true,
      v7_skipActionErrorRevalidation: true,
    },
  });
//https://reactrouter.com/en/6.27.0/upgrading/future#v7_skipactionerrorrevalidation
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} future={{
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_startTransition: true,
      v7_skipActionStatusRevalidation: true,
      v7_skipActionErrorRevalidation: true,
    }} />
  </React.StrictMode>
)
