import styled from 'styled-components';
import { Link } from "react-router-dom";
import { variaveis } from '../../styles/variaveis';

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
  box-shadow: ${({ open }) => open ? '-4px 4px 10px' : '0px 0px 0px'} ${variaveis.summer.preto};
  background: ${({theme}) => theme.header};
  transition: transform 0.3s ease-in-out;
  z-index: 19;

  li{
    padding-left: 20px;
    border-bottom: 1px solid ${variaveis.summer.branco};
    padding: 0.5rem 0;
    &:last-child{
      border-bottom: none;
    }   
    * {
      text-decoration: none;
      color: ${variaveis.summer.branco};
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 40px;
    }   
  } 

  @media (min-width: ${variaveis.breakpoints.tablet}){
    width: 100%;
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

  @media (min-width: ${variaveis.breakpoints.desktop}){  
    width: auto;  
    transform: none;
    right: 0;
    gap: 2rem;
    li {    
      * {        
        &:hover{
          border-bottom: 1px solid ${variaveis.summer.branco};
        }
      }
    }
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
