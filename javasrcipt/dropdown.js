let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];


                 let container=document.querySelector(".container");
                 let selectbtn=document.querySelector(".select-option");
                 let dropdownList=container.querySelector(".list-search-container");

                 let searchInput=container.querySelector("#search");
                 let lists=dropdownList.querySelector(".list");

                 selectbtn.addEventListener("click",()=>{
                    container.classList.toggle('active')
                 })