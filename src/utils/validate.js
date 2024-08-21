export const CheckValidData = (email, password, name) => {
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isFullName = /([a-zA-Z0-9_\s]+)/.test(name);

  if (!isEmailValid) return "Email Id is not valid";
  if (!isValidPassword) return "Password is not valid";
  if (!isFullName) return "Name is not valid";

  return null;
};
