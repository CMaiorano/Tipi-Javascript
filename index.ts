/**
 * ESERCIZIO
 *
 * Crea un nuovo type User per rappresentare la struttura dell'oggetto
 *
 * TIP: dovrai creare due types: User e Coords
 * Il primo rappresenta l'intero oggetto e Coords solo le coordinate 'lat' e 'lng'
 *
 */

export interface Coords {
  lat : number,
  lng : number
}

export interface User {
  id : number,
  name : string,
  coords : Coords
}

export const user : User = {
  id : 123,
  name : "Fabio",
  coords : {
    lat : 123,
    lng : 456}
}

/*export const user: any = {
  id: 123,
  name: 'Fabio',
  coords: {
    lat: 123,
    lng: 456,
  },
};*/

console.log(user);
document.querySelector('#output').innerHTML = JSON.stringify(user);
