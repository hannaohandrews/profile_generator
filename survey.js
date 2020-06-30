// //The example usage shown at the beginning
// The .question(query, callback) function
// The .close() function


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answersForProfile = []

//0
rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  answersForProfile.push(answer)
  //1
  rl.question(`What's an activity you like doing? `, (answer) => {
    answersForProfile.push(answer)
    //2
    rl.question(`What do you listen to while doing that?`, (answer) => {
      answersForProfile.push(answer)
      //3
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer) => {
        answersForProfile.push(answer)
        //4
        rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
          answersForProfile.push(answer)
          //5
          rl.question(`Which sport is your absolute favourite?`, (answer) => {
            answersForProfile.push(answer)
            //6
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer) => {
              answersForProfile.push(answer)

              rl.close();

              console.log(
                `${answersForProfile[0]} loves to ${answersForProfile[1]} while listening to ${answersForProfile[2]},dovouring ${answersForProfile[4]} for ${answersForProfile[3]}, prefers to play ${answersForProfile[5]}, and is amazing at ${answersForProfile[6]}`)
              



            });
          });
        });
      });
    });
  });
});




