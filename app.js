// LINKUP PROFILE SYSTEM

const joinButton = document.querySelector(".nav-btn");

joinButton.addEventListener("click", () => {

    const name = prompt("What's your name?");

    if (!name) return;

    const skill = prompt(
        "What is your main skill?\nExample: Python, Design, JavaScript"
    );

    if (!skill) return;

    const lookingFor = prompt(
        "What kind of person are you looking for?\nExample: Project partner, Study partner"
    );

    if (!lookingFor) return;

    const profile = {
        name: name,
        skill: skill,
        lookingFor: lookingFor
    };

    localStorage.setItem(
        "linkupProfile",
        JSON.stringify(profile)
    );

    alert(
        "Profile created!\n\n" +
        "Name: " + name +
        "\nSkill: " + skill +
        "\nLooking for: " + lookingFor
    );

});
