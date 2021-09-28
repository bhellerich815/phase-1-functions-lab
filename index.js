// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if((distance - 42) <0) {
    return (distance - 42) * -1
}
    return distance - 42
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, end) {
    const distance = end - start
    if(distance > -1) {
        return distance * 264
    } else {
        return (distance * -1) * 264
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet (start, destination)
    if(distance <= 400) {
        return 0
    } else if(distance > 400 && distance < 2000) {
        return (distance - 400) * .02
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}