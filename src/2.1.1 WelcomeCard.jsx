
function WelcomeCard(props) {
    return (
        <div className="p-4 border rounded shadow">
            {/* 使用 props.屬性名稱 來取得內容 */}
            <h1>你好, {props.name || "原始人沒有電話號碼"}！</h1>
            <p>歡迎來到 {props.place || "原始人沒有電話號碼"}</p>
            <p>電話: {props.number || "原始人沒有電話號碼"}</p>
        </div>
    );
}

export default WelcomeCard;