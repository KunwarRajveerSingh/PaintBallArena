AFRAME.registerComponent("player-movement", {
    init: function(){
        this.walk();
    },
    walk: function(){
        window.addEventListener("keydown", e=>{
            var key = e.key;
            if (
                key === "w" ||  "rightarrow" ||
                key === "a" ||  "leftarrow" ||
                key === "s" || "downarrow" || 
                key === "d" || "uparrow"

            ){
                var sound = document.querySelector("#step");
                sound.components.sound.playSound();
            }
        })
    }
});