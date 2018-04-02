const player = {
    ships: [
        {
            locations: [[0, 0]]
        }
    ]
};

function checkForShip(player, coordinates) {

    let shipPresent, ships;
    for (let index = 0; index < player.ships.length; index++) {
        const ships = player.ships[index];
        shipPresent = ships.locations.filter(function(actualCoordinate) {
            return (actualCoordinate[0] === coordinates[0]) 
                && (actualCoordinate[1] === coordinates[1]);
        })[0];

        console.log(shipPresent);

        if (shipPresent) {
            return true;
        }
    }
    return false;
}
console.log(checkForShip(player, [0, 0]));


function damageShip(ship, coordinates) {
    ship.damage.push(coordinates);
}



module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;