const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//modal open function
const openModal = () => {
    //as you click on share, share modal opened and also active the overlay
    console.log("modal is open");
    modal.classList.add("active");
    //when you call the openModal fn active class is added in the modal which makes the scale 1
    overlay.classList.add("overlayactive");
    //also overlayactive class is added in which it makes opacity 1 and pointer-events -initial
    
};
const closeModal = () => {
    //as we click on the X icon we close the modal and deactiavte the overlay
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
    
};