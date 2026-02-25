
function WelcomeCard({ name, place, number, onNameChange, onPlaceChange, onNumberChange }) { // 上面用props，下面用props.name...：不解構 
    return (
        <div className="p-4 border rounded shadow">
            {/* 使用 props.屬性名稱 來取得內容 */}
            <h1>你好, {name}！</h1>
            <p>歡迎來到 {place}</p>
            <p>電話: {number}</p>
            <div>
                <label className="text-sm text-gray-500">在子組件修改名字：</label>
                <input
                    type="text"
                    className="border p-1 rounded w-full"
                    placeholder="輸入新名字..."
                    value={name} // 依然顯示從父組件傳來的數據
                    onChange={(e) => onNameChange(e.target.value)} // ！！！關鍵：通知父組件變更資料
                />
                <input
                    type="text"
                    className="border p-1 rounded w-full"
                    placeholder="輸入新地點..."
                    value={place} // 依然顯示從父組件傳來的數據
                    onChange={(e) => onPlaceChange(e.target.value)} // ！！！關鍵：通知父組件變更資料
                />
                <input
                    type="text"
                    className="border p-1 rounded w-full"
                    placeholder="輸入新號碼..."
                    value={number} // 依然顯示從父組件傳來的數據
                    onChange={(e) => onNumberChange(e.target.value)} // ！！！關鍵：通知父組件變更資料
                />
            </div>
        </div>
    );
}

export default WelcomeCard;

// Props (包裹)：是由父組件寄給子組件的「包裹」。子組件是被動接收的，且不能修改包裹內容（只能讀取）。
// State (記憶)：是組件自己的「記憶」。組件可以主動修改自己的記憶（透過 setState）。