import { TOKEN_SECRET } from "../config.js"
import jwt from 'jsonwebtoken'

export const authRequired = (req, res , next) => {
    const token = req.cookies.token;
    console.log(token, 'token', req.cookies)
    if(!token) res.status(401).json({message: 'Usuario no autorizado'})

    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
        if(err) res.status(403).json({message: "Usuario invalido"})

        // seteo los datos que vienen dentro del token en el request user 
        req.user = decoded
        next()
    })
}