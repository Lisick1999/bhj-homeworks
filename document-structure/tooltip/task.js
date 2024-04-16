const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));
const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");

for (let item of hasTooltip) {

    item.addEventListener("click", (event) => {
        let position = item.getBoundingClientRect();

        event.preventDefault()

        if(tooltip.innerHTML != item.title) {
            tooltip.innerHTML = item.title;
            tooltip.classList.add('tooltip_active');

            item.insertAdjacentElement("afterend", tooltip);

            let attr = item.getAttribute("title");
            tooltip.textContent = attr;
            
            tooltip.style.top = position.bottom + 'px';
            tooltip.style.left = position.left + 'px';

        } else {
            tooltip.classList.toggle('tooltip_active');
        }
    })
}
