// "use strict";


const mon_tableau = [1, 2, 3, 5]
// console.log(mon_tableau.slice(4, mon_tableau.length));

function ma_func() {
    const t = 10
    console.log(t, this)
}

fs-1

const engins = {
nom: '',
status: 'eteinte',
this: function () {
    return this.status
}
}
const voiture = {
...engins
}
console.log(ma_func());
// console.log(voiture);


const date = new Date('2010-04-18').getDay()
// console.log(date);


// console.log(Math.trunc(Math.random()));


// for (let index = 0; index < mon_tableau.length; index++) {
//     console.log(mon_tableau[index]);

// }

// mon_tableau.forEach(element => {
//     console.log(element * 2);
// });

// for (const key in engins) {
//     console.log(engins[key]);
// }

// for (const element of mon_tableau) {
//     console.log(element);
// }


// console.log(Object.entries(engins));
const root = document.getElementById('root')
const data = fetch('./data.json')
data
.then((res) => res.json())
.then(produits => {

    for (const produit of produits) {
        const div = document.createElement('div')
        div.className = "mon_div"

        const h1 = document.createElement('h1')
        h1.innerText = produit.title

        const p = document.createElement('p')
        p.innerText = produit.description

        const span = document.createElement('span')
        span.innerText = produit.price
        
        // const img = document.createElement('img')
        // img.src = produit.thumbnail

        div.appendChild(h1)
        div.appendChild(p)
        div.appendChild(span)
        
        root.appendChild(div)
    }
    
    
    console.log(produits);
    // body.appendChild(h1)

})

