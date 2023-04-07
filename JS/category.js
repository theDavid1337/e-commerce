let category_reset = document.querySelector('.category_reset'),
    category_all_counter = document.querySelector(".category-all_counter"),
    textGroup = document.querySelectorAll(".textGroup"),
    category_filter_inputs = document.querySelectorAll(".category-filter_inp"),
    category_all_choice = document.querySelector('.category-all_choice'),
    category_tablet = document.querySelector(".category-tablet"),
    category_latop = document.querySelector('.category-laptop'),
    category_headphones = document.querySelector('.category-headphones'),
    category_console = document.querySelector('.category-console'),
    category_others = document.querySelector('.category-other');

category_filter_inputs.forEach(elem => {
    elem.addEventListener('click', () => {
        category_filter_inputs.forEach(input => {
            input.removeAttribute("checked")
        })
        elem.setAttribute('checked', "")
    })
})

category_all_choice.addEventListener('click', () => {
    category_filter_inputs.forEach(elem => {
        elem.removeAttribute('checked')
    })
    category_all_choice.setAttribute("checked", "")
})

product_cards.forEach(elem => {
    let product_data = elem.dataset.word.split(",")
    // console.log(word);
    product_data.forEach(data_word => {
        // console.log(data_word);
        if (data_word == "camera") {
            console.log(true);
        }
    })
})