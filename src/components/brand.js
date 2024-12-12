let brandcontainer = document.querySelector(".brand");
let brand = async () => {
  let data = await fetch("http://localhost:3000/brand");
  let res = await data.json();
  res.map((brand) => {
    let pic = `<swiper-slide class="flex items-center justify-center flex-col gap-3 !w-[70px] lg:!w-[110px]"><img class="w-full h-[70px] lg:h-[110px] object-cover p-2" src="${brand.image}"></swiper-slide>`;
    brandcontainer?.insertAdjacentHTML("beforeend", pic);
  });
};
export default brand;
