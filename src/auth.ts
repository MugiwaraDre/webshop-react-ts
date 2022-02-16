const authProvider = {
  isAuthenticated: false,
  signIn: (callback: VoidFunction) => {
    authProvider.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signOut: (callback: VoidFunction) => {
    authProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { authProvider };
