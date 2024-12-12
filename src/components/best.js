let bestcontainer = document.querySelector(".best");
let best = async () => {
  let data = await fetch("http://localhost:3000/best");
  let res = await data.json();
  res.map((best) => {
    let slide = `<swiper-slide class="flex flex-col gap-3 !w-[350px] *:flex *:items-center *:gap-3"><div><img class="w-[60px]" src="${best[0].image}"/><h2 class="text-blue-700 font-semibold text-xl">${best[0].number}</h2><p>${best[0].title}</p>></div>
    <div><img class="w-[60px]" src="${best[1].image}"/><h2 class="text-blue-700 font-semibold text-xl">${best[1].number}</h2><p>${best[1].title}</p></div>
        <div><img class="w-[60px]" src="${best[2].image}"/><h2 class="text-blue-700 font-semibold text-xl">${best[2].number}</h2><p>${best[2].title}</p></div></swiper-slide>`;

    bestcontainer?.insertAdjacentHTML("beforeend", slide);
  });
};
export default best;
