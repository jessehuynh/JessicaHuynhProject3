const hairstyle = {
   round: [
      {  
         name:'Long & Blunt - Low Maintenance',
         thickness:'fine',
         fringe:false,
         maintenance:'low',
      },
      {
         name:'Long & Blunt - Styled',
         // thickness:'medium',
         fringe:true,
         maintenance:'style'
      },
      // {
      //    name:'Long & Blunt - Styled',
      //    thickness:'coarse',
      //    fringe:true,
      //    maintenance:'style',
      // }
   ],
   oval: [
      {
         name:'Long & Layered/Blunt - Low Maintenance',
         thickness:'fine',
         fringe:false,
         maintenance:'low'
      },
      {
         name:'Long & Layered/Blunt - Styled',
         thickness:'medium',
         fringe:true,
         maintenance:'style'
      },
      {
         name: 'Long & Layered/Blunt - Styled',
         thickness: 'medium',
         fringe: false,
         maintenance: 'style'
      },
      {
         name: 'Long & Layered/Blunt - Styled',
         thickness: 'coarse',
         fringe: false,
         maintenance: 'style'
      },
      {
         name: 'Long & Layered/Blunt - Styled',
         thickness: 'coarse',
         fringe: true,
         maintenance: 'style'
      },
      {
         name: 'Long & Layered/Blunt - Low Maintenance',
         thickness: 'coarse',
         fringe: false,
         maintenance: 'low'
      },
      {
         name:'Short & Layered/Blunt - Styled',
         length:'short',
         maintenance:'style',
      }
   ],
   heart: [
      {
         name:'Long & Layered',
         fringe:true,
      },
      {
         name:'Medium & Layered',
         fringe:true,
      },
      {
         name:'Short - Styled',
         length:'short',
         maintenance:'style',
      }
   ],
   square: [
      {
         name:'Long & Layered - Styled/Low',
         fringe:true,
      },
      {
         name: 'Long & Layered - Low',
         fringe: false,
      },
      {
         name:'Medium & Layered - Styled',
         fringe:true,
      },
      {
         name: 'Medium & Layered - Styled/Low',
         fringe: false,
      },
      {
         name:'Short - Styled',
         length:'short',
         maintenance:'style',
      }
   ],
   oblong: [
      {
         name:'Short & Layered/Blunt - Styled',
         fringe: true,
         maintenance: 'style',
      },
      {
         name: 'Short & Layered/Blunt - Styled',
         fringe: false,
         maintenance: 'styled',
      },
      {
         name:'Medium & Layered/Blunt - Styled',
         fringe:false,
         maintenance:'styled',
      },
      {
         name:'Short & Layered/Blunt - Low Maintenance',
         fringe:false,
         maintenance:'low'
      }
   ],
   triangle: [
      {
         name: 'Short & Layered/Blunt - Styled',
         fringe: true,
         maintenance: 'style',
      },
      {
         name: 'Short & Layered/Blunt - Low',
         fringe: false,
         maintenance: 'low',
      },
      {
         name:'Medium & Layered/Blunt - Styled',
         fringe:true,
         maintenance:'style',
      },
      {
         name: 'Medium & Layered/Blunt - Low',
         fringe: false,
         maintenance: 'low',
      }
   ]
}

const hairApp = {}

hairApp.structure = {
   round:2,
   oval:5,
   heart:2,
   square:1,
   oblong:3,
   triangle:4
},

hairApp.thickness = {
   fine:1,
   medium:2,
   coarse:3
}

hairApp.forehead = {
   three: 3,
   five: 5,
}

hairApp.maintenance = {
   style: 3,
   low: 1,
}

hairApp.length = {

}

// find out what the user chose
$(function(){
   // prevent button from re-directing
   $('form').on('submit',function(e){
      e.preventDefault();
   });
   // Find out what the user's answers are
   // The answers have a number value
   const shapeChoice = $('input[name=structure]:checked').val();
   console.log(shapeChoice);

   const thicknessChoice = $('input[name=thickness]:checked').val();
   console.log(thicknessChoice);

   const textureChoice = $('input[name=texture]:checked').val();
   console.log(textureChoice);

   const fringeChoice = $('input[name=forehead]:checked').val();
   console.log(fringeChoice);

   const maintenanceChoice = $('input[name=maintenance]:checked').val();
   console.log(maintenanceChoice);

   // I want to add their total value to the type of hairstyle
   const userChoices = Number(shapeChoice) + Number(thicknessChoice) + Number(fringeChoice) + Number(maintenanceChoice) + Number(textureChoice);
   console.log(userChoices);

   // Take the total and match it to the results




   // const fringeInfo = structure[fringeChoice];
   // structure.round[0].fringe
   // const getFringeChoice = () => {
   //    if(fringeChoice === 3){
   //       return false;
   //    } else if(fringeChoice === 5) {
   //       return true;
   //    } else {
   //       const randNum = Math.random(); // give num between 0 and 1
   //       if (randNum < 0.5) {
   //          return true;
   //       } else {
   //          return false;
   //       }
   //    }
   // };

   // console.log(getFringeChoice());

   


   // for (let i = 0; i < fringeInfo.length; i++) {
   //    if(fringeInfo[i] === true) {
   //       console.log('chicken wings');
   //    } else {
   //       console.log('pizza');
   //    }
   // }

   // for(let i = 0; i < shapeInfo.length; i++){
   //    if(shapeInfo[i].thickness === 'fine' && fringeInfo === 'true') {
   //       console.log('hi world');
   //    }
   // }
   // if the user's choice for hair density is thin, or style is low maintenance, fringe is not an option.
   // if the user chooses the 'short' length, filter for short options, if med-long, filter med-long option. If 'pick for me', randomize
   // if the user's forehead is small, no fringe. If the forehead is normal, fringe is random. If the user's forehead is big, yes fringe.
   // I want to take the user's choices and match it to the structure object



});




