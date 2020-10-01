const express = require('express')
const auth = require('./auth')



module.exports = (server) => {

    //Rotas Abertas
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const authService = require('../api/user/authServices')
    openApi.post('/login', authService.login)
    openApi.post('/signup', authService.signup)
    openApi.post('/validate', authService.validateToken)

    // Rotas protegidas
    const protectApi = express.Router()
    server.use('/api', protectApi)
    protectApi.use(auth)
        
    server.get('/', (req, res)=>{
        res.send('Server OK')
    })
 
    //rotas da API
    const billingCycleService = require('../api/billingCycle/billingCycleServices')
    //registra todos os metodos automaticamente
    billingCycleService.register(protectApi, '/billingcycles')

    const billingSummaryService = require('../api/billingSummary/billingSummaryServices')
    protectApi.route('/billingsummary').get(billingSummaryService.getSummary)

    console.log('Rotas OK')
        
}