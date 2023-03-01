window.onload = function(){
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40, A = 65
    var cnv = document.querySelector("canvas") //seleciona a query/ elemento canvas
    var ctx = cnv.getContext("2d") //contexto que será usado no programa
    var spriteSheet = new Image() //novo objeto da classe Image: objeto de folhas de Sprites
    spriteSheet.src = "img/LufiaSpriteUniformeBotas.png" //endereço da imagem
    var char = new Sprite(spriteSheet) //objeto char: o personagem que será criado, 
                                       //spriteSheet está sendo recebida por function sprite(img)
    var aux = {}//auxiliar responsavel pelos botões do jogo
    aux = (aux || [])
    var run = false //O JavaScript não adimite duas teclas pressionadas, esse auxiliar previnirá que
                //o botão de correr fique "pressionado"
    var auxLeft = auxRight = auxUp = AuxDown = false

    //variáveis do Touch

    var btnCima = this.document.getElementById("btnCima")
    var btnBaixo = this.document.getElementById("btnBaixo")
    var btnEsquerda = this.document.getElementById("btnEsquerda")
    var btnDireita = this.document.getElementById("btnDireita")
    var btnA = this.document.getElementById("btnA")                                  

    //-------------------------------------Toucnh Function---------------------------------------------

    btnCima.addEventListener("mouseover", moveClickUp, false)
    btnCima.addEventListener("onclick", moveClickUp, false)
    btnCima.addEventListener("mouseout", moveClickUpOut, true)

    btnBaixo.addEventListener("mouseover", moveClickDown, false)
    btnBaixo.addEventListener("onclick", moveClickDown, false)
    btnBaixo.addEventListener("mouseout", moveClickDownOut, true)

    btnEsquerda.addEventListener("mouseover", moveClickLeft, false)
    btnEsquerda.addEventListener("onclick", moveClickLeft, false)
    btnEsquerda.addEventListener("mouseout", moveClickLeftOut, true)

    btnDireita.addEventListener("mouseover", moveClickRight, false)
    btnDireita.addEventListener("onclick", moveClickRight, false)
    btnDireita.addEventListener("mouseout", moveClickRightOut, true)

    btnA.addEventListener("mouseover", moveClickRun, false)
    btnA.addEventListener("onclick", moveClickRun, false)
    
    function moveClickUp(){
        if(run){
            char.runUp = true 
        }else{
            char.mvUp = true
        }
    }  

    function moveClickUpOut(){
            char.runUp = false
            char.mvUp = false
            char.srcX = 0
            run = false
    }

    function moveClickDown(){
        if(run){
            char.runDown = true
        }else{
            char.mvDown = true
        }
    }  

    function moveClickDownOut(){
            char.runDown = false
            char.mvDown = false
            char.srcX = 0
            run = false
    }

    function moveClickLeft(){
        if(run){
            char.runLeft = true
        }else{
            char.mvLeft = true
        }
    }  

    function moveClickLeftOut(){
            char.runLeft = false
            char.mvLeft = false
            char.srcX = 0
            run = false    
    }

    function moveClickRight(){
        if(run){
            char.runRight = true
        }else{
            char.mvRight = true
        }
    }  

    function moveClickRightOut(){
            char.runRight = false
            char.mvRight = false
            char.srcX = 0
            run = false    
    }

    function moveClickRun(){
        run = true
    }

    //--------------------------------------------Keyboard Functon-------------------------------------

    window.addEventListener("keydown", keydownHandler, false) //função para movimentação de personagem
    //evento quando a tecla está pressionada
    window.addEventListener("keypress", keydownHandler, false)
    
    window.addEventListener("keyup", keyupHandler, false)


    function keydownHandler(e){
        //Abaixo: LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40 - esses são os codigos do teclado em JavaScript
        aux[e.keyCode] = (e.type == 'keydown')
            switch(aux[e.keyCode]){
                case (aux[RIGHT]):
                    auxRight = true
                    auxLeft = false
                    auxUp = false
                    AuxDown = false
                    break
                case (aux[LEFT]): 
                    auxRight = false
                    auxLeft = true
                    auxUp = false
                    AuxDown = false
                    break
                case (aux[UP]):
                    auxRight = false
                    auxLeft = false
                    auxUp = true
                    AuxDown = false
                    break
                case (aux[DOWN]): 
                    auxRight = false
                    auxLeft = false
                    auxUp = false
                    AuxDown = true
                    break
            } 
            if(aux[A]){run = true}//ativa o modo correr
            if(run == true){//se o botão for precissionado
                if (auxRight){ //correr para direita
                    char.runRight = true
                    char.runLeft = false
                    char.runUp = false
                    char.runDown = false
                }else if (auxLeft){  //correr para esquerda
                    char.runRight = false
                    char.runLeft = true
                    char.runUp = false
                    char.runDown = false
                }else if (auxUp){ //correr para cima
                    char.runRight = false
                    char.runLeft = false
                    char.runUp = true
                    char.runDown = false
                }else if (AuxDown){ //correr para baixo   
                    char.runRight = false
                    char.runLeft = false
                    char.runUp = false
                    char.runDown = true 
                } 
            }else{
                //parte dos movimentos
                if (auxRight){ //correr para direita
                    char.mvRight = true
                    char.mvLeft = false
                    char.mvUp = false
                    char.mvDown = false
                }else if (auxLeft){  //correr para esquerda
                    char.mvRight = false
                    char.mvLeft = true
                    char.mvUp = false
                    char.mvDown = false
                }else if (auxUp){ //correr para cima
                    char.mvRight = false
                    char.mvLeft = false
                    char.mvUp = true
                    char.mvDown = false
                }else if (AuxDown){ //correr para baixo   
                    char.mvRight = false
                    char.mvLeft = false
                    char.mvUp = false
                    char.mvDown = true
                } 
        
        }       
            
    }

    function keyupHandler(e){ //quando a tecla e liberada
        
        aux[e.keyCode] = (e.type == 'keydown')
        
        switch(aux[e.keyCode] == false){
            case (aux[RIGHT]) == false:
                auxRight = false
                auxLeft = false
                auxUp = false
                AuxDown = false
                break
            case (aux[LEFT] == false): 
                auxRight = false
                auxLeft = false
                auxUp = false
                AuxDown = false
                break
            case (aux[UP] == false):
                auxRight = false
                auxLeft = false
                auxUp = false
                AuxDown = false
                break
            case (aux[DOWN] == false): 
                auxRight = false
                auxLeft = false
                auxUp = false
                AuxDown = false
                break
        }
        if(aux[A] == false){run = false}
        if(run == false){
        switch(e.keyCode){
            case (A): //A personagem deixará de correr
                char.runRight = false
                char.runLeft = false
                char.runUp = false
                char.runDown = false
                char.srcX = 0
                aux = {}
                break  
            }
        }
        //A personagem deixará de andar
        switch(aux[e.keyCode] == false){
            case (aux[RIGHT]) == false:
                char.mvRight = false
                char.srcX = 0
                aux = {}
                break
            case (aux[LEFT] == false): 
                char.mvLeft = false
                char.srcX = 0
                aux = {}
                break
            case (aux[UP] == false):
                char.mvUp = false
                char.srcX = 0
                aux = {}
                break
            case (aux[DOWN] == false): 
                char.mvDown = false
                char.srcX = 0
                aux = {}
                break
        }
        
    }



    spriteSheet.onload = function(){ //essa função será disparada quando a imagem Sprite-0006 for 
                                     //carregada para o objeto spriteSheet
        init()

    }
    
    function init(){ //função que será executada quando spriteSheet.onload for executada
        loop() //logo, a função loop será executado pela primeira vez
    }
    
    function update(){ //função de atualização 
       char.move()  
    }

    function draw(){ //função que desenha na tela
        ctx.clearRect(0, 0, cnv.width, cnv.height)//se não for feito isso, dará um bug 
                                                  //na imagem, como se fosse um trem
        char.draw(ctx) //função da função Sprite

    }

    function loop(){ //gera um loop
        window.requestAnimationFrame(loop, cnv) //função autoreferenciativa: Ela chaa ela mesma
        update()
        draw()
    }

}