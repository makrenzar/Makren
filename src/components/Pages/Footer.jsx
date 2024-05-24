function Footer() {
  return (
    <>
      <footer className="container   lg:pt-8">
        <div className=" justify-between sm:flex mt-9    ">
          <p className=" font-medium text-xs lg:text-sm py-1 wow animate__animated animate__fadeIn">Built by Makren</p>

          <p className="font-medium text-xs lg:text-sm py-1 wow animate__animated animate__fadeIn">
            {" "}
            I build things on the web{" "}
          </p>
          <p className="font-medium text-xs lg:text-sm py-1 wow animate__animated animate__fadeIn">
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
