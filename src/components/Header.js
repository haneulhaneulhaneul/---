import  styled from 'styled-components';

const HeaderStyle = styled.header`
        font-size: 2em;
        display: flex;
        position: fixed;
        text-align: center;
        width: 100%;
        height: 20vh;
        background-color: #FFD990;
    `;

const Header = () => {
    return (
            <HeaderStyle> 
                <h1>header 영역 입니다</h1>
            </HeaderStyle>
    )
}
export default Header;