const HeaderEle = ({ attr, title, sortKey, sortOrder, handleFieldSort }) => {
    const renderArrows = () => {
        if (sortKey === attr) {
            return (sortOrder === -1) ? <span>▼</span> : <span>▲</span>
        }
        return <span></span>
    }

    return (
        <div>
            <button className="btn btn-link" onClick={() => handleFieldSort(attr)}>{title}</button>
            {renderArrows()}
        </div>
    );
}

export default HeaderEle;