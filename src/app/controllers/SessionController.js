import jwt from 'jsonwebtoken'
import User from "../models/User";
import auth from '../../config/auth';

class SessionController{
    async store(req, res){
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email }})
        if(!user){
            return res.status(401).json({ error: "Usuário não existe"})
        }
        if(!(await user.checkPassword(password))){
            return res.status(401).json({ error: "Credenciais inválidas"})
        }

        const { id, name } = user;

        return res.json({
            user:{
                id,
                name,
                email,
            },
            token: jwt.sign({ id }, auth.secret, {
                expiresIn: auth.expiresIn,
            })
        });
    }
    validateToken(req, res) {
        const authHeader = req.headers.authorization;
    
        if (!authHeader) {
          return res.status(401).json({ error: 'Token não fornecido' });
        }
    
        const [, token] = authHeader.split(' ');
    
        try {
          const decoded = jwt.verify(token, auth.secret);
          req.userId = decoded.id;
          return res.status(200).json({ message: 'Token válido' });
        } catch (err) {
          return res.status(401).json({ error: 'Token inválido' });
        }
      }
}

export default new SessionController();