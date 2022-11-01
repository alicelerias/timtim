// POO
class Cat {
  constructor ({name, age}) {
    this.name = name
    this.age = age
  }

  viajar(meses) {
    if (meses > 12) {
      this.age += 1
    }
  }


}

// functional
// cat-utils.js
const sabatico = (timtim, meses) => {
  if (meses > 12) {
    timtim['age'] += 1
  }
}

const timtim = new Cat({name: 'timtim', age: 10 })

// feriado-natal.js
const viagemMeses = 12
timtim.viajar(viagemMeses)

// promocoes-viagems.js
const viagemMeses = 6
timtim.viajar(viagemMeses)
