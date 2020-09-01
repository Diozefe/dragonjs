const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cria uma janela de navegação.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
    backgroundColor: '#1C1C1C', 
    title: 'DragonJS',
    icon: './public/dragonjs.png',
    frame: false,
    transparent: true,
    movable: true
  })
  // e carrega o arquivo index.html do seu aplicativo.
  win.loadURL('http://localhost:3000')
}

app.whenReady().then(createWindow)
