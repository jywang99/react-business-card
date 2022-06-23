const properties = {
    userLoginUrl: 'https://businesscard.auth.us-east-1.amazoncognito.com/login?client_id=6bh4tfl5a0mllrq98frjl7ilp9&response_type=token&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F%3Fmode%3Duser',
    adminLoginUrl: 'https://businesscard-admin.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=237gdm1k8h99tskj1mrednnonv&response_type=token&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F%3Fmode%3Dadmin',
    userApiUrl: "https://28e6xerox8.execute-api.us-east-1.amazonaws.com/test/users",
    adminApiUrl: "https://28e6xerox8.execute-api.us-east-1.amazonaws.com/test/admin"
}

export default properties;