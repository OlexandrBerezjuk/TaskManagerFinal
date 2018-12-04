let sliderIndex = 1;
let counter = 0;           // Amount of viewed blocks
let sliderBlockWrapperPicture = document.getElementsByClassName("sliderBlockWrapperPicture");
function f_buildSlider() {

    let sliderBlockwrapper = document.querySelector(".sliderBlockwrapper");
    let sliderBlockWrapperLabel = document.getElementsByClassName("sliderBlockWrapperPicture");
    let scrollLeft = document.getElementById("arrLeft");
    let scrollRight = document.getElementById("arrRight");
    counter = 0;

    if (sliderBlockwrapper.offsetWidth % 300 == 0) {
        counter = sliderBlockwrapper.offsetWidth / 300;
    }
    else {
        counter = Math.floor(sliderBlockwrapper.offsetWidth / 300);
    }


    if (counter <= sliderBlockWrapperLabel.length) {                // In bigger dimensions counter may exceed amount of pictures and we get error
        for (let i = 0; i < sliderBlockWrapperLabel.length; i++) {
            if (i < counter) {
                sliderBlockWrapperLabel[i].style.display = "inline-block";
            }
            else {
                sliderBlockWrapperLabel[i].style.display = "none";
            }
        }
    }

    // inserting in DOM inputs with labels
    let parent = document.querySelector(".sliderBlock");
    let referenceElement = document.querySelector(".sliderBlockwrapper");
    let dots = null;

    let del = document.querySelectorAll(".sliderBlock>input");
    if (del != null) {

        for (let d = 0; d < del.length; d++) {
            del[d].parentNode.removeChild(del[d]);
        }
    }



    if (sliderBlockWrapperLabel.length == counter) {
        dots = sliderBlockWrapperLabel.length;
    }
    else {
        dots = (sliderBlockWrapperLabel.length - counter) + 1;
    }

    let inserted = null;

    for (let b = 0; b < dots; b++) {
        let input = document.createElement("input");

        if (b == 0) {
            input.setAttribute("checked", true);
        }
        input.setAttribute("name", "slider");
        input.setAttribute("type", "radio");
        if (b != 0) {
            inserted.parentNode.insertBefore(input, inserted.nextSibling);
        }
        else {
            parent.insertBefore(input, referenceElement);
        }


        inserted = input;
    }
    sliderIndex = 1;



    scrollLeft.addEventListener('click', f_SliderGoLeft);
    scrollRight.addEventListener('click', f_SliderGoRight);

    if (scrollLeft.disabled != true) {                           // When we click BACK ARROW we have to activate FORWARD ARROW
        scrollRight.disabled = true;

    }


    if (scrollRight.disabled == true) {                           // When we click BACK ARROW we have to activate FORWARD ARROW
        scrollRight.removeAttribute('disabled');

    }
}
function f_SliderGoRight() {
    let scrollLeft = document.getElementById("arrLeft");
    let scrollRight = document.getElementById("arrRight");
    let scrollers = document.querySelectorAll("input[name='slider']");
    // if (sliderIndex+1 > scrollers.length) {}                   // Checking whether we've riched right border
    for (let s = 0; s < scrollers.length; s++) {                      // Finding what radio is checked
        if (scrollers[s].checked == true) {
            sliderIndex = s + 1;
        }
    }
    if (scrollLeft.disabled == true) {                           // When we click FORWARD ARROW we have to activate BACK ARROW
        scrollLeft.removeAttribute('disabled');
    }
    if (sliderIndex + 1 == scrollers.length) {
        sliderIndex = sliderIndex + 1;                                            // if not

        scrollRight.setAttribute("disabled", "true");

    }
    else {
        if (scrollRight.disabled == true) {
            scrollRight.disabled == false;
        }
        sliderIndex = sliderIndex + 1;
    }
    for (let j = 0; j < scrollers.length; j++) {

        scrollers[j].removeAttribute("checked");

    }
    scrollers[sliderIndex - 1].setAttribute("checked", 'true');


    for (let i = 0; i < sliderBlockWrapperPicture.length; i++) {
        if ((i >= sliderIndex - 1) && (i < (sliderIndex + counter - 1))) {
            sliderBlockWrapperPicture[i].style.display = "inline-block";
        }
        else {
            sliderBlockWrapperPicture[i].style.display = "none";
        }
    }
}
function f_SliderGoLeft() {
    let scrollLeft = document.getElementById("arrLeft");
    let scrollRight = document.getElementById("arrRight");

    let scrollers = document.querySelectorAll("input[name='slider']");
    // Checking whether we've riched right border
    for (let s = 0; s < scrollers.length; s++) {                      // Finding out what radio has been checked before we clicked BACK ARROW
        if (scrollers[s].checked == true) {
            sliderIndex = s + 1;

        }
    }
    if (scrollRight.disabled == true) {                           // When we click BACK ARROW we have to activate FORWARD ARROW
        scrollRight.removeAttribute('disabled');

    }

    if (sliderIndex - 1 == 1) {
        sliderIndex = sliderIndex - 1;                              // if the next radio on which we transit will equal 0 then deactivate BACK ARROW

        scrollLeft.setAttribute("disabled", "true");

    }
    else {
        sliderIndex = sliderIndex - 1;

    }


    for (let j = 0; j < scrollers.length; j++) {                       // removing old checked attribute
        scrollers[j].removeAttribute("checked");
    }

    scrollers[sliderIndex - 1].setAttribute("checked", 'true');       // setting CHECKED on our next input


    for (let i = 0; i < sliderBlockWrapperPicture.length; i++) {          // displaying necessary blocks
        if ((i >= sliderIndex - 1) && (i < (sliderIndex + counter - 1))) {
            sliderBlockWrapperPicture[i].style.display = "inline-block";
        }
        else {
            sliderBlockWrapperPicture[i].style.display = "none";
        }
    }
}