const cat = document.querySelector(".cat");
const logo = document.querySelector(".logo");
const header1 = document.querySelector(".header1");
const header2 = document.querySelector(".header2");
const header3 = document.querySelector(".header3");
const header4 = document.querySelector(".header4");
const food1 = document.querySelector(".food1");
const food2 = document.querySelector(".food2");
const more = document.querySelector(".more");

const remove = (...elems) => {
    elems.forEach(item => {
        item.style.opacity = 0;
    });
};

const master = gsap.timeline({ repeat: -1 });

const partOne = () => {
    const tl = gsap.timeline({
        onComplete: remove,
        onCompleteParams: [cat, header1, header2],
    });

    tl.from(cat, { duration: 1, opacity: 0, x: 200, });
    tl.from(logo, { duration: 1, opacity: 0 },);
    tl.from(header1, { duration: 0.5, opacity: 0, });
    tl.from(header2, { duration: 1, opacity: 0, });

    return tl;
};

const partTwo = () => {
    const tl = gsap.timeline({});

    tl.from(header3, { duration: 1, opacity: 0 });
    tl.from(header4, { duration: 0.1, opacity: 0 });
    tl.from(food2, { duration: 0.7, opacity: 0, x: -100 });
    tl.from(food1, { duration: 0.7, opacity: 0, x: 100 });
    tl.from(more, { duration: 1.5, opacity: 0 });

    return tl;
};

master.add(partOne());
master.add(partTwo());
