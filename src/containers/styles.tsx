import styled from "styled-components";


export const Layout = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    *{
        margin: 0 auto;
    }
`

export const Header = styled.header`
    h1{
        color: var(--primary-color);
        margin-top: 7rem;
    }
    p{
        color: white;
        font-weight: 500;
    }
`;

export const Main = styled.main`

`;

export const Footer = styled.footer`

`;