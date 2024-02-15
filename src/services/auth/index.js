export const authentication = () => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  // true itu !!!
  if (!!token) {
    window.location.href = "/login-reminder"
  }
}