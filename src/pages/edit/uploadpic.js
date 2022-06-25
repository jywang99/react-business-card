import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserPic from "../../components/userPic";
import properties from "../../properties";
import { getUserToken } from "../../util/credentialmanager";

const UploadPic = ({ userid }) => {
    const navigate = useNavigate();

    // for preview    
    const [msg, setMsg] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileUrl, setFileURL] = useState(""); // temp url react creates

    // for POST
    const [queryImage, setQueryImage] = useState(null);

    const handleImageUpdate = (f) => {
        setSelectedFile(f);

        // for preview
        setFileURL(URL.createObjectURL(f));
        renderImagePreview();

        // for upload
        let reader = new FileReader();
        reader.readAsDataURL(f);
        reader.onload = () => {
            setQueryImage(reader.result);
        }
    }

    const renderImagePreview = () => {
        if (fileUrl) {
            return <img id="profpic" className="img-thumbnail" src={fileUrl} alt="current profile" />;
        } else {
            return <UserPic userid={userid} />
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedFile === null) {
            setMsg("Please select your picture first.");
            return;
        }
        setMsg("");

        const requestObj = {
            method: "POST",
            headers: {
                'Authorization': getUserToken()
            },
            body: JSON.stringify(queryImage)
        }
        fetch(properties.userImageApiUrl, requestObj)
            .then(response => response.json())
            .then(navigate("/"));
    }

    const handleDelete = (event) => {
        event.preventDefault();
        fetch(properties.userImageApiUrl, {
            method: "DELETE",
            headers: {
                'Authorization': getUserToken()
            }
        })
            .then(response => response.json())
            .then(navigate("/"));
    }

    return (
        <div>
            <h3>Profile picture</h3>
            <p></p>
            {renderImagePreview()}
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={e => handleImageUpdate(e.target.files[0])}></input>
                <p className="text-danger">{msg}</p>
                <button type="Submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </form>
        </div>
    );
}

export default UploadPic;
