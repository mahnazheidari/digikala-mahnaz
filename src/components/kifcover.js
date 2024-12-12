let kifcovercontainer = document.querySelector(".kifcover");
let kifcover = async () => {
  let data = await fetch("http://localhost:3000/kifcover");
  let res = await data.json();
  res.map((kifcover) => {
    let pic = `<div class="flex justify-center items-center"><img class="rounded-xl object-cover w-full" src="${kifcover.image}"/></div>`;
    kifcovercontainer?.insertAdjacentHTML("beforeend", pic);
  });
};

export default kifcover;
