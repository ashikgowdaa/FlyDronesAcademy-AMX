import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-white text-black flex md:flex-row md:px-32 md:py-6 gap-3 md:gap-8'>
      <div className="image-container w-[80px] h-80px]">
        <Link to="/">
        {/* https://aactxg.stripocdn.email/content/guids/CABINET_f37167ea2322984dfeb6a0a05e92d2480b49356b15fb055bb2ce2e84131a12e4/images/vector_01.JPG */}
        <img className="h-auto w-auto object-cover" src="https://aactxg.stripocdn.email/content/guids/CABINET_f37167ea2322984dfeb6a0a05e92d2480b49356b15fb055bb2ce2e84131a12e4/images/flydro_logo_png_1.png" alt="" />
      </Link>
      </div>
      <div className="text-container flex justify-center items-center gap-2 md:gap-8 text-[1.1rem] font-medium">
        <Link to="/course">Course</Link>
        <Link to="/about">About us</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/benefits">Benefits</Link>

      </div>
      </div>
  )
}

export default Navbar