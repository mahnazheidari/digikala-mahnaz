let categorycontainer = document.querySelector(".category");
let category = async () => {
  let data = await fetch("http://localhost:3000/category");
  let res = await data.json();
  res.map((category) => {
    let item = `<swiper-slide class="flex flex-col gap-3 lg:gap-6 !w-[100px] *:justify-center *:items-center]"><div><img class="w-[100px] p-3" src="${category[0].image}"/><p class="text-xs pr-3 text-center">${category[0].title}</p></div>
    <div><img class="w-[100px] p-3" src="${category[1].image}"/><p class="text-xs pr-3 text-center">${category[1].title}</p></div>
        </swiper-slide>`;

    categorycontainer?.insertAdjacentHTML("beforeend", item);
  });
};
export default category;
