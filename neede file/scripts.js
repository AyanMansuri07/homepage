{/* <script>
document.addEventListener("DOMContentLoaded", () => {
    const applyButtons = document.querySelectorAll(".btn-apply");
    applyButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            alert("Thank you for applying! We will get back to you soon.");
        });
    });

    const searchForm = document.querySelector(".search-form");
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Search functionality coming soon!");
    });
});
</script> */}

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});


