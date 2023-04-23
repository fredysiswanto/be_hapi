const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Homepage';
    },
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    },
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
      return 'About page';
    },
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method';
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return 'Halaman tidak ditemukan';
    },
  },
  {
    method: 'GET',
    path: '/profile/{user?}',
    handler: (request, h) => {
      const { user = 'defaul' } = request.params;
      return `profile user adalah ${user}`;
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
      const { username, password } = request.payload;
      // conpassword;
      return `Welcome ${username}!`;
    },
  },
];

export default routes;
