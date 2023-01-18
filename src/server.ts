import express from 'express';
import '@controllers/UserControllers'

const app = express()

app.get('/', (req, res) =>{
  return res.json({message:'Hello World'})
})
app.listen(3333)