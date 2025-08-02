$(document).ready(function() {
    $("#addPersonBtn").off("click")
        .on("click", function(e){
            e.preventDefault();
            addPersonForm();
        })

    $("#personForm").off("submit")
        .on("submit", function(e){
            e.preventDefault();

            if (!this.checkValidity()) {
                return;
            }

            const data = getPersonsData();

            $.ajax({
                url: '/Home/CalculateDeath',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function(response) {
                    $("#resultText").html(`Calculated average dead count: ${response.averageDeadCount}`);
                },
                error: function(xhr, status, error) {
                    console.error('Error:', error);
                }
            });
        })
});

function addPersonForm(){
    let personFormEl = $("<div>", {class: "mb-3 person-panel"})
        .append($("<div>")
                    .append($("<label>", {class: "form-label", for: "ageOfDeath"}).html("Age of Death"))
                    .append($("<input>", {type: "number", class: "form-control", id: "ageOfDeath", placeholder:"Enter age of death", min:"1", max:"100"}).attr("required", true))
                )
        .append($("<div>")
                    .append($("<label>", {class: "form-label", for: "yearOfDeath"}).html("Year of Death"))
                    .append($("<input>", {type: "number", class: "form-control", id: "yearOfDeath", placeholder:"Enter year of death", min:"1", max:"2025"}).attr("required", true))
                )

    $(".person-pane").append(personFormEl);
}

function getPersonsData(){
    var data = [];

    $(".person-panel").each(function() {
        var ageOfDeath = $(this).find("#ageOfDeath").val();
        var yearOfDeath = $(this).find("#yearOfDeath").val();
        data.push({
            AgeOfDeath: ageOfDeath,
            YearOfDeath: yearOfDeath
        });
    });

    return data;
}