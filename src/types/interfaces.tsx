interface User {
    name?: string;
    email: string;
    password: string;
    passwordAgain?: string;
}

interface UserWord {
    id: string;
    difficulty: string;
    optional: {
        testFieldString: string;
        testFieldBoolen: boolean;
    };
    wordId: string;
}

interface UserWordToken {
    userId: string;
    wordId: string;
    token: string;
    word?: string;
}

interface CreateUser {
    email: string;
    id: string;
    name: string;
    error?: any;
}

interface LoginUser {
    message: string;
    name: string;
    userId: string;
    token: string;
    refreshToken: string;
}

export type { User, UserWord, UserWordToken, CreateUser, LoginUser };
