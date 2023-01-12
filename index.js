/* Main file */

/* Import Dependencies */
// const fetch = require('node-fetch')
const express = require('express')
const bodyParser = require('body-parser')
const { Beer } = require('./models')

const app = express()
const jsonParser = bodyParser.json()

app.use('/styles', express.static(__dirname+'/styles'))
app.use('/backend', express.static(__dirname+'/backend'))
app.set('view engine', 'ejs')

// Views
// app.get('/spa', async (req, res) => {
//     try {
//       const resp = await fetch('http://localhost:8000/spa')
//       const data = await resp.json()
//       res.render('/views/spa', { beers: data})
//     } catch (error) {
//         console.log(error)
//         res.send(error)
//     }
// })

// Views
app.get('/spa', jsonParser, async(req, res) => {
    const results = await Beer.findAll()
    .then(results => {
        res.render('spa.ejs', { beers: results })
    })
    .catch(error => console.error(error))
    console.log(results)
  })

/* API Routes */

// Create Request
app.post('/beer', jsonParser, async (req,res) => {
    try {
      const newBeer = await Beer.create({
        name: req.body.name,
        brand: req.body.brand,
        type: req.body.type,
        country: req.body.country,
        description: req.body.description,
        note: req.body.note,
        alc_degree: req.body.alc_degree,
        image: req.body.image      
    })
      res.status(201).send(newBeer)
    } catch (error) {
      res.status(422).send("Hey! It's seems like you're unable to create a new beer :(")
    }
  })

// Read Request
app.get('/beer', jsonParser, async(req, res) => {
    const Beers = await Beer.findAll()
    res.send(Beers)
  })

// Update Request
app.put('/beer/:id', jsonParser, async(req,res) => {
    try{
      const beer = await Beer.findByPk(req.params.id)
      beer.name = req.body.name,
      beer.brand = req.body.brand,
      beer.type = req.body.type,
      beer.country = req.body.country,
      beer.description = req.body.description,
      beer.note = req.body.note,
      beer.alc_degree = req.body.alc_degree,
      beer.image = req.body.image 
      await beer.save()
      res.status(202).send(beer)
    }catch(error){
      res.status(422).send("Ups! It's seems like you're unable to update this beer :(")
    }
  })

// Delete Request
app.delete('/beer/:id', async (req, res) => {
    try{
      const beer = await Beer.findByPk(req.params.id)
      beer.destroy()
      res.status(202).send('Beer deleted succesfully!')
    }catch(error){
      res.status(422).send("Ups! It's seems like you're unable to update this beer :(")
    }
  })

/* Listen SPA in localhost */
app.listen(8000, (req, res) => {
    console.log("Application running succesfully in port 8000...")
})