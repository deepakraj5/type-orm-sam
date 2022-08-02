import express from 'express'
import dotenv from 'dotenv'
import logger from 'npmlog'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())


app.listen(PORT, () => logger.info('SERVER', `server upon port ${PORT}`))