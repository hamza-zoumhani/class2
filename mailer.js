function printLetter(to) {
    // from and to object
    // {name, street, city, state, zip}

    // ========================================
    // | Zach Mays                            |
    // | 124 NW 20th                          |
    // | OKC, OK 73106                        |
    // |                                      |
    // |						Name                      |
    // |						Address                   |
    // |						City, State, Zip          |
    // ========================================

    console.log("========================================")
    console.log("| ", from.name, "                         |")
    console.log("| ", from.street, "                         |")
    console.log("| ", `${from.city}, ${from.state}, ${from.zip}`, "                         |")
    console.log("|                                      |")
    console.log("|          ", to.name, "                         |")
    console.log("|          ", to.street, "                         |")
    console.log("|          ", `${to.city}, ${to.state}, ${to.zip}`, "                         |")
    console.log("========================================")
}

const from = {
    name: "Zach Mays",
    street: "1234 NW 20th",
    state: "OK",
    city: "OKC",
    zip: "73106"
}

module.exports = {
    printLetter: printLetter
}