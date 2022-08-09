
//Perhaps i could set a let for each button which activates the text nodes as well as generating the image??


let image = document.getElementById("startImg");
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')



///button1.onclick = nextImage('startImg');

///button1.addEventListener("click", nextImage);

///button1.addEventListener("click", () => {
    //nextImage("startImg") 
    //});

/*------------------------------------*/
////GAME////

const textElement = document.getElementById('text')

///perhaps if i made reference to each button instead? - 'option-buttons', 
///I think what it is doing now is look at each of the buttons in sequence??
//seems like the options are no longer tied to all 4 buttons but rather tied only to button1 
const optionButtonsElement = document.getElementById('option-buttons')

///important!!! - difference between const and function? 
//function colorChange {
//if (textNodeId => 2){document.getElementById("container").style.background-color: red;}
//}


//I THINK I NEED TO CHANGE THE WAY THESE TEXT NODES GENERATE 

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

///Maybe i can add it in here? 
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }


    
    ///THE GOLDEN EGG!!!!!
    const roomImage = roomImages.find(roomImage => roomImage.imgArray === textNode.room_id)
    imgElement.src = roomImage.imgURL

    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    


    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => 
            selectOption(option))
            optionButtonsElement.appendChild(button)

        }

    })

}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)

}



//if (nextTextNodeId = 1) {
  //  return nextImage()
//}


const textNodes = [{
        id: 1, 
        room_id: 1, 
        text: 'You wake up in your bunk. "I feel guilty and need to get out of bed."',
        options: [{
                text: 'Look at alarm clock',
                nextText: 2
            },
            {
                text: 'Get out of bed',
                nextText: 3

            }
        ]

    },
    
{
    id: 2, 
    room_id: 2,  
    text: 'Its 3:34am',
    options: [{
        text: 'Get out of bed',
        nextText: 3
    },
    
    ]
},

{
    id: 3,
    room_id: 3, 
    text: 'Its dark, the automatic lights should have come on...',
    options: [{
        text: 'Look in your chest',
        nextText: 4
    },
    {
        text: 'Look out window',
        nextText: 5
    },
    {
        text: 'Put your uniform on',
        nextText: 6

    },
    {
        text: 'Open door and leave your cell',
        nextText: 6

    }
    ]
},


]

startGame()

///So for SOME GOD DAMN REASON YOU CANNOT REFERENCE THE BUTTON GRID BY ITS INDIVIDUAL BUTTONS - ONLY REFERENCING OPTION-BUTTONS WILL WORK - IT MUST BE BECAUSE OF THE OTHER JAVASCRIPT STUFF GOING ON
///let button1 = document.getElementById("button1");


//There is no way to tie the pictures to the buttons because they simply cease to exist and are recreated 


//GAME DESIGN MOVING FORWARD 
//Maybe i can make a text node keypad? - OR A CONVERSATION TREE FOR AN NPC! - THE GUY IN YOUR ROOM
//NEED TO MAKE A FADE EFFECT FOR EACH PAGE OF THE SITE 
//WOULD BE GREAT TO HOST THIS SOMEWHERE 


//Not needed?
///const test = document.querySelector(".button");

//something is wrong with this breaks game? 
//i wonder if button 1 - 4 dont really exist unless javascript creates them? 
//test.addEventListener("click", () => { 
    //nextImage("button") 
    
//});

///IMAGE ARRAY///

//I THINK IT MAY BE POSSIBLE TO LINK THE IMAGE ARRAY TO THE TEXT NODE ARRAY 


var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'image1.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'image2.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'image3.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'image4.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'image5.jpg';




/*------------------------------------*/
//ALL CORRECT///

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}



/*------------------------------------*/