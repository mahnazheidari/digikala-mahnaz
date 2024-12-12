let readingcontainer = document.querySelector(".reading");
let reading = async () => {
  let data = await fetch("http://localhost:3000/reading");
  let res = await data.json();
  res.map((reading) => {
    let item = `<div class="w-full h-full pb-20"><img class="w-full rounded-2xl object-cover" src="${reading.image}" alt="${reading.title}"/><p class="w-[300px] pr-2 text-wrap pt-3 text-xs">${reading.title}</p></div>`;
    readingcontainer?.insertAdjacentHTML("beforeend", item);
  });
};
export default reading;
