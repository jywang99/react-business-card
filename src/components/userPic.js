import properties from "../properties";

const UserPic = ({ userid }) => {
    return <img id="profpic"
        src={properties.userImageUrlBase + userid + ".png"}
        onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = properties.userImageUrlBase + "default.png";
        }}
    />
}

export default UserPic;