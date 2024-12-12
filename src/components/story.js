let storycontainer = document.querySelector(".story");
let stories = async () => {
  let data = await fetch("http://localhost:3000/story");
  let res = await data.json();
  res.map((story) => {
    let slide = `<swiper-slide class="flex items-center justify-center flex-col gap-3 !w-[85px]"><img class="w-full h-[85px] rounded-full object-cover border-2 border-purple-500 p-[3px]" src="${story.image}" alt="${story.title}"/><p class="w-full text-center h-[44px] text-xs text-ellipsis truncate overflow-y-auto">${story.title}</p></swiper-slide>`;
    storycontainer?.insertAdjacentHTML("beforeend", slide);
  });
};
export default stories;
