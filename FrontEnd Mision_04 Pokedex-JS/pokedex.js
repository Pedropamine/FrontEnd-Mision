const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./assets/img/pokemon.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            datos(data)
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const datos = (data) => {
    let name = data.forms[0].name;
    const nombre = document.getElementById("nombre");
    nombre.innerHTML = name;
    //console.log(name)

    let type = data.types[0].type.name;
    const tipo = document.getElementById("tipo");
    tipo.innerHTML = type;
    

    let moves =''
    const movimientos = document.getElementById("movimientos");

    let = stats =''
    const estadisticas = document.getElementById("estadisticas");

    const M = new Uint8Array(data.moves)
    const E = new Uint8Array(data.stats)

    function callbackM(elmnt, index, array) {
        moves=moves+'(' + index + ')' + data.moves[index].move.name + "<br>";
    }

    function callbackE(elmnt, index, array) {
        stats=stats+'-' + data.stats[index].stat.name + ' : ' + data.stats[index].base_stat + "<br>";
    }

    M.forEach(callbackM);
    movimientos.innerHTML = moves;

    E.forEach(callbackE);
    estadisticas.innerHTML = stats;
}
