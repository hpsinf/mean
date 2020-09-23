const express = require('express')

module.exports = function(server) {
    // API Router
    const router = express.Router()
    server.use('/api', router)

    server.get('/', (req, res)=>{
        res.send('Server OK')
    })
 
    //rotas da API
    const billingCycleService = require('../api/billingCycle/billingCycleServices')
    //registra todos os metodos automaticamente
    billingCycleService.register(router, '/billingcycles')

    const billingSummaryService = require('../api/billingSummary/billingSummaryServices')
    router.route('/billingsummary').get(billingSummaryService.getSummary)

    console.log('Rotas OK')
    
}