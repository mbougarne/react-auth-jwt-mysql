# react-auth-jwt-mysql

React with JWT authentication and Express using Sequelize. The project based on [BezKoder Tutorial] (<https://bezkoder.com/react-hooks-jwt-auth/>) and the back-end is on [JWT with Express and Sequelize] (<https://github.com/mbougarne/node-jwt-mysql>).

## Note

We used **localstorage** to store the **access token** which is consider a bad practice, try to use the **HttpOnly Cookies** and **Refresh Token**, since the **localstorage** is prone to **XSS Attack** and the later to **CSRF Attack**
