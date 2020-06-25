// Utilizar la API de Heroku para hacer el registro.
const registerUrl = 'https://upgrade-auth.herokuapp.com/api/auth/register';

/**
 * Parámetros de userdata.
 * @param {Objet} userdata
 * @param {string} userdata.username
 * @param {string} userdata.email
 * @param {string} userdata.password
 */
export const register = async (userdata) => {
  const response = await fetch(registerUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(userdata),
  });
  const jsonResponse = await response.json();

  if (!response.ok) {
    console.log(jsonResponse);
    throw new Error('Error!');
  }
  return jsonResponse;
};
