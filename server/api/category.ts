export default defineEventHandler((event) => {
  return [
  {
    id: 1,
    en_name: "Home",
    vi_name: "Trang chủ",
    link: "/",
    icon: "fa-solid fa-house",
  },
  {
    id: 2,
    en_name: "About",
    vi_name: "Về tôi",
    link: "/about",
    icon: "fa-regular fa-user",
  },
  {
    id: 3,
    en_name: "Contact",
    vi_name: "Liên hệ",
    link: "/contact",
    icon: "fa-solid fa-address-book",
  },
]
})
