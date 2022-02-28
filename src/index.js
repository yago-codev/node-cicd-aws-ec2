const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send([
    {
      id: 1,
      username: 'Node'
    },
    {
      id: 2,
      username: 'React'
    },
    {
      id: 3,
      username: 'React Native'
    }
  ])
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} 🚀`)
})