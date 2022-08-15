const h2tags = document.getElementsByTagName('h2');
for(const h2tag of h2tags ){
    h2tag.style.color = 'lightblue'
}
// backpak section 
const backpackSection = document.getElementById('Backpack');
backpackSection.style.backgroundColor = 'tomato'
// all card 
const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius = '30px'
}

function btnClick(){
  console.log('btn was clicked')
}

// remove all btn 
const panaBtnBuyNows = document.getElementsByClassName('panda-btn-buy-now');
for(const panaBtnBuyNow of panaBtnBuyNows ){
  panaBtnBuyNow.addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target)
  })
}

// submit btn disable and enable
document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event){
  const text = event.target.value;
  const submitDisableBtn = document.getElementById('submit-disable-btn');
  if(text == 'email'){
    submitDisableBtn.removeAttribute('disabled')
  }
  else{
    submitDisableBtn.setAttribute('disabled', true)
  }
})


// scribes section bg color changed
const subsCribe = document.getElementById('subscribe');
subsCribe.addEventListener('dblclick', function(){
 subsCribe.style.backgroundColor='tomato'
})