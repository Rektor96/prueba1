let animales = ["gato","perro","pablo"];

    for (animal in animales){
            document.write(animal + "<br>" );
            
        }
    //nos muestra el indice de cada elemento del array    
    for (animal of animales) {
        document.write(animal + "<br>")
        
    }
    //nos muestra el valor de cada elemento del array