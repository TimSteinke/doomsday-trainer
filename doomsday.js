const year_start_input = document.getElementById("year-start");
const year_start_label = document.getElementById("year-start-label");

year_start_input.addEventListener("input", update_year_start);

function update_year_start(e) {
    year_start_label.innerHTML = e.target.value;
}


const year_end_input = document.getElementById("year-end");
const year_end_label = document.getElementById("year-end-label");

year_end_input.addEventListener("input", update_year_end);

function update_year_end(e) {
    year_start_input.setAttribute("min", //TODO: cont
    year_end_label.innerHTML = e.target.value;
}
