hairstyles = {
   R_Long_and_Layered_With_Fringe: [ 
      17, 15, 10, 20, 24, 14, 16, 21
   ],
   R_Long_and_Blunt_With_Fringe: [
      17, 15, 10, 20, 24, 14, 16, 21
   ],
   R_Short_and_Tapered_With_Fringe: [
      17, 15, 10, 20, 24, 14, 16, 21
   ],
   R_Long_and_Layered_Without_Fringe: [
      15, 20, 22, 12, 17, 15, 10
   ],
   R_Long_and_Blunt_Without_Fringe: [
      15, 20, 22, 12, 17, 15, 10
   ],
   R_Short_and_Tapered_Without_Fringe: [
      15, 20, 22, 12, 17, 15, 10
   ],
   OV_Long_and_Layered_With_Fringe: [
      37, 32, 30, 40, 44, 49, 51, 41, 47, 46
   ],
   OV_Long_and_Blunt_With_Fringe: [
      37, 32, 30, 40, 44, 49, 51, 41, 47, 46
   ],
   OV_Medium_and_Blunt_With_Fringe: [
      37, 32, 30, 40, 44, 49, 51, 41, 47, 46
   ],
   OV_Medium_and_Layered_With_Fringe: [
      37, 32, 30, 40, 44, 49, 51, 41, 47, 46
   ],
   OV_Long_and_Layered_Without_Fringe: [
      35, 40, 42, 32, 37, 32, 30
   ],
   OV_Medium_and_Blunt_Without_Fringe: [
      35, 40, 42, 32, 37, 32, 30
   ],
   OV_Medium_and_Layered_Without_Fringe: [
      35, 40, 42, 32, 37, 32, 30
   ],
   OV_Short_and_Tapered_Without_Fringe: [
      35, 40, 42, 32, 37, 32, 30
   ],
   H_Medium_and_Blunt_With_Fringe: [
      55, 60, 62, 52, 50, 67, 64, 69, 71, 61, 59, 54
   ],
   H_Medium_and_Blunt_Without_Fringe: [
      55, 60, 62, 52, 50, 67, 64, 69, 71, 61, 59, 54
   ],
   H_Short_and_Layered_Without_Fringe: [
      55, 60, 62, 52, 50, 67, 64, 69, 71, 61, 59, 54
   ],
   H_Short_and_Layered_With_Fringe: [
      55, 60, 62, 67, 65, 64, 66, 71
   ],
   S_Long_and_Layered_With_Fringe: [
      87, 91, 81, 77, 75, 70, 80, 84, 86, 79, 74
   ],
   S_Medium_and_Layered_With_Fringe: [
      87, 91, 81, 77, 75, 70, 80, 84, 86, 79, 74
   ],
   S_Short_and_Tapered_With_Fringe: [
      87, 91, 81, 77, 75, 70, 80, 84, 86, 79, 74
   ],
   S_Long_and_Layered_Without_Fringe: [
      75, 80, 82, 77, 72, 75, 70
   ],
   S_Medium_and_Layered_Without_Fringe: [
      75, 80, 82, 77, 72, 75, 70
   ],
   S_Short_and_Tapered_Without_Fringe: [
      75, 80, 82, 87, 85, 84, 86, 91
   ],
   OB_Medium_and_Layered_With_Fringe: [
      100, 97, 104, 111, 101, 92, 90, 106
   ],
   OB_Medium_and_Blunt_With_Fringe: [
      100, 97, 104, 111, 101, 92, 90, 106
   ],
   OB_Short_and_Tapered_With_Fringe: [
      100, 97, 104, 111, 101, 92, 90, 106
   ],
   OB_Medium_and_Layered_Without_Fringe: [
      95, 102, 92, 100, 97, 90 
   ],
   OB_Medium_and_Blunt_Without_Fringe: [
      95, 102, 92, 100, 97, 90 
   ],
   OB_Short_and_Tapered_Without_Fringe: [
      95, 102, 92, 100, 97, 90 
   ],
   OB_Short_and_Tapered_With_Fringe: [
      95, 100, 102, 107, 105, 104, 106, 111
   ],
   T_Long_and_Layered_With_Fringe: [
      117, 112, 110, 120, 124, 126, 13
   ],
   T_Medium_and_Layered_With_Fringe: [
      117, 112, 110, 120, 124, 126, 13
   ],
   T_Long_and_Layered_Without_Fringe: [
      115, 120, 122, 112, 117, 110
   ],
   T_Medium_and_Layered_Without_Fringe: [
      115, 120, 122, 112, 117, 110
   ],
   T_Short_and_Tapered_With_Fringe: [
      115, 120, 122, 127, 125, 124, 126, 131
   ]
}

let multipleResults = []


// hairApp.userChoices =
//    Number($('input[name=structure]:checked').val()) + Number($('input[name=thickness]:checked').val()) + Number($('input[name=texture]:checked').val()) + Number($('input[name=forehead]:checked').val()) + Number($('input[name=maintenance]:checked').val());


// find out what the user chose
$(function(){
   // prevent button from re-directing
   $('form').on('submit',function(e){
      const shapeChoice = $('input[name=structure]:checked').val();
      const thicknessChoice = $('input[name=thickness]:checked').val();
      const textureChoice = $('input[name=texture]:checked').val();  
      const fringeChoice = $('input[name=forehead]:checked').val();
      const maintenanceChoice = $('input[name=maintenance]:checked').val();
      
      // I want to add their total value to the type of hairstyle
      const userChoices = Number(shapeChoice) + Number(thicknessChoice) + Number(fringeChoice) + Number(maintenanceChoice) + Number(textureChoice);
      // console.log(userChoices);

      e.preventDefault();
      for(let result in hairstyles){
         // console.log(result);
         // console.log(hairstyles[result]);
         hairstyles[result].forEach((resItem)=>{
            // console.log(resItem);
            if(resItem === userChoices) {
               // console.log(result);
               multipleResults.push(result);
               console.log(multipleResults);
            }
         });
      }


   });
   // Find out what the user's answers are
   // The answers have a number value


   // Take the total and match it to the results


   // const newResultName =
   // console.log(newResultName);
   



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




