import logo from '../assets/logoK.png'

export const Home = () => {
  return (
    <>
      <section className="sm:-z-10 flex sm:h-screen w-screen sm:items-center sm:justify-center sm:fixed">
        <img src={logo} alt="Logo" className="logo-home max-h-[30rem]" />
      </section>
    </>
  )
}
