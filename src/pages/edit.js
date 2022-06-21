import EditProfile from './editprofile';
import Header from '../components/header';
import UploadPic from './uploadpic';

const Edit = () => {
    return (
        <div>
            <Header title="Edit" />
            <div className="content">
                <UploadPic />
                <hr />
                <EditProfile />
            </div>
        </div>
    );
}

export default Edit;