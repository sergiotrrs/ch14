x = confirm(`¿Tu numero es mayor o igual a 50?`)
if (x == true){
    y= confirm (`¿Tu numero es 50?`);
   if (y==true){
      alert(`Tu numero es 50 asi que fue adivinado`);
      console.log(`Tu numero es 50 asi que fue adivinado`);
   }
   else{
     y= confirm(`¿Tu numero es Mayor o igual a 75?`)
      if(y== true){
       y=  confirm(`¿Tu numero es 75?`);   // aqui empieza el nuevo else
         if (y== true){
            alert(`Tu numero es 75 asi que fue adivinado`);
            console.log(`Tu numero es 75 asi que fue adivinado`);
         }
         else{
            for (let i = 76; i < 100; i++){
           y= confirm(`¿Tu numero es ${i}?`);
              if (y==true){
                 alert(`Tu numero es ${i} asi que fue adivinado`);
                 console.log(`Tu numero es ${i} asi que fue adivinado`);
                 break;
              }
              }
         }
         }
      else{
         for (let i = 51; i < 75; i++) {
         x= confirm(`¿Tu numero es ${i}`)
            if (x==true){
               alert(`Tu numero es ${i} asi que fue adivinado`);
               console.log(`Tu numero es ${i} asi que fue adivinado`);
                 break;
            }
         }
         
         
      }
      }

}
else{
   x= confirm(`¿Tu numero es mayor o igual a 25?`);
   if (x==true){
     x= confirm(`¿Tu numero es 25?`);
      if (x == true){
         alert(`Tu numero es 25 asi que fue adivinado`)
         console.log(`Tu numero es 25 asi que fue adivinado`);
      }
      else{
         for (let i = 26; i < 50; i++) {
            x = confirm(`¿Tu numero es ${i}?`);
            if (x==true){
                 alert(`Tu numero es ${i} asi que fue adivinado`);
                 console.log(`Tu numero es ${i} asi que fue adivinado`);
                 break;
         }
      }
   }
}
   else{
      for (let i = 1; i < 25; i++) {
         x= confirm(`¿Tu numero es ${i}`)
            if (x==true){
               alert(`Tu numero es ${i} asi que fue adivinado`);
               console.log(`Tu numero es ${i} asi que fue adivinado`);
                 break;
   }
   }
   }
}