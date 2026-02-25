
function WelcomeCard(props) { // 上面用props，下面用props.name...：不解構 
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

// Props (包裹)：是由父組件寄給子組件的「包裹」。子組件是被動接收的，且不能修改包裹內容（只能讀取）。
// State (記憶)：是組件自己的「記憶」。組件可以主動修改自己的記憶（透過 setState）。