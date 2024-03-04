const team = 
[
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

//Milestone n.1:
//LOG the single info about the name, role, photo.
for (let x = 0; x < team.length; x++)
{
    const member = team[x];
    //console.log(member.name , member.role , member.image);
    console.log(member.name);
    console.log(member.role);
    console.log(member.image);
};


//Milestone n.2:
//stamp on HTML same info.
let screenEl = document.querySelector(".on_screen");
//let markupImg = `<img src="" alt="">` ;

for (let x = 0; x < team.length; x++)
{
    const member = team[x];
    
    //screenEl.insertAdjacentHTML("beforeend",member.name);
    //screenEl.insertAdjacentHTML("beforeend", member.role);
    //screenEl.insertAdjacentHTML("beforeend", member.image);
    //orrible to see on page like this, but anyway let's go on

    //Bonus n.1:
    //transform the "string" about the photo in a real one.
    //screenEl.insertAdjacentHTML("beforeend" , `<img src="../assets/img/${member.image}" alt="">`);
};

//Bonus n.2:
//organize members in cards.
let rowEl = document.querySelector(".row");

for (let x = 0; x < team.length; x++) {
    const member = team[x];
    rowEl.insertAdjacentHTML("beforeend",
    `<div class="col-4">
        <div class="card mb-3">
            <img src="../assets/img/${member.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-text">${member.role}</p>
            </div>
        </div 
    </div>`
);
};
