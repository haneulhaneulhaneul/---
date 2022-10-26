import  styled from 'styled-components';

const FooterStyle = styled.div`
        font-size: 2em;
        display: block;
        text-align: center;
        width: 100%;
        height: 20vh;
        background-color: #40BAAA;
    `;

const Footer = () => {
    return (
        <footer>
            <FooterStyle>
                <h1>footer 영역입니다</h1>
            </FooterStyle>   
        </footer>
    )
}
export default Footer;