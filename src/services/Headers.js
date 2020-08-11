export default function authHeaders()
{
    let user = JSON.parse(localStorage.getItem('user'))

    return (user && user.accessToken) ? {headers: {'x-access-token': user.accessToken}} : {}
}