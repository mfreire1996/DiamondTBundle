var cleave = new Cleave('#cnumber', {
    creditCard: true,
    delimiter: '-',
    onCreditCardTypeChanged: function (type) {
        if(type === 'visa'){
            document.querySelector('fa-cc-visa').classList.add('active');
        } else {
            document.querySelector('.fa-cc-visa').classList.remove('active')
        }
    }
});

var cleave = new Cleave('#phone', {
    phone: true,
    phoneRegionCode: 'US'
});

$('#select-country').change(function(){
    cleave.setPhoneRegionCode(this.value);
    cleave.setRawValue('');
})


var textWrapper = document.querySelector('#title-anime');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '#title-anime .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '#title-anime',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



var navWrapper = document.querySelector('.navbar');

