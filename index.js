let slideIndex = 1;

    function openModal(element) {
        const modal = document.getElementById("myModal");
        const modalImg = document.getElementById("modalImg");
        modal.style.display = "block";
        modalImg.src = element.src;
        slideIndex = getIndex(element);
    }

    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        const modalImg = document.getElementById("modalImg");
        const images = document.getElementsByTagName("img");
        if (n > images.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = images.length;
        }
        modalImg.src = images[slideIndex - 1].src;
    }

    function getIndex(element) {
        const images = document.getElementsByTagName("img");
        for (let i = 0; i < images.length; i++) {
            if (images[i] === element) {
                return i + 1;
            }
        }
        return 1;
    }