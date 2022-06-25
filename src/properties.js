const stage = "test";
// const callbackUrl = "http%3A%2F%2Flocalhost%3A3000%2F";
const callbackUrl = "https%3A%2F%2Fd35izcmv5outqp.cloudfront.net%2F";

const properties = {
    userLoginUrl: 'https://businesscard.auth.us-east-1.amazoncognito.com/login?client_id=6bh4tfl5a0mllrq98frjl7ilp9&response_type=token&scope=email+openid+phone&redirect_uri=' + callbackUrl + '%3Fmode%3Duser',
    adminLoginUrl: 'https://businesscard-admin.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=237gdm1k8h99tskj1mrednnonv&response_type=token&scope=email+openid+phone&redirect_uri=' + callbackUrl + '%3Fmode%3Dadmin',
    userLogoutUrl: 'https://businesscard.auth.us-east-1.amazoncognito.com/logout?client_id=6bh4tfl5a0mllrq98frjl7ilp9&logout_uri=' + callbackUrl,
    adminLogoutUrl: 'https://businesscard-admin.auth.us-east-1.amazoncognito.com/logout?client_id=237gdm1k8h99tskj1mrednnonv&logout_uri=' + callbackUrl,
    userApiUrl: "https://28e6xerox8.execute-api.us-east-1.amazonaws.com/" + stage + "/users",
    userImageApiUrl: "https://28e6xerox8.execute-api.us-east-1.amazonaws.com/" + stage + "/users/images",
    userImageUrlBase: "https://businesscardfiles.s3.amazonaws.com/",
    adminApiUrl: "https://28e6xerox8.execute-api.us-east-1.amazonaws.com/" + stage + "/admin",
    adminUserApiUrl: "https://28e6xerox8.execute-api.us-east-1.amazonaws.com/" + stage + "/admin/user"
}

export default properties;