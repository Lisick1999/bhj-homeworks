const itemValue = document.getElementsByClassName('dropdown__value');
const textLink = document.getElementsByClassName('dropdown__link');

for(let i = 0; i < itemValue.length; i++) {
    itemValue[i].onclick = function(){        
       let list = this.closest(".dropdown");
       list.querySelector(".dropdown__list").classList.toggle("dropdown__list_active");       
    };
}

for(let i = 0; i < textLink.length; i++) { 
    textLink[i].onclick = function(){        
        let list = this.closest(".dropdown");
        list.querySelector(".dropdown__list").classList.remove("dropdown__list_active");
        list.querySelector(".dropdown__value").textContent = this.textContent;

        return false;
    }; 
}