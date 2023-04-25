import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

export default function Followers() {
  return (
    <>
      <section className="relative z-10 max-w-7xl mx-auto py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 border-t-8 border-blue-600">
          <ul className="flex items-center justify-center text-center">
            <li>
              <img className="mr-2" src={facebook} alt="facebook" />
            </li>
            <li className="text-sm text-slate-600 dark:text-slate-400 font-bold">
              @nathanf
            </li>
          </ul>

          <h2 className="text-5xl font-bold text-slate-800 dark:text-white text-center my-5">
            1987{" "}
            <span className="text-sm block text-slate-600 dark:text-slate-400 font-normal uppercase tracking-widest">
              Followers
            </span>
          </h2>

          <p className="text-center text-emerald-600 flex items-center justify-center text-sm font-bold">
            <img className="mr-2 w-3" src={up} alt="up" />
            12 today
          </p>
        </article>

        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 border-t-8 border-blue-500">
          <ul className="flex items-center justify-center text-center">
            <li>
              <img className="mr-2" src={twitter} alt="twitter" />
            </li>
            <li className="text-sm text-slate-600 dark:text-slate-400 font-bold">
              @nathanf
            </li>
          </ul>

          <h2 className="text-5xl font-bold text-slate-800 dark:text-white text-center my-5">
            1044{" "}
            <span className="text-sm block text-slate-600 dark:text-slate-400 font-normal uppercase tracking-widest">
              Followers
            </span>
          </h2>

          <p className="text-center text-emerald-600 flex items-center justify-center text-sm font-bold">
            <img className="mr-2 w-3" src={up} alt="up" />
            99 today
          </p>
        </article>

        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 relative">
          <div className="instagram h-2 w-full rounded-tl-lg rounded-tr-lg absolute top-0 left-0"></div>
          <ul className="flex items-center justify-center text-center">
            <li>
              <img className="mr-2" src={instagram} alt="instagram" />
            </li>
            <li className="text-sm text-slate-600 dark:text-slate-400 font-bold">
              @realnathanf
            </li>
          </ul>

          <h2 className="text-5xl font-bold text-slate-800 dark:text-white text-center my-5">
            11k{" "}
            <span className="text-sm block text-slate-600 dark:text-slate-400 font-normal uppercase tracking-widest">
              Followers
            </span>
          </h2>

          <p className="text-center text-emerald-600 flex items-center justify-center text-sm font-bold">
            <img className="mr-2 w-3" src={up} alt="up" />
            1099 today
          </p>
        </article>

        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 border-t-8 border-red-700">
          <ul className="flex items-center justify-center text-center">
            <li>
              <img className="mr-2" src={youtube} alt="youtube" />
            </li>
            <li className="text-sm text-slate-600 dark:text-slate-400 font-bold">
              Nathan F.
            </li>
          </ul>

          <h2 className="text-5xl font-bold text-slate-800 dark:text-white text-center my-5">
            8239{" "}
            <span className="text-sm block text-slate-600 dark:text-slate-400 font-normal uppercase tracking-widest">
              Subscribers
            </span>
          </h2>

          <p className="text-center text-rose-600 flex items-center justify-center text-sm font-bold">
            <img className="mr-2 w-3" src={down} alt="up" />
            144 today
          </p>
        </article>
      </section>
    </>
  );
}
