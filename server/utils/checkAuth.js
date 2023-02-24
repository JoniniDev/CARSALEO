import jwt from 'jsonwebtoken'

export const checkAuth = (req, res, next) => {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, '')

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_AUTH)
            
            req.userId = decoded.id

            next()
        } catch (error) {
            return res.status(400).json({
                msg: "Error: Not access"
            })
        }
    } else {
        return res.status(500).json({
            msg: "Error: Not access"
        })
    }
}