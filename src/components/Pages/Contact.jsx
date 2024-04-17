function Contact() {
  return (
    <>
      <section
        className="container items-center justify-center py-10 md:py-20"
        id="reach"
      >
        <div>
          <p
            className="text-4xl font-extrabold lg:text-5xl py-6 lg:py-8 wow animate__animated animate__fadeIn"
            data-wow-duration="3s"
          >
            Get in touch
          </p>
          <p className="text-sm font-medium  tracking-tight lg:text-sm wow animate__animated animate__fadeIn"
            data-wow-duration="3s">
            My virtual door is always open, so feel free to reach out whenever
            you like. I will do my best to respond as soon as I can.
          </p>
          <p className="text-sm font-medium  tracking-tight lg:text-sm py-10 flex items-start justify-start gap-4  wow animate__animated animate__fadeIn"
            data-wow-duration="3s">
            Links <span className="text-orange-500 text-center">•</span>{" "}
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXSqXsTVdlXzGtmlCHKmlmWMzRjKrLrjSgrjqsbcFRdZsxPFMCHljkCqvJqHnqsxvBzdF"
              target="_blank"
            >
              <img
                src="https://skillicons.dev/icons?i=gmail"
                alt=""
                className="flex h-5 hover:scale-125 ease-in duration-200"
              />
            </a>
            <a href="https://github.com/makrenzar" target="_blank">
              <img
                src="https://skillicons.dev/icons?i=github"
                alt=""
                className="flex h-5 hover:scale-125 ease-in duration-200"
              />
            </a>
            <a href="https://www.facebook.com/makrenzar1" target="_blank">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico?_nc_eui2=AeGMVvkrZLClsHHES__uARrErSiY817De8atKJjzXsN7xqjAJMDQjS7PEFs3YjTiGsj4cGzKbwqtN5y8vndLxCFv"
                alt=""
                className="flex h-5 hover:scale-125 ease-in duration-200"
              />
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;
