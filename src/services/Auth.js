const BASE_API_URL = "http://localhost:4000/api/auth/";

export const Signup = async (username, email, password) => 
{
    let requestData = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, email, password, roles: ['user']})
    }

    let resposne = await fetch(`${BASE_API_URL}signup`, requestData)
    let data = await resposne.json()

    console.log('Register user service data ', data)
    return data;
}

export const Login = async (username, password) => {

    let requestData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password})
    }
    
    let response = await fetch(`${BASE_API_URL}signin`, requestData)
    let data = await response.json()

    if(data.accessToken)
    {
        localStorage.setItem('user', JSON.stringify(data))
    }

    console.log('Login user service data', data)
    return data;
} 

export const Logout = () => localStorage.removeItem('user')

export const getCurrentUser = () => JSON.parse(localStorage.getItem('user'))