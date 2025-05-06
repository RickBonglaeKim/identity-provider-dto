import dotenv from 'dotenv'
import TestEnvironment from './test.environment.js'

const env = process.env.NODE_ENV
if (env === undefined) {
  throw new Error("The variable NODE_ENV is not found.")
}

const projectPath = (process.env.PWD).toString()
const rootPath = projectPath.replace('/dto', '')

if (env !== 'none') {
  dotenv.config({
    path: `${rootPath}/env/.env.${env}`
  })
}

const testEnvironment = new TestEnvironment(rootPath)

if (env === 'none') {
  testEnvironment.reset()
} else {
  const host = process.env.HTTP_HOST
  const color = process.env.BAR_COLOR
  if (host === undefined || color === undefined) {
    throw new Error("The variable HTTP_HOST is not found.")
  }
  // console.log(`host: ${host} , color: ${color}`)
  testEnvironment.setHost({host, color})
}