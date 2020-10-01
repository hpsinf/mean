const authSecret = () =>{
    return process.env.AUTH_SECRET 
}

const passwordBD = () => {
    return process.env.MONGOATLAS_HPSINF
} 
module.exports = { authSecret, passwordBD }

