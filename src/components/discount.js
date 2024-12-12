let discountcontainer = document.querySelector(".discount");
let discounts = async () => {
  let data = await fetch("http://localhost:3000/discount");
  let res = await data.json();
  res.map((discount) => {
    let slide = `<swiper-slide class="flex items-center justify-center"><img class="h-[180px] object-cover  border-spacing-0 rounded-xl p-[3px] lg:h-[300px] lg:rounded-none lg:w-full" src="${discount.image}"/></swiper-slide>`;
    discountcontainer?.insertAdjacentHTML("beforeend", slide);
  });
};
export default discounts;
 