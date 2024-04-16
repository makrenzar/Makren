function Footer() {
  return (
    <>
      <footer className="container  sm:flex-row md:py-8">
        <div className=" bg-gray-500 h-[1px] w-full mt-24"></div>
        <div className="flex items-center justify-between mt-9 ">
          <p className=" font-medium text-xs lg:text-sm">
            <a href="https://www.facebook.com/makrenzar1" target="_blank">
              Created by <span className="text-blue-500">•</span> #makrenzar
            </a>{" "}
          </p>
          <p className="font-medium text-xs lg:text-sm">
            Github{" "}
            <a href="https://github.com/makrenzar/Makren" target="_blank">
              {" "}
              <span className="text-blue-500 ">•</span> Source Code{" "}
            </a>
          </p>
          <p className="font-medium text-xs lg:text-sm">
            <a href="https://www.facebook.com/makrenzar1" target="_blank">
              <span className="text-blue-500 ">•</span>
              <span className="bg-blue-500 ">fb</span>
            </a>{" "}
            <a href="https://github.com/makrenzar/Makren" target="_blank">
              <span className="text-orange-500 text-center">•</span>
              <span className="bg-orange-500">ig</span>
            </a>{" "}
            <a href="https://www.instagram.com/_mkrnzjarr" target="_blank">
              <span className="text-cyan-700">•</span>
              <span className="bg-cyan-700 ">in</span>
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
