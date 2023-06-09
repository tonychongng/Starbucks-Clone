class Cursor {
    constructor() {
        this.initCursor();
        this.initHovers();
    }

    initCursor() {
        const {
            Back
        } = window;
        this.outerCursor = document.querySelector(".circle-cursor--outer");
        this.innerCursor = document.querySelector(".circle-cursor--inner");
        this.outerCursorBox = this.outerCursor.getBoundingClientRect();
        this.outerCursorSpeed = 0;
        this.easing = Back.easeOut.config(1.7);
        this.clientX = -100;
        this.clientY = -100;
        this.showCursor = false;

        const unveilCursor = () => {
            TweenMax.set(this.innerCursor, {
                x: this.clientX,
                y: this.clientY
            });
            TweenMax.set(this.outerCursor, {
                x: this.clientX - this.outerCursorBox.width / 2,
                y: this.clientY - this.outerCursorBox.height / 2
            });
            setTimeout(() => {
                this.outerCursorSpeed = 0.2;
            }, 100);
            this.showCursor = true;
        };
        document.addEventListener("mousemove", unveilCursor);

        document.addEventListener("mousemove", e => {
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        });

        const render = () => {
            TweenMax.set(this.innerCursor, {
                x: this.clientX,
                y: this.clientY
            });
            if (!this.isStuck) {
                TweenMax.to(this.outerCursor, this.outerCursorSpeed, {
                    x: this.clientX - this.outerCursorBox.width / 2,
                    y: this.clientY - this.outerCursorBox.height / 2
                });
            }
            if (this.showCursor) {
                document.removeEventListener("mousemove", unveilCursor);
            }
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
    }

    initHovers() {
        const handleMouseEnter = e => {
            this.isStuck = true;
            const target = e.currentTarget;
            const box = target.getBoundingClientRect();
            this.outerCursorOriginals = {
                width: this.outerCursorBox.width,
                height: this.outerCursorBox.height
            };
            TweenMax.to(this.outerCursor, 0.2, {
                x: box.left,
                y: box.top,
                width: box.width,
                height: box.height,
                opacity: 0.4,
                borderColor: "#000"
            });
        };

        const handleMouseLeave = () => {
            this.isStuck = false;
            TweenMax.to(this.outerCursor, 0.2, {
                width: this.outerCursorOriginals.width,
                height: this.outerCursorOriginals.height,
                borderColor: "#000"
            });
        };

        const linkItems = document.querySelectorAll(".link");
        linkItems.forEach(item => {
            item.addEventListener("mouseenter", handleMouseEnter);
            item.addEventListener("mouseleave", handleMouseLeave);
        });

        const mainNavHoverTween = TweenMax.to(this.outerCursor, 0.3, {
            //backgroundColor: "#ffcec9",
            //borderColor: '#ffcec9',
            ease: this.easing,
            paused: true
        });

        const mainNavMouseEnter = () => {
            this.outerCursorSpeed = 0;
            TweenMax.set(this.innerCursor, {
                opacity: 0
            });
            mainNavHoverTween.play();
        };

        const mainNavMouseLeave = () => {
            this.outerCursorSpeed = 0.3;
            TweenMax.set(this.innerCursor, {
                opacity: 1
            });
            mainNavHoverTween.reverse();
        };

        const mainNavLinks = document.querySelectorAll(".nav-link");
        mainNavLinks.forEach(item => {
            item.addEventListener("mouseenter", mainNavMouseEnter);
            item.addEventListener("mouseleave", mainNavMouseLeave);
        });
    }
}
$(document).ready(function () {
    const cursor = new Cursor();
});


const app = document.getElementById('typewriter');

const app2 = document.getElementById('typewriter2');

const app3 = document.getElementById('typewriter3');

const app4 = document.getElementById('typewriter4');

const app5 = document.getElementById('typewriter5');

const typewriter = new Typewriter(app, {
    loop: false,
    delay: 100,
})

const typewriter2 = new Typewriter(app2, {
    loop: false,
    delay: 100
})

const typewriter3 = new Typewriter(app3, {
    loop: false,
    delay: 100,

})

const typewriter4 = new Typewriter(app4, {
    loop: false,
    delay: 50
})

const typewriter5 = new Typewriter(app5, {
    loop: false,
    delay: 50
})

typewriter
 .typeString('Tony')
 .pauseFor(0)
 .start();

 typewriter2
 .typeString('Chong')
 .pauseFor(0)
 .start();

 typewriter3
 .typeString('NG')
 .pauseFor(0)
 .start();

typewriter4
 .typeString('Front-End-Developer')
 .pauseFor(1000000)
 .start();

 typewriter5
 .typeString('Working Hard to make interent Better')
 .pauseFor(1000000)
 .start();