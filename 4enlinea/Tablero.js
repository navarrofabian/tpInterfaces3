class Tablero {
  constructor() {
    this.tablero = new Array(8);
  }

  crearArray() {
    for (var i = 0; i < 8; i++) {
      this.tablero[i] = new Array(8);
    }
    this.inicializarTablero();
  }

  inicializarTablero() {
    //let res = '';
    for (let x = 0; x < this.tablero.length; x++) {
        for ( let y = 0; y < this.tablero.length; y++) {
            this.tablero[x][y] = -1;
            //res += this.tablero[x][y]
            //  console.log(res)
        }
    }
  }

  //    ej:  fil 8  col 5
  addFicha(posx, ficha) {
    let fil = 8;
    let f = ficha.getPos();
    let col = parseInt(posx)
    let fi = this.tablero[fil][col]
    console.log(fi)
    console.log('fila: '+ fil, 'columna: '+ col, 'ficha: '+  f);


    if (this.tablero[fil][col] === -1) {
      this.tablero[fil][col] = ficha;
      let posX = col * 100;
      let posY = fil * 100;
      console.log("pos X: " + posX + " pos y: " + posY);
      ficha.setPos(posX, posY);
    } else {
      while (this.tablero[fil][col] != null && fil > 0) {
        fil--;
        console.log(fil);
      }
      let posX = col * 100;
      let posY = fil * 100;
      console.log("pos X: " + posX + " pos y: " + posY);
      ficha.setPos(posX, posY);
    }
  }

  drawTablero() {
    //this.clearCanvas();
    for (let x = 0; x < this.tablero.length; x++) {
      for (let y = 0; y < this.tablero[x].length; y++) {
        ficha = this.tablero[x][y];
        if(ficha != null) {
            console.log(ficha);
            ficha.draw();
        }
      }
    }
  }


}
