/* eslint-disable react/prop-types */
import shortLogo from "../assets/images/logo-mark.svg";
import avater from "../assets/images/image-avatar.jpg";
import github from "../assets/images/icon-github.svg";
export default function Output({ data }) {
  const date = new Date().toLocaleDateString("en-En", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <section className="w-5/6 md:w-4/5 lg:w-3/6 m-auto">
        <article
          id="ticket"
          className="max-w-80 md:max-w-full bg-pattern-ticket bg-center bg-contain bg-no-repeat m-auto flex items-center justify-between"
        >
          <div className="flex flex-col gap-4 md:gap-16 p-4 md:p-8">
            <article className="flex items-center gap-4">
              <img src={shortLogo} alt="logo" className="w-12 md:w-auto" />
              <header>
                <h3 className="text-xl md:text-3xl font-bold">Coding Conf</h3>
                <span className="text-sm">
                  {date}/ Austin
                  <span className="hidden md:inline">, TX</span>
                </span>
              </header>
            </article>
            <article className="flex items-center gap-3">
              <img
                className="w-12 md:w-14 rounded-md"
                src={data.image ? data.image : avater}
                alt="logo"
              />
              <header>
                <h4 className="md:text-xl font-semibold">{data.name}</h4>
                <p className="flex items-center gap-3">
                  <img src={github} alt="github" />
                  <span className="text-sm">{data.github}</span>
                </p>
              </header>
            </article>
          </div>
          <p className="text-2xl font-bold rotate-90">#012206</p>
        </article>
      </section>
    </>
  );
}
