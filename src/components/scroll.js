let scrollcontainer = document.querySelector(".scroll");
let scroll = async () => {
  let data = await fetch("http://localhost:3000/scroll");
  let res = await data.json();
  res.map((scroll) => {
    let item = `<div class="!w-[55px]"><img class="w-full h-[55px] rounded-full object-cover" src="${scroll.image}" alt="${scroll.title}"/><p class="w-[61px] text-center h-[35px] text-xs truncate whitespace-normal overflow-ellipsis">${scroll.title}</p></div>`;
    scrollcontainer?.insertAdjacentHTML("beforeend", item);
  });
};
export default scroll;
