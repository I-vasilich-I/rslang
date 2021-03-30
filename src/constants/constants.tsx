const BACKEND_API_URL = 'https://team101-rslang-be.herokuapp.com/';
const WORDS_API_URL = `${BACKEND_API_URL}words`;
const USERS_API_URL = `${BACKEND_API_URL}users`;
const SIGNIN_API_URL = `${BACKEND_API_URL}signin`;
const AVATAR_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/vasilich/image/upload';
const DIFFICULTY = {
    complicated: 'complicated',
    deleted: 'deleted',
};

export { WORDS_API_URL, USERS_API_URL, SIGNIN_API_URL, BACKEND_API_URL, AVATAR_UPLOAD_URL, DIFFICULTY };
