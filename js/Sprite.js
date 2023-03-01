function Sprite(img){//construtor do personagem
    //atributos do personagem
    this.mvRight = this.mvLeft = this.mvUp = this.mvDown = false //aqui o personagem estará parado
    this.runRight = this.runLeft = this.runUp = this.runDown = false //aqui o personagem estará parado
    this.srcX = this.srcY = 0 //Pegará os sprites para animação
    this.width = 163 //largura do personagem
    this.height = 200 //altura do personagem
    this.posX = this.posY = 0 //posição do personagem na tela
    this.img = img //recebe uma imagem por paramentro do personagem a ser criado

    this.speed = 1.5 //velecidade de movimento, quanto mais pixel, mais rápido
    this.speedRun = 2.5
    this.countAnim = 0 //contador do frame da imagem

    //metodos
    
    //Desenho
    this.draw = function(ctx){ //recebe o contexto 2d por parametro
        ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, this.width, this.height)
        //drawImagem, função presente no canvas, os parametros 
        //passados são (arquivo, cood X, cood Y, largura, altura, 
        //cordenada de exibição X, cordenada de exibição Y, 
        //largura de exibição de imagem X, altura de exibição de imagem Y)
        this.animation() //chama a função de animação quando desenhado
    }

    //movimento
    this.move = function(){
        if(this.mvRight){
            this.posX += this.speed //movimento do personagem
            this.srcY = this.height * 3 //posição do sprite na imagem PNG, onde 0 é a 
                                        //primeira posição e 3 é a ultima, de cima para baixo
        } else
        if(this.mvLeft){
            this.posX -= this.speed
            this.srcY = this.height * 2
        } else
        if(this.mvUp){
            this.posY -= this.speed
            this.srcY = this.height * 1
        } else
        if(this.mvDown){
            this.posY += this.speed
            this.srcY = this.height * 0
        } else
        if(this.runRight){
            this.posX += this.speedRun //movimento de correr do personagem
            this.srcY = this.height * 7 //posição do sprite na imagem PNG, onde 4 é a 
                                        //primeira posição e 7 é a ultima, de cima para baixo
        } else
        if(this.runLeft){
            this.posX -= this.speedRun
            this.srcY = this.height * 6
        } else
        if(this.runUp){
            this.posY -= this.speedRun
            this.srcY = this.height * 5
        } else
        if(this.runDown){
            this.posY += this.speedRun
            this.srcY = this.height * 4
        }
        
    }

    
    //anima
    this.animation = function(){
        if(this.mvLeft || this.mvDown || this.mvUp || this.mvRight || this.runLeft || this.runDown || this.runUp || this.runRight){
            this.countAnim++ //é preciso fazer isso, ou então a animação será rapida demais e ficará esquisito
            if(this.countAnim >= 104){
               this.countAnim = 8  
            }
            this.srcX = Math.floor(this.countAnim / 8) * this.width 
            // irá arredondar o valor: a cada 8 atualizações, o frame mudará
            // A função math.floor serve para arredondar o número da divisão que é gerado quebrado
            // como ele passa por 13 frames, a ultima atualização terá valor 104 
             
        }    
    }

}