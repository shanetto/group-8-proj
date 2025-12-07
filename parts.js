class BodyPart {
    constructor(id = 0, name = null, icon = "images/null.png", partclass = null) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.partclass = partclass;
    }
};

let partLibrary = {
    undefined: [
        {
            id: 0,
            name: null,
            icon: "images/null.png",
            partclass: null
        }
    ],
    "ear": [
        {
            id: 101,
            name: "draco",
            icon: "images/ear/ears1.png",
            partclass: "ear selectable",
        },
        {
            id: 102,
            name: "bnuuy",
            icon: "images/ear/ears2.png",
            partclass: "ear selectable",
        },
        {
            id: 103,
            name: "heehaw",
            icon: "images/ear/ears3.png",
            partclass: "ear selectable",

        },
        {
            id: 104,
            name: "face tube",
            icon: "images/ear/ears4.png",
            partclass: "ear selectable",
        },
    ],
    "eye": [
        {
            id: 201,
            name: "ojo",
            icon: "images/eye/eye1.png",
            partclass: "eye selectable",
        },
        {
            id: 202,
            name: "tbd",
            icon: "images/null.png",
            partclass: "eye selectable",
        },
        {
            id: 203,
            name: "tbd",
            icon: "images/null.png",
            partclass: "eye selectable",
        },
        {
            id: 204,
            name: "tbd",
            icon: "images/null.png",
            partclass: "eye selectable",
        },
    ],
    "mouth": [
        {
            id: 301,
            name: "beakeasy",
            icon: "images/mouth/mouth1.png",
            partclass: "mouth selectable",
        },
        {
            id: 302,
            name: "funkytrunk",
            icon: "images/mouth/mouth2.png",
            partclass: "mouth selectable",
        },
        {
            id: 303,
            name: "gee-pa",
            icon: "images/mouth/mouth3.png",
            partclass: "mouth selectable",
        },
        {
            id: 304,
            name: "draingo",
            icon: "images/mouth/mouth4.png",
            partclass: "mouth selectable",
        },
    ],
    "tail": [
        {
            id: 401,
            name: "leggard",
            icon: "images/tail/tail1.png",
            partclass: "tail selectable",
        },
        {
            id: 402,
            name: "kittycoon",
            icon: "images/tail/tail2.png",
            partclass: "tail selectable",
        },
        {
            id: 403,
            name: "possibum",
            icon: "images/tail/tail3.png",
            partclass: "tail selectable",
        },
        {
            id: 404,
            name: "puff-flall",
            icon: "images/tail/tail4.png",
            partclass: "tail selectable",
        },
    ],
    "leg": [
        {
            id: 501,
            name: "tbd",
            icon: "images/null.png",
            partclass: "leg selectable",
        },
        {
            id: 502,
            name: "tbd",
            icon: "images/null.png",
            partclass: "leg selectable",
        },
        {
            id: 503,
            name: "tbd",
            icon: "images/null.png",
            partclass: "leg selectable",
        },
        {
            id: 504,
            name: "tbd",
            icon: "images/null.png",
            partclass: "leg selectable",
        },
    ],
};
