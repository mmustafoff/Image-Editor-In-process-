const M1 = document.getElementById('Menu1');
const M2 = document.getElementById('Menu2');
const FilterBtn = document.getElementById('Filters');
const EditBtn = document.getElementById('Edit');
const Edit = document.getElementById('ForEdits');
const Filters = document.getElementById('ForFilters');
const Select = (Clicked) =>{
    Clicked.style.borderStyle = "outset";
    Clicked.style.borderWidth = "1px";
    Clicked.style["boxShadow"] = "0 0 5px #dddddd";
}

const SwitchToFilters = (From) =>{
From.style.borderStyle = "none";
From.style["boxShadow"] = "";
M1.style.left = "-100%";
M2.style.left = "100%";
Select(Filters);
}

const SwitchToEdit = (From) =>{
    From.style.borderStyle = "none";
    From.style["boxShadow"] = "";
    M1.style.left = "0";
    M2.style.left = "100%";
    Select(Edit);
    }

FilterBtn.addEventListener('click', ()=>{
    SwitchToFilters(Edit);
})

EditBtn.addEventListener('click', ()=>{
    SwitchToEdit(Filters);
})

window.addEventListener('load', () =>{
    Select(Edit);
})