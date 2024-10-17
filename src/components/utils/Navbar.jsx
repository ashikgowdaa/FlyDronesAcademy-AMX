import { useNavigate,Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path, id) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Delay to allow the page to render before scrolling
  };

  return (
    <div className="bg-white max-h-[10vh] h-[10vh] text-black flex md:flex-row md:px-32 md:py-3 gap-3 md:gap-8">
      <div className="image-container w-[60px] h-[60px]">
        <Link to="/">
          <img
            className="h-auto w-auto object-cover"
            src="https://aactxg.stripocdn.email/content/guids/CABINET_f37167ea2322984dfeb6a0a05e92d2480b49356b15fb055bb2ce2e84131a12e4/images/flydro_logo_png_1.png"
            alt=""
          />
        </Link>
      </div>
      <div className="text-container flex justify-center items-center gap-2 md:gap-8 text-[1.1rem] font-medium">
        <button onClick={() => handleNavigation('/', 'course-banner')}>Course</button>
        <button onClick={() => handleNavigation('/', 'descriptions')}>About Us</button>
        <Link to="/careers">Careers</Link>
        <button onClick={() => handleNavigation('/', 'industry-applications')}>Benefits</button>
      </div>
    </div>
  );
};

export default Navbar;
