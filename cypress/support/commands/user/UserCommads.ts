import { USER_LOCALSTORAGE_KEY } from '@/shared/consts/localStorage';

class UserCommands {
    static login(username: string = 'username', password: string = 'password') {
        return cy
            .request({
                method: 'POST',
                url: `http://localhost:8000/login`,
                body: {
                    username,
                    password,
                },
            })
            .then(({ body }) => {
                window.localStorage.setItem(
                    USER_LOCALSTORAGE_KEY,
                    JSON.stringify(body),
                );
                return body;
            });
    }
}

export default UserCommands;
