let menshortcontainer = document.querySelector(".menshort");
let menshort = async () => {
  let data = await fetch("http://localhost:3000/menshort");
  let res = await data.json();
  res.map((menshort) => {
    let pic = `<div class="flex justify-center items-center"><img class="rounded-xl object-cover w-full" src="${menshort.image}"/></div>`;
    menshortcontainer?.insertAdjacentHTML("beforeend", pic);
  });
};
export default menshort;
