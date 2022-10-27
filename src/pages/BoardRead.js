import { style } from "@mui/system";

const BodyStyle = style.body`
        display: block;
        text-align: center;
        width: 100%;
        height: 80vh;
        background-color: #ED77BC;
    `;

const BoardRead = () => {
    return (
        <BodyStyle>
            <div className="board-title">
                <h3>제목 입니다</h3>
            </div>
            <div className="board-witer">
                <h3>작성자 정보 입니다</h3>
            </div>
            <div className="board-contents">
                <h3>내용 입니다</h3>
            </div>
        </BodyStyle>
    )
}
export default BoardRead;