import styled from "styled-components";

export const Layout = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;

    *{
        margin: 0 auto;
    }


    .easy{
        color: #00d100;
    }
    .normal{
        color: #fbff00;
    }
    .hard{
        color: red;
    }
`

export const Header = styled.header`
    h1{
        color: var(--primary-color);
        font-size: 3.3rem;
        font-weight: 400;
    }
    p{
        color: white;
        font-weight: 500;
        text-align: center;
    }
    span{

    }
`;

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Footer = styled.footer`

`;