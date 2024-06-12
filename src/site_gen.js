/**
 *    site_gen.js : functions to generate site elements
 */

export function generate_buttons(day_names) {

    // var controls_div = document.getElementById("controls");
    var sunday_btn = document.getElementById(day_names[0]);

    // copy the day button for each day except the first
    var prev_btn = sunday_btn;
    for (let i = 1; i < day_names.length; i++) {
        const day = day_names[i];
        let new_btn = sunday_btn.cloneNode(true);
        new_btn.id = day;
        var label = day + " <b>[" + i.toString() + "]</b>";
        new_btn.innerHTML = label;

        // controls_div.append(new_btn);
        prev_btn.insertAdjacentElement("afterend", new_btn)
        prev_btn = new_btn;
    }
}