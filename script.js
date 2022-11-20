let dialogs = 
[
  {
    "npc": '<img  src="img/npc1-cat-form/catSmile.png" alt="">',
    "dialog": " Hello....im glad i find you",
    "npcName": "???",
    "answer_1": "",
    "answer_2": "Where am i?? Who are you??",
    "answer_3": "",
    "answer_4": "",
    "player_thoughts":  "Whats going on? Who is this?"
    
  },

  {
    "npc": '<img  src="img/npc1-cat-form/catSmile.png" alt="">',
    "dialog": "Dont be scared I am just like you. I dont know why we are here....First i thought its a dream but its real.",
    "npcName": "???",
    "answer_1": "",
    "answer_2": "Whats your name? I cant remmember anything....",
    "answer_3": "",
    "answer_4": "",
    "player_thoughts":  "Am i dead? How can this be real?"
    
  },

  {
    "npc": '<img  src="img/npc1-cat-form/catSmile.png" alt="">',
    "dialog": "test",
    "npcName": "???",
    "answer_1": "",
    "answer_2": "test",
    "answer_3": "test",
    "answer_4": "",
    "player_thoughts":  "test"
    
  },

  {
    "npc": '<img  src="img/npc1-cat-form/catSmile.png" alt="">',
    "dialog": "This place has no name",
    "npcName": "???",
    "answer_1": "Are you real?",
    "answer_2": "I cant remmember anything....",
    "answer_3": "",
    "answer_4": "",
    "player_thoughts":  "Am i dead?"
    
  },

]

let currentDialog = 0;

let hpPoints = 10;
let energy = 20;
let drinkStatus = 15;
let foodStatus = 15;

let items = ['<img  src="icons/key-chain.png" alt="">', '<img  src="icons/tools.png" alt="">','<img src="icons/plum.png" alt="">','<img src="icons/rocket.gif" alt="">','<img src="icons/key.png" alt="">','<img src="icons/flower.png" alt=""> ']

let playerName = [];
let playerCharPicture = [];


let npcMain = ['<img src="img/npc1-cat-form/catSmile.png" alt="">']
let npcMainHuman = ['<img src="img/npc1/npcMain.png" alt="">']
                  
                  
                  
                  

//TEXT WRTIE EFFECT

let n = 0;
let txt = dialogs[currentDialog]['dialog'];
let speed = 100;
let typeSound = new Audio('typeSound.mp3');




function typeWriter() 
{

  

  if (n < dialogs[currentDialog]['dialog'].length) {
    
    getId("npcDialog").innerHTML += dialogs[currentDialog]['dialog'].charAt(n);
    n++;
    setTimeout(typeWriter, speed);
    
    getId('typeWriteSound').play();
    getId('typeWriteSound').volume = 0.4;
  }

 
  
}



function startDialog()
{
    let dialog = dialogs[currentDialog];
    

    getId('npc').innerHTML = `${npcMain}
    <span class="npc-name">${dialog['npcName']}</span>`

    getId('npcDialog').innerHTML = ` `  
     
    typeWriter()
    
    getId('answer_1').innerHTML = ` ${dialog['answer_1']} `
    getId('answer_2').innerHTML = ` ${dialog['answer_2']} `
    getId('answer_3').innerHTML = ` ${dialog['answer_3']} `
    //getId('answer_4').innerHTML = ` ${dialog['answer_4']} `
    getId('playerThoughts').innerHTML = ` ${dialog['player_thoughts']} `  
    getId('answer_4').innerHTML = ` `;

}

function nextDialog()
{


currentDialog ++;
n = 0
startDialog();
}

// INIT

function init()
{
  playSound();
  loadIntroScreen();
  renderCharScreen()
  
}




function setPlayerName()
{
  name = document.getElementById('inputPlayerName').value;

  playerName.push(name)
  document.getElementById('inputPlayerName').disabled = true;

  document.getElementById('charPictures').style = ' '; 
}

function setPlayerCharacter(selection)
{
  let selectedChar = selection.slice(-1);

  charFemale = document.getElementById(selection).src;
  

  playerCharPicture.push(charFemale)
  console.log('your char is', playerCharPicture)

  document.getElementById('chooseCharacterScreen').classList.add('hide')
  loadGameWorld()

}

function renderCharScreen()
{
  getId('mainGameScreen').innerHTML = `<div id="chooseCharacterScreen" class="game-container " >

  <script  src="https://cdn.lordicon.com/qjzruarw.js"></script>

  <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
  
  <lord-icon onclick="openMenu()" class="open-menu-button"
      src="https://cdn.lordicon.com/kxoxiwrf.json"
      trigger="hover"
      style="width:100px;height:100px">
  </lord-icon>
  

   
  <div id="charNameContainer" class="char-name-container" >

       <div class="choose-name">
        Choose your name <form action="" onsubmit="setPlayerName(); return false;";> <input id="inputPlayerName" placeholder="Choose a name..."  type="name" required> </form> 
      </div>

      <div id="charPictures" class="choose-character" style="display:none" >

          <span> Choose your Character</span>
        <div>

          <img onclick="setPlayerCharacter('char1')" id="char1" src="img/playerChars/male1.png" alt=""> 
          <img onclick="setPlayerCharacter('char2')" id="char2" src="img/playerChars/female1.png" alt="">


        </div>
      </div>

  </div>

</div>`
}

//HOVER,EFFECTS,SOUNDS FUNCTIONS

function hoverMenuButton()
{
  let audio = new Audio('sound/button_1.mp3');

  audio.volume = 0.1;
  audio.play();
}


function stopSound()
{
  var x = document.getElementById('mainMenuSound'); 
  x.pause();  
}


function playSound()
{
  var x = document.getElementById('mainMenuSound'); 


  x.play();
  x.volume = 0.3
}


function adjustVolume(x)
{
var x = document.getElementById('mainMenuSound');


vid.volume = x; 
}

// LOADING AND CLOSING DIFFERENT WINDOWS/SECTIONS

function loadIntroScreen()
{
  renderIntroScreen();
  
}


function loadGameWorld()
{
  getId('mainGameScreen').innerHTML = /*html*/ `

  <script  src="https://cdn.lordicon.com/qjzruarw.js"></script>
  <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
  <lord-icon onclick="openMenu()" class="open-menu-button"
      src="https://cdn.lordicon.com/kxoxiwrf.json"
      trigger="hover"
      style="width:100px;height:100px">
  </lord-icon> 
  
  <audio volume="1"  id="typeWriteSound" >
                  <source id="bgSound"  src="sound/typeSound.mp3"  type="audio/ogg" />
                  <source id="bgSound"  src="sound/typeSound.mp3"  type="audio/mpeg" />    
            </audio>
  
      <div class="game-window">
          
      
          <div class="inventory">

              <div class="player">
              <img src="${playerCharPicture}" alt=""> 
              <span>${playerName}</span>
              </div>

              <div class="status-bar">
                  <span style='flex-direction: column; display: flex;justify-content: space-evenly;'> <img src="icons/heart.png" alt=""> ${hpPoints}/10</span>
                  <span style=' flex-direction: column;display: flex;justify-content: space-evenly;'> <img src="icons/flash.png" alt=""> ${energy} /20</span>
                  <span style=' flex-direction: column;display: flex;justify-content: space-evenly;'> <img src="icons/water-status.png" alt="">${drinkStatus} /15</span>
                  <span style=' flex-direction: column;display: flex;justify-content: space-evenly;'> <img src="icons/fork.png" alt=""> ${foodStatus} /15</span>

              </div>
              <div class="player-inventory">
                  <!-- <img  src="icons/key-chain.png" alt=""> -->
                  
                 <!--  <img  src="icons/tools.png" alt="">
                  <img src="icons/water.png" alt="">
                  <img src="icons/plum.png" alt="">
                  <img src="icons/rocket.gif" alt="">
                  <img src="icons/key.png" alt="">
                  <img src="icons/flower.png" alt=""> -->
                
                  
                  
              </div>
          </div>

          <div class="world">

              <div id="npc" style='display: flex; flex-direction: column;' >
                
                <span class="npc-name"></span>
              </div>

              <div id="npcDialog" class="text-box">

                

              </div>

          
              <div class="answer-section">
                  
                  <a onclick="nextDialog()" id="answer_1" ></a>
                  <a onclick="nextDialog()" id="answer_2" ></a>
                  <a onclick="nextDialog()" id="answer_3"></a>
                  <a style="position:absolute" onclick="startDialog()" id="answer_4" >Hello?</a>
                  
              </div>

              <div id="playerThoughts" class="player-thougths">
              
                 
             
              
              </div>
          </div>


      </div>`

      
  }
  /* typeWriter() */


function closeIntroScreen()
{
  getId('introScreen').classList.add('hide');
}


function closeMenu()
{
  getId('startScreen').classList.add('hide')
  getId('mainGameScreen').classList.remove('hide')
  getId('mainMenuSound').classList.add('hide')
  stopSound();
  
}


function openMenu()
{
  getId('startScreen').classList.remove('hide')
  getId('settingScreen').classList.add('hide')
  getId('mainGameScreen').classList.add('hide')
   
}

function openSettings()
{
  getId('settingScreen').classList.remove('hide')
  getId('startScreen').classList.add('hide')
  getId('mainGameScreen').classList.add('hide')
}


//TEMPLATES


function renderIntroScreen()
{
  return  getId('introScreen').innerHTML = `<div class="put-center">

  <div class="sign">
      <span class="fast-flicker">ST</span>
      RAY
      <span class="flicker">ST</span>
      AR
  </div>

  <div class="play-button">
      <button onclick="closeIntroScreen()" class="glow-on-hover"><h2>START</h2></button>
  </div>

</div>`
}

function getId(id)
{
    return  document.getElementById(id);
}
























