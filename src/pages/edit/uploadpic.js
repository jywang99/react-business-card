import { useState } from "react";

const UploadPic = ({ currentURL }) => {
    const [msg, setMsg] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileURL, setFileURL] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedFile === null) {
            setMsg("Please select your picture first.");
            return;
        }
        setMsg("");
        setFileURL(URL.createObjectURL(selectedFile));
    }

    return (
        <div>
            <h3>Profile picture</h3>
            <p></p>
            <img className="img-thumbnail" src={fileURL} alt="current profile" />
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={e => setSelectedFile(e.target.files[0])}></input>
                <p className="text-danger">{msg}</p>
                <button type="Submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default UploadPic;
