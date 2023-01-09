const notFound = (req,res)=> res.status(404).send('route do not exists')

module.exports = notFound