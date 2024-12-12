let hotscontainer = document.querySelector(".hots");
let hots = async () => {
  let data = await fetch("http://localhost:3000/hot");
  let res = await data.json();
  res.map((hots) => {
    let slide = `<swiper-slide class="flex flex-col gap-3 !w-[350px] *:flex *:items-center *:gap-3"><div class="px-3"><img class="w-[60px]" src="${hots[0].image}"/><h2 class="text-blue-700 font-semibold text-xl">${hots[0].number}</h2><p>${hots[0].title}</p></div>
    <div class="px-3"><img class="w-[60px]" src="${hots[1].image}"/><h2 class="text-blue-700 font-semibold text-xl">${hots[1].number}</h2><p>${hots[1].title}</p></div>
        <div class="px-3"><img class="w-[60px]" src="${hots[2].image}"/><h2 class="text-blue-700 font-semibold text-xl">${hots[2].number}</h2><p>${hots[2].title}</p></div></swiper-slide>`;

    hotscontainer?.insertAdjacentHTML("beforeend", slide);
  });
};
export default hots;
