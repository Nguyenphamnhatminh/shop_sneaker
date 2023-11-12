const loginComfim = document.querySelector('.js-login-cfm')
const registerComfim = document.querySelector('.js-register-cfm')
const modalComfim = document.querySelector('.modal-register-btn')
const modalComfims = document.querySelector('.modal-login-btn')

const users = document.querySelector('.js-login')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')    

const modals = document.querySelector('.js-modals')
const modalCloses = document.querySelector('.js-modal-closes')
const modalContainers = document.querySelector('.js-modal-containers')  

const modalCartBtn = document.querySelector('.js-cart')
const modalCart = document.querySelector('.js-modal-cart')
const modalCartContainer = document.querySelector('.js-modal-container-cart')
const modalCartClose = document.querySelector('.js-modal-close-cart')

const modalSearchBtn = document.querySelector('.js-search')
const modalSearch = document.querySelector('.js-modal-search')
const modalSearchContainer = document.querySelector('.js-modal-container-search')



function showLogin() {
    modal.classList.add('open')
}

function hideShowLogin() {
    modal.classList.remove('open')  
}

function showLogins() {
    modals.classList.add('open')  
}

function hideShowLogins() {
    modals.classList.remove('open')  
}

function showCart() {
    modalCart.classList.add('open')
}

function hideShowCart() {
    modalCart.classList.remove('open')  
}

function showSearch() {
    modalSearch.classList.add('open')
}

function hideShowSearch() {
    modalSearch.classList.remove('open')  
}

//search
modalSearch.addEventListener('click', hideShowSearch)
modalSearchBtn.addEventListener('click', showSearch)
modalSearchContainer.addEventListener('click' ,function (event) {
    event.stopPropagation()
} )



// cart
modalCart.addEventListener('click', hideShowCart)
modalCartBtn.addEventListener('click', showCart)
modalCartClose.addEventListener('click', hideShowCart)
modalCartContainer.addEventListener('click' ,function (event) {
    event.stopPropagation()
} )

//login
users.addEventListener('click', showLogin)
modalClose.addEventListener('click', hideShowLogin)
loginComfim.addEventListener('click', hideShowLogin)
modalComfim.addEventListener('click',()=>{
    modals.classList.add('open')
    modal.classList.remove('open')
})
modal.addEventListener('click', hideShowLogin)
modalContainer.addEventListener('click' ,function (event) {
    event.stopPropagation()
} )

//register

modals.addEventListener('click', hideShowLogins)
registerComfim.addEventListener('click', hideShowLogins)
modalCloses.addEventListener('click', hideShowLogins)
modalContainers.addEventListener('click' ,function (event) {
    event.stopPropagation()
} )

modalComfims.addEventListener('click',()=>{
    modal.classList.add('open')
    modals.classList.remove('open')
})


