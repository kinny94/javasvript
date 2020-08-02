const accordion = document.querySelectorAll('.panel');
accordion.forEach((ele) => {
    ele.addEventListener('click', () => {
        const allActives = document.querySelectorAll('.active');
        allActives.forEach((ele) => {
            ele.classList.remove('active');
        })
        ele.classList.toggle('active');
    });
});

