import styled from 'styled-components';
import { Link } from "react-router-dom";
import { theme } from '../../styles/theme';

const Ul = styled.ul`
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
  padding-right: 100px;
  box-shadow: ${({ open }) => open ? '-4px 4px 10px' : '0px 0px 0px'} ${theme.colors["azul-escuro-sombra"]};
  background: ${theme.colors["azul-escuro"]};
  transition: transform 0.3s ease-in-out;
  z-index: 1;

  li{
    padding-left: 20px;
    border-bottom: 1px solid ${theme.colors.branco};
    padding: 0.5rem 0;
    &:last-child{
      border-bottom: none;
    }   
    * {
      text-decoration: none;
      color: ${theme.colors.branco};
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 40px;
    }   
  } 

  @media (min-width: ${theme.breakpoints.tablet}){
    //width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
    position: relative;
    transform: translate(50%, 0%);
    right: 50%;
    box-shadow: none;
    li{
      border-bottom: none;
      padding: 0;
    }
  }

  @media (min-width: ${theme.breakpoints.desktop}){
    flex-flow: row nowrap;   
    //width: 60%;  
    li {    
      * {        
        &:hover{
          border-bottom: 1px solid ${theme.colors.branco};
        }
      }
    }
  }

`

const Ul1 = styled.ul`
  display: flex;
  align-items: center; 
  flex-flow: row nowrap;   
  justify-content: space-between;
  width: 60%;

  li {    
    * {
      text-decoration: none;
      color: ${theme.colors.branco};
      font-weight: 700;
      font-size: 20px;
      line-height: 40px;
      &:hover{
        border-bottom: 1px solid ${theme.colors.branco};
      }
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}){
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    width: 200px;
    padding-right: 100px;
    height: fit-content;
    box-shadow: ${({ open }) => open ? '-4px 4px 10px' : '0px 0px 0px'} ${theme.colors["azul-escuro-sombra"]};
    background: ${theme.colors["azul-escuro"]};
    transition: transform 0.3s ease-in-out;

    li{
      padding-left: 20px;
      border-bottom: 1px solid ${theme.colors.branco};
      padding: 0.5rem 0;
      &:last-child{
        border-bottom: none;
      }
      
    } 
  }

  @media (max-width: ${theme.breakpoints.desktop}){
    width: 100%;
    display: flex;
    align-items: center;
  }

`

const RightNav = ({open}) => {
  const rotas = [
    {
      label: "A experiência",
      to: "/experiencia",
    },
    {
      label: "Mapa de Setores",
      to: "/setores",
    },
    {
      label: "Informações",
      to: "/informacoes",
    },
    {
      label: "Ingresso",
      to: "/ingresso",
    },
  ];

  return (
    <Ul open={open}>
      {rotas.map((rota, index) => (
        <li key={index}>
          <Link to={rota.to}>{rota.label}</Link>
        </li>
      ))}
    </Ul>
  );
};

export default RightNav;
