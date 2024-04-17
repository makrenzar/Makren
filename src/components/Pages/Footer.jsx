function Footer() {
  return (
    <>
      <footer className="container  sm:flex-row md:py-8">
        <div className="flex items-center justify-between mt-9 ">
          <p className=" font-medium text-xs lg:text-sm">Built by Makren</p>

          <p className="font-medium text-xs lg:text-sm">
            {" "}
            I build things on the web.{" "}
          </p>
          <p className="font-medium text-xs lg:text-sm">
     
            <a href="https://github.com/makrenzar/Makren" target="_blank">
         Source Code{" "}
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
