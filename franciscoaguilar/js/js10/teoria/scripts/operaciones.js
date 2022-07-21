function suma(a,b){
    a=Number(a);
    b=Number(b);
    return a + b;
}


multiplica = (a,b) => a*b ;

function palindromo(text){

    //text = "1 amor, Roma 1";
    x=text.length;
    let array=[" "];
    let j = 0;
    let i = 0;
    for(i = x; i >= 0; i--){
     array[j] = text[i];
        j++;
       }
      array.shift();
    array=array.join("");
    array = array.replace(/\s+/g, '');
    text = text.replace(/\s+/g, '');
    array=array.toLowerCase();
    text=text.toLowerCase();
    

    if(array == text){
        return true;
    }else{
        return false;
    } 
    
    
}


module.exports = {suma, multiplica, palindromo}