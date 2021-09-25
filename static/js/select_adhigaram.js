
//select_adhigaram
var kuralAdhigaram = {
    "அறத்துப்பால்": {
        "பாயிரவியல்": [
            "கடவுள் வாழ்த்து",
            "வான்சிறப்பு",
            "நீத்தார் பெருமை",
            "அறன் வலியுறுத்தல்"
        ],
        "இல்லறவியல் ": [
            "இல்வாழ்க்கை ",
            "வாழ்க்கைத் துணைநலம்",
            "மக்கட்பேறு / புதல்வரைப் பெறுதல்",
            "அன்புடைமை",
            "விருந்தோம்பல்"
        ],
        "துறவறவியல்": [
            "அருளுடைமை",
            "புலான்மறுத்தல்",
            "தவம்",
            "கூடாவொழுக்கம்"
        ],
        "ஊழியல்": [
            "ஊழ்"
        ]
    },
    "பொருட்பால்": {
        "அரசியல்": [
            "இறைமாட்சி",
            "கல்வி",
            "கல்லாமை",
            "கேள்வி",
            "அறிவுடைமை"
        ],
        "அமைச்சியல்": [
            "அமைச்சு",
            "சொல்வன்மை",
            "வினைத்தூய்மை",
            "வினைத்திட்பம்",
            "வினைசெயல்வகை"
        ],
        "அரணியல்": [
            "நாடு",
            "அரண்"
        ],
        "கூழியல்": [
            "பொருள்செயல்வகை"
        ],
        "படையில் ": [
            "படைமாட்சி",
            "படைச்செருக்கு"
        ],
        "நட்பியல்": [
            "நட்பு",
            "நட்பாராய்தல்",
            "பழைமை",
            "தீ நட்பு",
            "   கூடாநட்பு"
        ],
        "குடியியல்": [
            "குடிமை",
            "மானம்",
            "பெருமை",
            "சான்றாண்மை",
            "பண்புடைமை"
        ]
    },
    "காமத்துப்பால்": {
        "களவியல் ": [
            "தகையணங்குறுத்தல்",
            "குறிப்பறிதல்",
            "புணர்ச்சிமகிழ்தல்",
            "நலம்புனைந்துரைத்தல்",
            "காதற்சிறப்புரைத்தல்"
        ],
        "கற்பியல்": [
            "   பிரிவாற்றாமை",
            "படர்மெலிந்திரங்கல்",
            "கண்விதுப்பழிதல்",
            "பசப்புறுபருவரல்",
            "தனிப்படர்மிகுதி"
        ]
    }

}

function loadDropDown() {
    var selectPal = document.getElementById("select_pal");
    var selectIyal = document.getElementById("select_iyal");
    var selectAdhigaram = document.getElementById("select_adhigaram");

    for (var pal in kuralAdhigaram) {
        selectPal.options[selectPal.options.length] = new Option(pal, pal);
    }

    selectPal.onchange = function () {
        selectIyal.length = 1; // remove all options bar first
        selectAdhigaram.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        for (var state in kuralAdhigaram[this.value]) {
            selectIyal.options[selectIyal.options.length] = new Option(state, state);
        }
    }
    selectPal.onchange(); // reset in case page is reloaded
    selectIyal.onchange = function () {
        selectAdhigaram.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        var district = kuralAdhigaram[selectPal.value][this.value];
        for (var i = 0; i < district.length; i++) {
            selectAdhigaram.options[selectAdhigaram.options.length] = new Option(district[i], district[i]);
        }
    }
}









