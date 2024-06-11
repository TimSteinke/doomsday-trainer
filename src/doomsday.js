const d_start = new Date(Date.UTC(1900, 01, 01));
const d_end = new Date(Date.UTC(2099, 12, 31));

const day_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function random_date() {
    return new Date(d_start.getTime() + Math.random() * (d_end.getTime() - d_start.getTime()));
}

function new_date() {
    d_current = random_date();
    d_string = "<b>" + d_current.toLocaleDateString('en-GB', {dateStyle:"long"}) + "</b>";
    if (Date.now() - d_current.getTime() < 0) {
        d_string = "What day of the week will " + d_string + " be?";
    } else {
        d_string = "What day of the week was " + d_string + "?";
    }
    document.getElementById("date").innerHTML = d_string;
    document.getElementById("reveal_text").innerHTML = "";
}

function check_day() {
    if (Date.now() - d_current.getTime() < 0) {
        connective = " will be a ";
    } else {
        connective = " was a ";
    }
    document.getElementById("reveal_text").innerHTML =
        d_current.toLocaleDateString('en-GB', {dateStyle:"long"})
        + connective +  "<b>" + day_names[d_current.getDay()] + "</b>";
}

///////////////////////////////////////////////////////

new_date();
document.getElementById("new_date").onclick=new_date
document.getElementById("check_day").onclick=check_day
