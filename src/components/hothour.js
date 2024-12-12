let hothourcontainer = document.querySelector(".hothour");
let hothour = async () => {
  let data = await fetch("http://localhost:3000/hothour");
  let res = await data.json();
  res.map((hothour) => {
    let slide = `<swiper-slide class="flex flex-col gap-3 !w-[350px] *:flex *:items-center *:gap-3"><div><img class="w-[60px]" src="${hothour[0].image}"/><h2 class="text-blue-700 font-semibold text-xl">${hothour[0].number}</h2><p>${hothour[0].title}</p>></div>
    <div><img class="w-[60px]" src="${hothour[1].image}"/><h2 class="text-blue-700 font-semibold text-xl">${hothour[1].number}</h2><p>${hothour[1].title}</p></div>
        <div><img class="w-[60px]" src="${hothour[2].image}"/><h2 class="text-blue-700 font-semibold text-xl">${hothour[2].number}</h2><p>${hothour[2].title}</p></div></swiper-slide>`;

        hothourcontainer?.insertAdjacentHTML("beforeend", slide);
  });
};
export default hothour;
