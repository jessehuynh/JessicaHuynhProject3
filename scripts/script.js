hairstyles = {
   R_Long_and_Layered_With_Fringe: [ 
      17, 15, 10, 20, 24, 14, 16, 21, 7
   ],
   R_Long_and_Blunt_With_Fringe: [
      17, 15, 10, 20, 24, 14, 16, 21
   ],
   R_Short_and_Tapered_With_Fringe: [
      17, 15, 10, 20, 24, 14, 16, 21
   ],
   R_Long_and_Layered_Without_Fringe: [
      15, 20, 22, 12, 17, 15, 10, 7
   ],
   R_Long_and_Blunt_Without_Fringe: [
      15, 20, 22, 12, 17, 15, 10, 7
   ],
   R_Short_and_Tapered_Without_Fringe: [
      15, 20, 22, 12, 17, 15, 10, 7
   ],
   V_Long_and_Layered_With_Fringe: [
      37, 32, 30, 40, 44, 49, 51, 41, 47, 46, 36
   ],
   V_Long_and_Blunt_With_Fringe: [
      37, 32, 30, 40, 44, 49, 51, 41, 47, 46, 27, 36
   ],
   V_Medium_and_Blunt_With_Fringe: [
      37, 32, 30, 40, 44, 49, 51, 41, 47, 46, 36
   ],
   V_Medium_and_Layered_With_Fringe: [
      37, 32, 30, 40, 44, 49, 51, 41, 47, 46, 27, 36
   ],
   V_Long_and_Layered_Without_Fringe: [
      35, 40, 42, 32, 37, 32, 30
   ],
   V_Medium_and_Blunt_Without_Fringe: [
      35, 40, 42, 32, 37, 32, 30, 27
   ],
   V_Medium_and_Layered_Without_Fringe: [
      35, 40, 42, 32, 37, 32, 30
   ],
   V_Short_and_Tapered_Without_Fringe: [
      35, 40, 42, 32, 37, 32, 30
   ],
   H_Medium_and_Blunt_With_Fringe: [
      55, 60, 62, 52, 50, 67, 64, 69, 71, 61, 59, 54, 56
   ],
   H_Medium_and_Blunt_Without_Fringe: [
      55, 60, 62, 52, 50, 67, 64, 69, 71, 61, 59, 54
   ],
   H_Short_and_Layered_Without_Fringe: [
      55, 60, 62, 52, 50, 67, 64, 69, 71, 61, 59, 54
   ],
   H_Short_and_Layered_With_Fringe: [
      55, 60, 62, 67, 65, 64, 66, 71, 56
   ],
   S_Long_and_Layered_With_Fringe: [
      87, 91, 81, 77, 75, 70, 80, 84, 86, 79, 74, 76
   ],
   S_Medium_and_Layered_With_Fringe: [
      87, 91, 81, 77, 75, 70, 80, 84, 86, 79, 74, 76
   ],
   S_Short_and_Tapered_With_Fringe: [
      87, 91, 81, 77, 75, 70, 80, 84, 86, 79, 74, 76
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
   B_Medium_and_Layered_With_Fringe: [
      100, 97, 104, 111, 101, 92, 90, 106, 99, 96
   ],
   B_Medium_and_Blunt_With_Fringe: [
      100, 97, 104, 111, 101, 92, 90, 106, 99, 96
   ],
   B_Short_and_Tapered_With_Fringe: [
      100, 97, 104, 111, 101, 92, 90, 106, 99, 96
   ],
   B_Medium_and_Layered_Without_Fringe: [
      95, 102, 92, 100, 97, 90 
   ],
   B_Medium_and_Blunt_Without_Fringe: [
      95, 102, 92, 100, 97, 90 
   ],
   B_Short_and_Tapered_Without_Fringe: [
      95, 102, 92, 100, 97, 90 
   ],
   B_Short_and_Tapered_With_Fringe: [
      95, 100, 102, 107, 105, 104, 106, 111
   ],
   T_Long_and_Layered_With_Fringe: [
      117, 112, 110, 120, 124, 126, 131, 119
   ],
   T_Medium_and_Layered_With_Fringe: [
      117, 112, 110, 120, 124, 126, 131, 119
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
};

let multipleResults = []

const shapeChoice = $('input[name=structure]:checked').val();
const thicknessChoice = $('input[name=thickness]:checked').val();
const textureChoice = $('input[name=texture]:checked').val();
const fringeChoice = $('input[name=forehead]:checked').val();
const maintenanceChoice = $('input[name=maintenance]:checked').val();


// find out what the user chose
$(function(){
   $('form').on('submit',function(e){
      // prevent button from re-directing
      e.preventDefault();
      // Find out what the user's answers are and add the values together
      const userChoices = Number(shapeChoice) + Number(thicknessChoice) + Number(fringeChoice) + Number(maintenanceChoice) + Number(textureChoice);
      console.log(userChoices);
      // randomize the results from the matched arrays
      const randomResult = (array) => {
         const randomIndex = array[Math.floor(Math.random() * array.length)]
         // console.log(randomIndex);
         return randomIndex;
      }

      // const hi = Object.keys(hairstyles)
      // loop through the arrays and match the user's final value to a hairstyle
      for(result in hairstyles){
         // console.log(result);
         // console.log(hairstyles[result]);
         hairstyles[result].forEach((resItem)=>{
            // console.log(resItem);
            if(resItem === userChoices) {
               // console.log(result);
               multipleResults.push(result);
               // console.log(multipleResults);
         }
            randomResult(multipleResults);
            // console.log(multipleResults);
         });
         
      }
      // const resultName = randomResult(multipleResults).slice(1,resultName.length);
      let resultName = randomResult(multipleResults).split('_').join(' ');
      resultName = resultName.slice(2, resultName.length);
      console.log(resultName);
      // console.log(hi);
      // console.log(hairstyles);
   

   });

});




