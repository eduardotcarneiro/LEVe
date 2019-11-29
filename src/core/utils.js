export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return "O campo E-mail não pode ser vazio.";
  if (!re.test(email)) return "Ooops! Precisamos de um e-mail válido.";

  return "";
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return "O campo Senha não pode ser vazio.";

  return "";
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return "o campo Nome não pode ser vazio.";

  return "";
};
