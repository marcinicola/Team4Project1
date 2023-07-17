let newArr = [
    {
        name: "Luca",
        surname: "Campo",
        age: 25,
        city: "Gela",
        hobby: "Play guitar and run",
        favoriteFood: "Pizza",
        favoriteVideoGame: "FIFA",
        favoriteFilm: "The Wolf of Wall Street",
        favoriteBook: "La solitudine dei numeri primi",
        petName: "Ciak"
    },
    {
        name: "davide",
        surname: "piccica",
        age: 25,
        city: "palermo",
        hobby: "sport",
        favoriteFood: "hamburger",
        favoriteVideoGame: "LOL",
        favoriteFilm: "The Godfather",
        favoriteBook: "A song of ice and fire",
        petName: " "
    },
    {
        name: "Manfredi",
        surname: "Lo Menzo",
        age: 21,
        city: "palermo",
        hobby: "Videogiochi",
        favoriteFood: "Pizza",
        favoriteVideoGame: "Hollow Knight",
        favoriteFilm: "The Truman Show",
        favoriteBook: "Io non ho paura",
        petName: "Aaron"
    },
    {

        name: "Claudia",
        surname: "Ponti",
        age: "25",
        city: "Naples",
        hobby: "Playing the piano, painting, Lego",
        favoriteFood: "Pizza",
        favoriteVideoGame: "Assasin Creed",
        favoriteFilm: "Interstellar, Inception",
        favoriteBook: "Viva la vida! di Frida Kahlo",
        petName: "Tommy"
    },
    {
        name: "Nicola",
        surname: "Marcì",
        age: 26,
        city: "Siracusa",
        hobby: "Gaming",
        favotiteFood: "Panino carne di Cavallo",
        favoriteVideoGame: "Call Of Duty",
        favoriteFilm: "Shutter Island,Inception",
        favoriteBook: "Educazione Siberiana",
        petName: "Erik",
    }

]
function petName(newArr) {
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].petName) {
            console.log(newArr[i].name + " possiede " + newArr[i].petName);
        }
    }
}
petName(newArr);