function saveToken(token) {
	window.localStorage.setItem('token', token);
};

function getToken() {
	return window.localStorage.getItem('token');
};

function deleteToken() {
	window.localStorage.removeItem('token');
};

export default { saveToken, getToken, deleteToken };
