import { useState } from "react";

const UploadPic = (props) => {
    const [image, setImage] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (image === undefined) {
            return;
        }

        console.log(image);
    }

    return (
        <div>
            <h3>Profile picture</h3>
            <img href="" alt="current profile picture" />
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={setImage}></input>
                <br />
                <button type="Submit">Submit</button>
            </form>
        </div>
    );
}

export default UploadPic;
