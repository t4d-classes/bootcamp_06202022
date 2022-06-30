import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    message() {
      return 'Welcome to React and Apollo!';
    },
    age() {
      return 23;
    },
    interestRate() {
      return 3.5;
    },
    async color(_, args) {
      const res = await fetch('http://localhost:5050/colors/' + args.colorId);
      return res.json();
    },
    async colors() {
      const res = await fetch('http://localhost:5050/colors');
      return res.json();
    },
    async author() {
      const res = await fetch('http://localhost:5050/authors/1');
      return res.json();
    },
    async book() {
      const res = await fetch('http://localhost:5050/books/1');
      return res.json();
    },
  },
};
