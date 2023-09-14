const Footer = () =>
{
  const currentYear = new Date().getFullYear();
  return (
    <footer className="h-20 text-center mt-4 sm:mt-12">
      <p className="text-xl text-gray-500">Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;