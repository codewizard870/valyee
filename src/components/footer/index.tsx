const Footer = () => {
  return (
    <div className="bg-black text-white p-[50px] flex justify-between">
      <div>
        <p className="text-2xl">Wallet</p>
        <div className="pt-[49px] flex gap-[30px] justify-between">
          {Routes.map((route, index) => (
            <a href={route.href} target="_blank" key={index}>
              <span className="text-lg font-semibold">
                {route.label}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div>
        <p className="text-lg">Updates right to your inbox</p>
        <div className="flex gap-6 pt-4">
          <input className="footer-email" placeholder="Email Address">
          </input>
          <button className="w-[175px] bg-third-default rounded-lg text-lg py-[9px]">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer;

const Routes = [
  {
    label: "© Wallet 2022",
    href: ""
  },
  {
    label: "Privacy policy",
    href: ""
  },
  {
    label: "Cookies policy",
    href: ""
  },
  {
    label: "Terms of use",
    href: ""
  }
]