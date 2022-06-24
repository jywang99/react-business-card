import { useLocation } from 'react-router-dom';
import Header from '../../components/header';
import EditProfile from '../edit/editprofile';

const AdminEdit = () => {
    const location = useLocation();
    const user = location.state;

    return (
        <div>
            <Header title="Edit" />
            <div className="content">
                <a href="/admin">←Back</a>
                <p></p>
                {user ? <EditProfile user={user} mode="admin" /> : <p>Loading...</p>}
            </div>
        </div>
    );
}

export default AdminEdit;