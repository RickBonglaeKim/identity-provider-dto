import fs from 'fs'

class TestEnvironment {
  #filePath
  
  constructor(path) {
    this.#filePath = `${path}/.vscode/settings.json`
  }

  #readFile() {
    const settingFile = fs.readFileSync(this.#filePath)
    return JSON.parse(settingFile)
  }

  #writeFile(file) {
    fs.writeFileSync(this.#filePath, JSON.stringify(file, null, 2), 'utf8')
  }

  setHost(data) {
    const file = this.#readFile()
    file['rest-client.environmentVariables'].$shared.host = data.host
    const barGroup = file['workbench.colorCustomizations']
    barGroup['titleBar.activeBackground'] = data.color
    barGroup['statusBar.background'] = data.color
    this.#writeFile(file)
  }

  reset() {
    const file = this.#readFile()
    file['rest-client.environmentVariables'].$shared.host = ""
    const barGroup = file['workbench.colorCustomizations']
    delete barGroup['titleBar.activeBackground']
    delete barGroup['statusBar.background']
    this.#writeFile(file)
  }

}

export default TestEnvironment