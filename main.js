const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// header navbar tabs UI
const tabs = $$('.header-item')
const tabActive = $('.header-item.active')
const line = $('.header-navbar .line')



line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'

tabs.forEach((tab, index) => {
    tab.onclick = function() {
        $('.header-item.active').classList.remove('active')

        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

        this.classList.add('active')
    }
})

// images slide
var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 5000)