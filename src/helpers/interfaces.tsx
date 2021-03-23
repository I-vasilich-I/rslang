interface User {
    name?: string;
    email: string;
    password: string;
    registered: boolean;
    loggedIn: boolean;
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
}

interface LoginUser {
  message: string;
  name: string;
  userId: string;
  token: string;
  refreshToken: string;
}

export type { User, UserWord, UserWordToken, CreateUser, LoginUser };
