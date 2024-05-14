const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function containerOfNumbers() {
    const numberContainer = document.querySelector("#num_coontainer");
    const spans = arr.map(() => {
        let random = Math.ceil(Math.random() * 9);
        return `<span class="num w-auto h-auto px-[15px] py-1 rounded-lg shadow-[1px_1px_20px_#000000] text-2xl font-[nunito] bg-slate-950 select-none">${random}</span>`;
    }).join('');
    numberContainer.innerHTML = spans;
}
setInterval(() => {
    containerOfNumbers();
},70);