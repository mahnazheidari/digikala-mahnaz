let pinkcontainer = document.querySelector(".pink");
let pink = async () => {
  let data = await fetch("http://localhost:3000/pink");
  let res = await data.json();
  res.map((pink) => {
    let slide = `<swiper-slide class="flex bg-white p-2 mx-4 rounded-xl items-center justify-center flex-col !w-[130px] h-[220px]"><img class="w-full h-[114px]  object-cover pt-[2px]" src="${pink.image}" alt="${pink.title}"/><p class="bg-red-600 mr-auto text-white text-bold w-fit text-xs px-1 rounded-2xl">${pink.dis}</p><p class="w-full text-center h-[40px] text-xs text-gray-700 truncate whitespace-normal overflow-ellipsis">${pink.title}</p><p class="text-s mr-auto">${pink.price}</p><p class="text-gray-500 text-xs"><strike>${pink.oldprice}</strike></p></swiper-slide>`;
    pinkcontainer?.insertAdjacentHTML("beforeend", slide);
  });
};
export default pink;
