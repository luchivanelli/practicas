// import {openModal,closeModal} from './companies.js';

let modal = document.querySelector(".companies-modal");

const openModal = (button,title,info,link)=> {
    button.addEventListener("click", ()=> {
        modal.classList.add("visible");
        modal.classList.remove("hidden");

        document.querySelector(".modal-title").textContent = `Courses held in ${title}`
        document.querySelector(".courses").textContent = info;

        document.querySelector(".link-button").href = link
    })
}

const closeModal = ()=> {
    const closeButton = document.querySelector(".close-button");

    closeButton.addEventListener("click", ()=> {
        modal.classList.add("hidden");
        modal.classList.remove("visible");
    })
}


openModal(
    document.querySelector(".platzi"),
    "Plazti",
    "Basic programming (HTML5, CSS3, Javascript)",
    "https://drive.google.com/file/d/1ut4549CrwdgDLCHX9qQWZIroaqNNEQVk/view?usp=sharing"
);

openModal(
    document.querySelector(".codigo-facilito"),
    "Código Facilito",
    "Container Queries (CSS) | Web development | React",
    "https://drive.google.com/drive/folders/1DZG7IQpXwrv7deS3gBVhPx3zFiZLC5v6?usp=sharing"
);

openModal(
    document.querySelector(".open-bootcamp"),
    "Open Bootcamp",
    "HTML y CSS | Javascript",
    "https://drive.google.com/drive/folders/1rYfp8LGfOQDq4mhm4kH_ntgPJOLHW4Qr?usp=sharing"
);

openModal(
    document.querySelector(".free-code-camp"),
    "Free Code Camp",
    "Responsive web design",
    "https://drive.google.com/file/d/1aWNGP3C_9IYfvPLAFhiwKtdVCTr8E7Gf/view?usp=sharing"
);

openModal(
    document.querySelector(".hackerrank"),
    "HackerRank",
    "CSS",
    "https://drive.google.com/file/d/1DU8wg3f-hFU2K7JmnMoUuBd5h-La5lIR/view?usp=sharing"
);

openModal(
    document.querySelector(".udemy"),
    "Udemy",
    "Javascript desde cero",
    "https://drive.google.com/file/d/1UmqDigb6NSa0VrQfu0TIkC-Y4Nu32Slf/view?usp=sharing"
);

closeModal();




