// export const Louco = (nome) =>{
//     if(nome === 'Guitarra'){
//         console.log('Tem cordas')        
//         }
//         else if(nome === 'Bateria'){
//             console.log('Tem pedal')
//         }
//         else if(nome === "Microfone"){
//             console.log('Tem fios')
//         }
//         else{
//             console.log('Não conheço esse instrumento')
//         }
// return
// }

export const Louco =(nome)=> {
    switch(nome){
     case "Bruno": console.log('É muito chato'); break;
     case "Fulano": console.log('É feio'); break;
     case "Beltrano": console.log('É gordo'); break;
     default : console.log('Não conheço'); break;
    }
 }
 
 

     
