import "./ReviewList.css";

function formatData(value) {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete }) {
    const handleDeleteClick = () => onDelete(item.id);
    return (
        <div className="ReviewListItem">
            <img
                className="ReviewListItem-img"
                src={item.imgUrl}
                alt={item.title}
            ></img>
            <div>
                <h1>{item.title}</h1>
                <p>{item.rating}</p>
                <p>{formatData(item.createdAt)}</p>
                <p>{item.content}</p>
                <button onClick={handleDeleteClick}>삭제</button>
            </div>
        </div>
    );
}

function ReviewList({ items, onDelete }) {
    return (
        <ul>
            {items.map((item) => {
                return (
                    <li key={item.id}>
                        <ReviewListItem
                            item={item}
                            onDelete={onDelete}
                        ></ReviewListItem>
                    </li>
                );
            })}
        </ul>
    );
}

export default ReviewList;