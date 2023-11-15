import { Server } from 'socket.io';
import ProductManager from './classes/productManager.classes.js';

let socketServer
let store

const productManager = new ProductManager

export const init = (httpServer) => {
  socketServer = new Server(httpServer);

  socketServer.on('connection', (socketClient) => {
    console.log(`Nuevo cliente socket conectado ${socketClient.id} `);

    socketClient.emit("products", store)

    socketClient.on('newProduct', (newProduct) => {
      
      productManager.addProducts(newProduct)
      socketServer.emit("products", store)
    });
  });
}

export const emit = (data) => { 
  store = data
}
