function scuberGreetingForFeet(feet){
    if(feet <= 400) {
          return 'This one is on me!'
    } else if(feet > 2000 && feet <= 2500){
          return 'I will gladly take your thirty bucks.'
    } else if(feet > 2500){
          return 'No can do.'
    }
       
}


function ternaryCheckCity(city){
    return (city == 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(answer){
      let tipGenerosity;

      switch (answer){
            case (tipGenerosity = 'generous'): answer = 'Thank you so much.';
            break;

            case (tipGenerosity = 'not so generous'): answer = 'Thank you.';
            break;

            default: answer = 'Bye.';
      }
}


      
