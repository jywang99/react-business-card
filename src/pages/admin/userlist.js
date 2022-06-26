import { useState } from "react";
import HeaderEle from "./headerele";
import User from "./user";

const UserList = ({ list }) => {
    const [sortKey, setSortKey] = useState("");
    const [sortOrder, setSortOrder] = useState(-1)// -1 for ascending, 1 for descending


    const handleFieldSort = (attr) => {
        if (attr === sortKey) {
            setSortOrder((sortOrder === -1) ? 1 : -1);
        } else {
            setSortKey(attr);
            setSortOrder(-1);
        }
        renderOrderedRows();
    }

    const renderOrderedRows = () => {
        let sortedlist = list.sort((a, b) => (a[sortKey] > b[sortKey]) ? -1 * sortOrder : sortOrder);
        let sortedUserList = sortedlist.map((user, i) => <User key={i} user={user} />);
        return sortedUserList;
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col"><HeaderEle attr="Id" title="User ID" sortKey={sortKey} sortOrder={sortOrder} handleFieldSort={handleFieldSort} /></th>
                    <th scope="col"><HeaderEle attr="fname" title="First name" sortKey={sortKey} sortOrder={sortOrder} handleFieldSort={handleFieldSort} /></th>
                    <th scope="col"><HeaderEle attr="lname" title="Last name" sortKey={sortKey} sortOrder={sortOrder} handleFieldSort={handleFieldSort} /></th>
                    <th scope="col"><HeaderEle attr="age" title="Age" sortKey={sortKey} sortOrder={sortOrder} handleFieldSort={handleFieldSort} /></th>
                    <th scope="col"><HeaderEle attr="bday" title="Birth day" sortKey={sortKey} sortOrder={sortOrder} handleFieldSort={handleFieldSort} /></th>
                    <th scope="col"><HeaderEle attr="jobTitle" title="Job title" sortKey={sortKey} sortOrder={sortOrder} handleFieldSort={handleFieldSort} /></th>
                    <th scope="col"><HeaderEle attr="employer" title="Employer" sortKey={sortKey} sortOrder={sortOrder} handleFieldSort={handleFieldSort} /></th>
                    <th scope="col"><HeaderEle attr="city" title="City" sortKey={sortKey} sortOrder={sortOrder} handleFieldSort={handleFieldSort} /></th>
                    <th scope="col"><HeaderEle attr="email" title="Email" sortKey={sortKey} sortOrder={sortOrder} handleFieldSort={handleFieldSort} /></th>
                    <th scope="col"><HeaderEle attr="phone" title="Phone" sortKey={sortKey} sortOrder={sortOrder} handleFieldSort={handleFieldSort} /></th>
                    <th scope="col">Actions</th>
                </tr>
                {renderOrderedRows()}
            </thead>
        </table>
    );
}

export default UserList;