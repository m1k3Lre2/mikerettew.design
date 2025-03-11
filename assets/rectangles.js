document.addEventListener("DOMContentLoaded", () => {
    const parallaxContainer = document.getElementById("parallax-container");
    const rectangles = [];
    const numRectangles = 30;

    for (let i = 0; i < numRectangles; i++) {
        const rect = document.createElement("div");
        rect.classList.add("rectangle");

        rect.style.width = `${Math.random() * 30 + 20}px`;
        rect.style.height = `${Math.random() * 200 + 100}px`;
        rect.style.backgroundColor = `rgba(${Math.random() * 50 + 50}, ${Math.random() * 200 + 55}, ${Math.random() * 50 + 50}, 0.5)`;

        rect.style.left = Math.random() > 0.5 
            ? `${Math.random() * 10 - 5}%`
            : `${Math.random() * 10 + 90}%`;
        
        rect.style.top = `${Math.random() * 100}vh`;
        rect.dataset.speed = Math.random() * 4 + 2;
        
        rectangles.push(rect);
        parallaxContainer.appendChild(rect);
    }

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        rectangles.forEach(rect => {
            const speed = rect.dataset.speed;
            const newY = parseFloat(rect.style.top) + scrollY * speed * 0.002;
            
            if (newY > window.innerHeight) {
                rect.style.top = `-${Math.random() * 200}px`;
            } else {
                rect.style.top = `${newY}px`;
            }
        });
    });
});
