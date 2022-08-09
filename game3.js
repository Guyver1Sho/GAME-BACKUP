const textElement = document.getElementById('text')
const imgElement = document.getElementById('room-image');
const optionButtonsElement = document.getElementById('option-buttons')
let textArrayIteration = 1


///IMAGE ARRAY///

//I THINK IT MAY BE POSSIBLE TO LINK THE IMAGE ARRAY TO THE TEXT NODE ARRAY 

const roomImages = [{


    imgIndex: 1,
    imgURL: "image1.jpg"
},
{
    imgIndex: 2,
    imgURL: "image2.jpg"
},
{
    imgIndex: 3,
    imgURL: "image3.jpg"
},
{
    imgIndex: 4,
    imgURL: "image4.jpg"
}
]

//GAME
let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text

///THE GOLDEN EGG!!!!!
const roomImage = roomImages.find(roomImage => roomImage.imgIndex === textNode.room_id)
imgElement.src = roomImage.imgURL
////

    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }


    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
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

const textNodes = [{
    id: 1, 
    room_id: 1, 
    text: '"00000000000000000000000000000000000000000000000000000"',
    options: [{
            text: 'Wake up',
            nextText: 2
        }
        
    ]

},
    
{
    id: 2, 
    room_id: 2, 
    text: 'You wake up in your bunk. \n"I dont feel good this morning....i need to get out of bed."',
    options: [{
            text: 'Look at alarm clock',
            nextText: 3
        },
        {
            text: 'Get out of bed',
            nextText: 4

        }
    ]

},

{
id: 3, 
room_id: 3,  
text: 'Its 3:34am',
options: [{
    text: 'Get out of bed',
    nextText: 4
},

]
},

{
id: 4,
room_id: 4, 
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
    text: 'Open door and \nleave your cell',
    nextText: 6

}
]
},


]

startGame()




/*------------------------------------*/
//ALL CORRECT///

//function nextImage(element)
//{
    //var img = document.getElementById(element);

    //for(var i = 0; i < imgArray.length;i++)
    //{
        //if(imgArray[i].src == img.src) // << check this
        //{
            //if(i === imgArray.length){
                //document.getElementById(element).src = imgArray[0].src;
                //break;
            //}
            //document.getElementById(element).src = imgArray[i+1].src;
            //break;
        //}
    //}
//}



/*------------------------------------*/