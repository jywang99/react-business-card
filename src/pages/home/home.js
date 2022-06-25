import Header from '../../components/header';
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Profile from './profile';
import React, { useEffect, useState } from 'react';
import { saveUserCred, saveAdminCred, getUserToken, isLoggedin, isAdminLoggedin } from '../../util/credentialmanager';
import properties from '../../properties';


const Home = () => {
    const navigate = useNavigate();

    // user info
    const [user, setUser] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [message, setMessage] = useState("Loading...");

    // URL params
    const [params] = useSearchParams();
    const location = useLocation();
    const [tokenParams] = useSearchParams(location.hash.substring(1));


    const saveTokens = () => {
        let token = tokenParams.get("id_token");
        if (token != null && token.length > 0) {
            if (params.get("mode") === "user" && !isLoggedin()) {
                saveUserCred(token);
            } else if (params.get("mode") === "admin" && !isAdminLoggedin()) {
                saveAdminCred(token);
            }
        }
    }

    const getUserInfo = () => {
        fetch(properties.userApiUrl, {
            method: 'GET',
            headers: {
                'Authorization': getUserToken(),
            }
        })
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => {
                setMessage("User information not found.");
            });
    }

    useEffect(() => {
        saveTokens();

        if (isLoggedin()) {
            getUserInfo();
        } else {
            setDisabled(true);
        }

        if (isAdminLoggedin()) {

        }
    }, []);

    const renderProfile = () => {
        return (
            <div>
                {user ?
                    <div>
                        <img id="profpic" className="img-thumbnail" src={properties.userImageUrlBase + user['Id'] + ".png"} alt="current profile" />
                        <p></p>
                        <Profile user={user} />
                        <button type="button" className="btn btn-warning" onClick={() => navigate('/edit')}>Edit</button>
                    </div> :
                    <p>{message}</p>
                }
            </div>
        );
    }

    return (
        <div>
            <Header title="Home" />
            <div className="content">
                {disabled ? <p>Please login.</p> : renderProfile()}
            </div>
        </div>
    );
}

export default Home;
