document.addEventListener("DOMContentLoaded", function (e) {
    
    let button = document.querySelector("#btn_name");
    let inpt_name = document.querySelector("#inpt_name");
    let main_name = document.querySelector("#main_name");

    let btn_test = document.querySelector("#btn_test");

    button.addEventListener("click", 
        function (e) {
            btn_name.style.display = "none"; 
            btn_test.style.display = "block";
            inpt_name.style.display = "block";
        }
    )
    btn_test.addEventListener("click", 
        function(e) {
            btn_name.style.display = "none"; 
            btn_test.style.display = "none";
            inpt_name.style.display = "block";
    })  
});

function btn_test () {
    
}

// function btn_name () {
//     let btn_name = document.querySelector("#btn_name");
//     console.log(btn_name);

//     btn_name.addEventListener ("onclick", function (e) {
//         
//     });
    
// }