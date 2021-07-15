import bcrypt from "bcryptjs";

const hashedPassword =
  "$2a$10$hLMUnHSYENAqyqbTsjGYMO0X4Q97Z5TU7VB9HxCsFWoxAeJz4AjdK";

const validatePassword = () => {
  const storedPassword = sessionStorage.getItem("password");
  const password = storedPassword || prompt("Enter the password");
  const isCorrect = password && bcrypt.compareSync(password, hashedPassword);

  if (!isCorrect) return false;

  sessionStorage.setItem("password", password);
  return true;
};

export { validatePassword };
