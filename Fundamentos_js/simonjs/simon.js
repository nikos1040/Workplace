    const celeste = document.getElementById('celeste')
    const violeta = document.getElementById('violeta')
    const naranja = document.getElementById('naranja')
    const verde = document.getElementById('verde')
    const btnEmpezar = document.getElementById('btnEmpezar')
    const FINALlvl = 10

    class Juego {
        constructor() {
            this.inicializar = this.inicializar.bind(this)
            this.inicializar()
            this.generateSecuens()
            setTimeout(() => {
                this.nextLVL()
            }, 500)
        }

        inicializar() {
            this.nextLVL = this.nextLVL.bind(this)
            this.chooseColor = this.chooseColor.bind(this)
            this.togglebtnEmpezar()
            this.lvl = 1
            this.colors = {
                celeste,
                violeta,
                naranja,
                verde
            }
        }

        togglebtnEmpezar() {
            if (btnEmpezar.classList.contains('hide')) {
                btnEmpezar.classList.remove('hide')
            } else {
                btnEmpezar.classList.add('hide')
            }
        }

        generateSecuens() {
            this.secuens = new Array(FINALlvl).fill(0).map(n => Math.floor(Math.random() * 4))
        }

        nextLVL() {
            this.subLVL = 0
            this.luxsecuens()
            this.addClick()
        }

        transformtoColor(num) {
            switch (num) {
                case 0:
                    return 'celeste'
                case 1:
                    return 'violeta'
                case 2:
                    return 'naranja'
                case 3:
                    return 'verde'
            }
        }

        transformtoNumber(color) {
            switch (color) {
                case 'celeste':
                    return 0
                case 'violeta':
                    return 1
                case 'naranja':
                    return 2
                case 'verde':
                    return 3
            }
        }

        luxsecuens() {
            for (let i = 0; i < this.lvl; i++) {
                const color = this.transformtoColor(this.secuens[i])
                setTimeout(() =>
                    this.luxColor(color), 1000 * i
                )
            }
        }

        luxColor(color) {
            this.colors[color].classList.add('light')
            setTimeout(() => this.offColor(color), 350)
        }

        offColor(color) {
            this.colors[color].classList.remove('light')
        }

        addClick() {
            this.colors.celeste.addEventListener('click', this.chooseColor)
            this.colors.violeta.addEventListener('click', this.chooseColor)
            this.colors.naranja.addEventListener('click', this.chooseColor)
            this.colors.verde.addEventListener('click', this.chooseColor)
        }

        deletedClick() {
            this.colors.celeste.removeEventListener('click', this.chooseColor)
            this.colors.violeta.removeEventListener('click', this.chooseColor)
            this.colors.naranja.removeEventListener('click', this.chooseColor)
            this.colors.verde.removeEventListener('click', this.chooseColor)
        }

        chooseColor(ev) {
            const nameColor = ev.target.dataset.color
            const numColor = this.transformtoNumber(nameColor)
            this.luxColor(nameColor)
            if (numColor === this.secuens[this.subLVL]) {
                this.subLVL++
                if (this.subLVL === this.lvl) {
                    this.lvl++
                    this.deletedClick()
                    setTimeout(() => {
                        swal('simon','sigiente lvl', 'success')
                        if (this.lvl === FINALlvl + 1) {
                            this.winGame()
                        } else {
                            setTimeout(this.nextLVL, 2000)
                        }
                    },500)
                }
            } else {
                this.lostGame()
            }
        }
        winGame() {
            swal('Simon', 'Ganaste!!!', 'success')
                .then(this.inicializar())
        }
        lostGame() {
            swal('Simon', 'Perdiste', 'error')
                .then(() => {
                    this.deletedClick()
                    this.inicializar()
                })
        }

    }

    function empezarJuego() {

        window.juego = new Juego()

    }