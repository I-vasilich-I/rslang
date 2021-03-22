interface User {
    name?: string;
    email: string;
    password: string;
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

export type { User, UserWord, UserWordToken };
