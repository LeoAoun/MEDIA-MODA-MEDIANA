var values = [] 
var sum = 0

function clean(){
    document.getElementById("input").value = ''
}

function saveArray(){
    var escrito = document.getElementById("input")
    var number = Number(escrito.value)
    values.push(number)
    
        values.sort(function(a,b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    })
    document.getElementById("array").innerHTML = values 
}

function change(i){
    let fornecidosEN = document.getElementById("write")
    fornecidosEN.innerHTML = i.value

}

function calcMode(){
    var mode = null;
    var eve = -1;

for (var f = 0 ; f < values.length ; f++ ) {
  var ocorrencias = 1;
  for (var t = f+1 ; t < values.length ; t++ )
    if ( values[f] == values[t] )
      ocorrencias++;
  
  if ( ocorrencias > eve ) {
    mode = values[f];
    eve = ocorrencias;
  }
}
document.getElementById("resultado").innerHTML = "A moda dos valores é: " + mode + " (" + eve + " ocorrência(s))"
}

function calcMean(){
   
    for(var x = 0; x < values.length; x++){
        sum += values[x]
        
    } 
    var mean = sum / values.length
    document.getElementById("resultado").innerHTML = "A média dos valores é: " + mean
}

function calcMedian(){

if (values.length % 2 == 0){
    let x = (values.length)/2
    let y = x-1
    let median = (parseFloat(values[x]) + parseFloat(values[y]))/2
    
    document.getElementById("resultado").innerHTML = "A mediana dos valores é: " + median
    
}else{
    let x = (values.length)/2
    var f = Math.floor(x)
    let median = parseFloat(values[f])

    document.getElementById("resultado").innerHTML = "A mediana dos valores é: " + median

}
}


