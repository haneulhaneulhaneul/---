import  styled from 'styled-components';

const HeaderStyle = styled.div`
        font-size: 2em;
        display: block;
        position: fixed;
        text-align: center;
        width: 100%;
        height: 20vh;
        background-color: #FFD990;
    `;

const Header = () => {
    return (
        <header>
            <HeaderStyle> 
                <h1>header 영역 입니다</h1>
            </HeaderStyle>
        </header>
    )
}
export default Header;