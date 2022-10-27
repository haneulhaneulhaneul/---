import  styled from 'styled-components';

const FooterStyle = styled.footer`
        font-size: 2em;
        display: flex;
        text-align: center;
        width: 100%;
        height: 20vh;
        background-color: #40BAAA;
    `;

const Footer = () => {
    return (
            <FooterStyle>
                <h1>footer 영역입니다</h1>
            </FooterStyle>  
    )
}
export default Footer;