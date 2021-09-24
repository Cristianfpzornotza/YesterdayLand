
/*HEADER*/
    /*MENU*/
    const target = document.querySelector(".target");
    const links = document.querySelectorAll(".mynav a");
    const colorlinea = ["white"];

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", (e) => e.preventDefault());
        links[i].addEventListener("mouseenter", mouseenterFunc);
      }

    function mouseenterFunc() {
    for (let i = 0; i < links.length; i++) {
        if (links[i].parentNode.classList.contains("active")) {
        links[i].parentNode.classList.remove("active");
        }
        links[i].style.opacity = "0.25";
    }
    
    this.parentNode.classList.add("active");
    this.style.opacity = "1";
    
    const width = this.getBoundingClientRect().width;
    const height = this.getBoundingClientRect().height;
    const left = this.getBoundingClientRect().left;
    const top = this.getBoundingClientRect().top;
    const color = colorlinea[Math.floor(Math.random() * colorlinea.length)];
    
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
    target.style.borderColor = color;
    target.style.transform = "none";
    }
    /*FIN MENU*/
    /*CAROUSEL*/
    /*FIN CAROUSEL*/
/*FIN HEADER*/

/*BODY*/
    /*CARDS*/
    /*FIN CARDS*/
    /*CALENDARIO*/
    /*FIN CALENDARIO*/
/*FIN BODY*/

/*FOOTER*/
/*FIN FOOTER*/
