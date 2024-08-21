let navbar=document.querySelector('.navbar');
let ul=document.querySelector('.ul');
menu.onclick = () =>{
    navbar.classList.toggle('bx-x');
    ul.classList.toggle('open');
}


const contactForm = document.getElementById('contant-form'),
    contactMessage = document.getElementById('email');

 
const sendEmail = (e) => {
    e.preventDefault()

    //service -templateID #form - publickey
    emailjs.sendEmail()
    .then(() =>{
        //show sent maessage
        contantMessage.textContant = 'Message sent successfully'
    })
}    