class NavCollapseEffect {
        constructor() {
            this.navbar = document.querySelector('header')
            this.show = this.show
            this.hide = this.hide
            this.expand = this.expand
        }

        show() {
            this.navbar.classList.remove('hide')
        }

        hide() {
            this.navbar.classList.add('hide', 'collapse')
        }

        expand() {
            this.navbar.classList.remove('collapse')
        }
        init() {
            Window.prototype.scrollArr = [];

            window.addEventListener('scroll', () => {
                
                scrollArr.push(window.scrollY);
                if (window.scrollY === 0) {
                    nav.expand()
                }
                if (scrollArr[scrollArr.length - 1] > scrollArr[scrollArr.length - 2]) {
                    nav.hide()
                } else if (scrollArr[scrollArr.length - 1] < scrollArr[scrollArr.length - 2]) {
                    nav.show()
                }

            })
        }
    }
