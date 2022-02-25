const express = require('express');
const router = express.Router();



let players = [

    {
        "name": "chandan",
        "dob": "1/1/1997",
        "gender": "male",
        "city": "durgapur",
        "sports": ["swimming"],

        "bookings": [

            {
                "bookingNumber": 1,
                "sportId": "",
                "centerId": "",
                "type": "private",
                "slot": '16286598000000',
                "bookedOn": '28/05/2022',
                "bookedFor": '01/08/2022'
            },
            {
                "bookingNumber": 2,
                "sportId": "",
                "centerId": "",
                "type": "private",
                "slot": '16286518000000',
                "bookedOn": '25/05/2022',
                "bookedFor": '29/08/2022'
            }]
    },

    {
        "name": "abhik",
        "dob": "1/08/1995",
        "gender": "male",
        "city": "kolkata",
        "sports": [
            "soccer"
        ],
        "bookings": []
    },

    {
        "name": "partha",
        "dob": "1/1/1997",
        "gender": "male",
        "city": "bankura",
        "sports": ["soccer"],
        "bookings": []
    },
]

router.post("/players", (req, res) => {

    let newPlayer = req.body
    let cnt = 0;

    for (let i = 0 ; i < players.length ; i++) {

        if (players[i]['name'] == newPlayer['name']) {
            cnt++
            res.send({ "data": "players", "status": "player already exists" })
        }

    }
    if (cnt == 0) {
        players.push(newPlayer)
        res.send(players)
    }
});


router.post("/players/:playerName/bookings/:bookingId", (req, res) => {

    let playerName = req.params.playerName
    let bookings = req.body
    let bookingId = req.params.bookingId

    let cnt = 0;
    for (let i = 0; i < players.length; i++) {

        if (players[i]['name'] == playerName) {
            cnt++

            if (players[i]['bookings'][i]) {
                res.send("booking was already processed")

            } else {
                players[i].bookings.push(bookings)
                res.send(players[i])
                break;
            }
        }
    }


    if (cnt == 0) {
        res.send({ "data": "players", "status": "something relevant about player not being found" })
    }


});

module.exports = router;