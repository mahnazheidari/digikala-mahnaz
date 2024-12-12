let fourpic2container = document.querySelector(".fourpic2");
let fourpic2 = async () => {
  let data = await fetch("http://localhost:3000/fourpic2");
  let res = await data.json();
  res.map((fourpic2) => {
    let pic = `<div class="flex items-center justify-center flex-col gap-3"><img class="rounded-xl object-cover" src="${fourpic2.image}" alt="${fourpic2.image}"></div>`;
    fourpic2container?.insertAdjacentHTML("beforeend", pic);
  });
};
export default fourpic2;
