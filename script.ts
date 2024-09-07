
const TABLE: Record<string, string> = {
    "0": "\u{F2700}",
    "1": "\u{F2701}",
    "2": "\u{F2702}",
    "3": "\u{F2703}",
    "4": "\u{F2704}",
    "5": "\u{F2705}",
    "6": "\u{F2706}",
    "7": "\u{F2707}",
    "8": "\u{F2708}",
    "9": "\u{F2709}",
    "t": "\u{F2710}",
    "k": "\u{F2711}",
    "x": "\u{F2712}",
    "s": "\u{F2713}",
    "n": "\u{F2714}",
    "v": "\u{F2715}",
    "f": "\u{F2716}",
    "m": "\u{F2717}",
    "d": "\u{F2718}",
    "g": "\u{F2719}",
    "p": "\u{F271A}",
    "b": "\u{F271B}",
    "h": "\u{F271C}",
    "y": "\u{F271D}",
    "c": "\u{F271E}",
    "r": "\u{F271F}",
    "z": "\u{F2720}",
    "j": "\u{F2721}",
    "w": "\u{F2722}",
    "l": "\u{F2723}",
    "a": "\u{F2728}",
    "i": "\u{F272B}",
    "o": "\u{F272E}",
    "e": "\u{F2731}",
    "u": "\u{F2734}",
    "q": "\u{F2737}",
    "$": "\u{F273E}",
    "/": "\u{F2741}",
    "\\": "\u{F2742}",
    '"': "\u{F2743}",
    "'": "\u{F2744}",
    ",": "\u{F2749}",
    ":": "\u{F274F}",
    "*": "×",
    "=": "\u{F275B}",
    "?": "\u{F2761}",
    "!": "\u{F2763}",
    "T": "\u{F27E7}",
    "K": "\u{F27E8}",
    "X": "\u{F27E9}",
    "S": "\u{F27EA}",
    "N": "\u{F27EB}",
    "V": "\u{F27EC}",
    "F": "\u{F27ED}",
    "M": "\u{F27EE}",
    "D": "\u{F27EF}",
    "G": "\u{F27F0}",
    "P": "\u{F27F1}",
    "B": "\u{F27F2}",
    "H": "\u{F27F3}",
    "Y": "\u{F27F4}",
    "C": "\u{F27F5}",
    "R": "\u{F27F6}",
    "Z": "\u{F27F7}",
    "J": "\u{F27F8}",
    "W": "\u{F27F9}",
    "L": "\u{F27FA}",
    "A": "\u{F27FB}",
    "I": "\u{F27FC}",
    "O": "\u{F27FD}",
    "E": "\u{F27FE}",
    "U": "\u{F27FF}",
    "Q": "\u{F27DF}",
};

const LEGACY_TABLE: Record<string, string> = {
    "S": "\u{F2724}",
    "Z": "\u{F2725}",
    "H": "\u{F2726}",
    "L": "\u{F2727}",
    "+": "\u{F273C}",
    "-": "\u{F273D}",
    "“": "\u{F2745}",
    "”": "\u{F2746}",
    "(": "\u{F2747}",
    ")": "\u{F2748}",
    ".": "\u{F274B}",
    "…": "\u{F274D}",
    "—": "\u{F274E}", "―": "\u{F274E}",
    "*": "\u{F2751}",
    "<": "\u{F275A}",
    ">": "\u{F275C}",
    "⁇": "\u{F2760}",
    "_": "\u{F2762}",
    "|": "\u{F2764}",
    "⁈": "\u{F2765}", "⁉": "\u{F2765}",
}

const MEST_TABLE: Record<string, string> = {
    "axte": "\u{F27D8}", "a": "\u{F27D8}",
    "flea": "\u{F27D9}", "f": "\u{F27D9}",
    "alis": "\u{F27DA}", "l": "\u{F27DA}",
    "xier": "\u{F27DB}", "x": "\u{F27DB}",
    "myuxa": "\u{F27D0}", "my": "\u{F27D0}",
    "alj": "\u{F27D1}", "lj": "\u{F27D1}",
    "duurga": "\u{F27D2}", "dr": "\u{F27D2}",
    "tuvan": "\u{F27D3}", "tv": "\u{F27D3}",
    "xante": "\u{F27D4}", "xn": "\u{F27D4}",
    "leeve": "\u{F27D5}", "lv": "\u{F27D5}",
    "viine": "\u{F27D6}", "vn": "\u{F27D6}",
    "inje": "\u{F27D7}", "nj": "\u{F27D7}",
    "myuxet": "\u{F27E1}", "mx": "\u{F27E1}",
    "axet": "\u{F27E2}", "xt": "\u{F27E2}",
    "teems": "\u{F27E3}", "tm": "\u{F27E3}",
    "arte": "\u{F27E0}", "rt": "\u{F27E0}",
    "haizen": "\u{F27DC}", "hz": "\u{F27DC}",
    "alies": "\u{F27DD}", "ls": "\u{F27DD}",
    "selest": "\u{F27DE}", "sl": "\u{F27DE}",
    "tuvanduurga": "\u{F27D3}\u{F27D2}", "tvdr": "\u{F27D3}\u{F27D2}",
    "tuvanalis": "\u{F27D3}\u{F27DA}", "tvl": "\u{F27D3}\u{F27DA}",
    "alistuvan": "\u{F27DA}\u{F27D3}", "ltv": "\u{F27DA}\u{F27D3}",
    "haizenaxte": "\u{F27DC}\u{F27D8}", "hza": "\u{F27DC}\u{F27D8}",
    "axtehaizen": "\u{F27D8}\u{F27DC}", "ahz": "\u{F27D8}\u{F27DC}",
    "viineaxte": "\u{F27D6}\u{F27D8}", "vna": "\u{F27D6}\u{F27D8}",
    "tuvanaxte": "\u{F27D3}\u{F27D8}", "tva": "\u{F27D3}\u{F27D8}",
    "alisaxte": "\u{F27DA}\u{F27D8}", "la": "\u{F27DA}\u{F27D8}",
    "selestaxte": "\u{F27DE}\u{F27D8}", "sla": "\u{F27DE}\u{F27D8}",
    "xanteaxte": "\u{F27D4}\u{F27D8}", "xna": "\u{F27D4}\u{F27D8}",
    "duurgaaxte": "\u{F27D2}\u{F27D8}", "dra": "\u{F27D2}\u{F27D8}",
    "leeveduurga": "\u{F27D5}\u{F27D2}", "lvdr": "\u{F27D5}\u{F27D2}",
    "fleateems": "\u{F27D9}\u{F27E3}", "ftm": "\u{F27D9}\u{F27E3}",
    "fleahaizen": "\u{F27D9}\u{F27DC}", "fhz": "\u{F27D9}\u{F27DC}",
}

const IDEOGRAPHIC_TABLE: Record<string, string> = {
    "haan": "\u{F276D}",
    "ax": "\u{F276E}",
    "teo": "\u{F276F}",
    "seinels": "\u{F2770}", "sei": "\u{F2770}",
    "tiitel": "\u{F2771}", "tel": "\u{F2771}",
    "poen": "\u{F2772}", "pen": "\u{F2772}",
    "nermes": "\u{F2773}", "mes": "\u{F2773}",
    "kleevel": "\u{F2774}", "lev": "\u{F2774}",
    "kalzas": "\u{F2775}", "kal": "\u{F2775}",
    "varfant": "\u{F2776}", "fan": "\u{F2776}",
    "varzon": "\u{F2777}", "vaz": "\u{F2777}",
    "tikno": "\u{F2778}", "tik": "\u{F2778}",
    "fenzel": "\u{F2779}", "fez": "\u{F2779}",
    "nebra": "\u{F277A}", "neb": "\u{F277A}",
    "konoote": "\u{F277B}", "kon": "\u{F277B}",
    "velm": "\u{F2780}",
    "erva": "\u{F2781}",
    "satii": "\u{F2782}",
    "teeve": "\u{F2783}",
    "beezel": "\u{F2784}",
    "ilva": "\u{F2785}",
    "part": "\u{F2786}",
    "ridia": "\u{F2790}", "dia": "\u{F2790}",
    "ovi": "\u{F2791}", "vio": "\u{F2791}",
    "kliiz": "\u{F2792}", "lis": "\u{F2792}",
    "gil": "\u{F2793}",
    "fulmiia": "\u{F2794}", "ful": "\u{F2794}",
    "ryuu": "\u{F2795}", "dyu": "\u{F2795}",
    "mel": "\u{F2796}",
    "raldura": "\u{F2797}", "ral": "\u{F2797}",
    "zana": "\u{F2798}", "zan": "\u{F2798}",
    "paal": "\u{F2799}", "pal": "\u{F2799}",
    "milf": "\u{F279A}", "mik": "\u{F279A}",
    "faava": "\u{F279B}", "fav": "\u{F279B}",
    "ruuj": "\u{F279C}", "ruj": "\u{F279C}",
    "seren": "\u{F279D}", "ser": "\u{F279D}",
    "rava": "\u{F279E}", "rav": "\u{F279E}",
    "umtona": "\u{F279F}", "tan": "\u{F279F}",
    "liine": "\u{F27A0}", "lin": "\u{F27A0}",
    "relezona": "\u{F27A1}", "rez": "\u{F27A1}",
    "jiil": "\u{F27A2}", "jil": "\u{F27A2}",
    "lina": "\u{F27A3}", "din": "\u{F27A3}",
    "eketone": "\u{F27A4}", "ket": "\u{F27A4}",
    "enna": "\u{F27A5}", "len": "\u{F27A5}",
    "axx": "\u{F27A6}", "lax": "\u{F27A6}",
    "neene": "\u{F27A7}", "nen": "\u{F27A7}",
    "pinena": "\u{F27A8}", "pin": "\u{F27A8}",
    "mat": "\u{F27A9}",
    "kunon": "\u{F27AA}", "kun": "\u{F27AA}",
    "kmiir": "\u{F27AB}", "mir": "\u{F27AB}",
    "lutia": "\u{F27B0}",
    "gaavi": "\u{F27B1}",
    "liisia": "\u{F27B2}",
    "falfania": "\u{F27B3}",
    "ineaato": "\u{F27B4}",
    "hyuuto": "\u{F27B5}",
    "keetoia": "\u{F27B6}",
    "lolos": "\u{F27B8}",
    "genos": "\u{F27B9}",
    "iiluuto": "\u{F27BA}",
    "eltoa": "\u{F27BB}",
    "farfania": "\u{F27BC}",
    "midiit": "\u{F27BD}",
    "arbazard": "\u{F27BE}",
    "varsiila": "\u{F27BF}",
    "vates": "\u{F27C0}",
    "vafii": "\u{F27C1}",
    "valza": "\u{F27C2}",
    "vaxiv": "\u{F27C3}",
    "vix": "\u{F27C4}",
    "vaana": "\u{F27C5}",
    "vajo": "\u{F27C6}",
    "valina": "\u{F27C7}",
    "valem": "\u{F27C8}",
    "valo": "\u{F27C9}",
    "vama": "\u{F27CA}",
    "valbes": "\u{F27CB}",
    "mete": "\u{F27CC}",
    "bees": "\u{F27CD}",
    "myuxa": "\u{F27D0}",
    "alj": "\u{F27D1}",
    "duurga": "\u{F27D2}",
    "tuvan": "\u{F27D3}",
    "xante": "\u{F27D4}",
    "leeve": "\u{F27D5}",
    "viine": "\u{F27D6}",
    "inje": "\u{F27D7}",
    "axte": "\u{F27D8}",
    "flea": "\u{F27D9}",
    "alis": "\u{F27DA}",
    "xier": "\u{F27DB}",
    "haizen": "\u{F27DC}",
    "alies": "\u{F27DD}",
    "selest": "\u{F27DE}",
    "arte": "\u{F27E0}",
    "myuxet": "\u{F27E1}",
    "axet": "\u{F27E2}",
    "teems": "\u{F27E3}",
    "arka": "\u{F27E4}",
    "palsaa": "\u{F27E6}",
}

function update() {
    const arka = (document.getElementById("arka") as HTMLTextAreaElement).value;
    const legacy = (document.getElementById("legacy") as HTMLInputElement).checked;

    let multiCharConverted = arka;
    multiCharConverted = multiCharConverted.replaceAll(/\[([a-z]+)\]/g, (match, name: string) => {
        const converted = IDEOGRAPHIC_TABLE[name];
        if (converted !== undefined) {
            return converted;
        }
        return match;
    })
    multiCharConverted = multiCharConverted.replaceAll(/\(([a-z]+)(?!.*\))/g, (match, name: string) => {
        const converted = MEST_TABLE[name];
        if (converted !== undefined) {
            return converted;
        }
        if (/^a*$/.test(name)) {
            return "\u{F27D8}".repeat(name.length);
        }
        return match;
    })
    if (legacy) {
        multiCharConverted = multiCharConverted.replaceAll("...", "\u{F274D}");
        multiCharConverted = multiCharConverted.replaceAll("--", "\u{F274E}");
        multiCharConverted = multiCharConverted.replaceAll(",??", "\u{F2766}");
        multiCharConverted = multiCharConverted.replaceAll(",?!", "\u{F276B}");
        multiCharConverted = multiCharConverted.replaceAll(",?", "\u{F2767}");
        multiCharConverted = multiCharConverted.replaceAll(",_", "\u{F2768}");
        multiCharConverted = multiCharConverted.replaceAll(",!", "\u{F2769}");
        multiCharConverted = multiCharConverted.replaceAll(",|", "\u{F276A}");
        multiCharConverted = multiCharConverted.replaceAll("??", "\u{F2760}");
        multiCharConverted = multiCharConverted.replaceAll("?!", "\u{F2765}");
    }

    const chars = [...multiCharConverted.normalize("NFD")];
    let conversationalBracketOpened = false;
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i]!;

        if (legacy) {
            if (char === '"') {
                conversationalBracketOpened = !conversationalBracketOpened;
                chars[i] = conversationalBracketOpened ? "\u{F2745}" : "\u{F2746}";
                continue;
            }

            const converted = LEGACY_TABLE[char];
            if (converted !== undefined) {
                chars[i] = converted;
                continue;
            }
        }

        const converted = TABLE[char];
        if (converted !== undefined) {
            chars[i] = converted;
            continue;
        }
    }
    const unicode = chars.join("").normalize("NFC");

    (document.getElementById("unicode") as HTMLTextAreaElement).value = unicode;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("arka")!.addEventListener("input", update);
    document.getElementById("legacy")!.addEventListener("change", update);
});
