import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

export default function Overview() {
  return (
    <>
      <h2 className="text-slate-600 font-bold mb-5 text-2xl md:text-3xl">
        Overview - Today
      </h2>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold">Page Views</li>
            <li>
              <img src={facebook} alt="facebook" />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl">87</li>
            <li className="flex items-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="up" className="w-3 mr-2" />
              3%
            </li>
          </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold">Likes</li>
            <li>
              <img src={facebook} alt="facebook" />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl">52</li>
            <li className="flex items-center text-rose-600 font-bold text-sm">
              <img src={down} alt="down" className="w-3 mr-2" />
              2%
            </li>
          </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold">Likes</li>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl">5462</li>
            <li className="flex items-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="up" className="w-3 mr-2" />
              2257%
            </li>
          </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold">Profile Views</li>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl">52k</li>
            <li className="flex items-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="up" className="w-3 mr-2" />
              1375%
            </li>
          </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold">Retweets</li>
            <li>
              <img src={twitter} alt="twitter" />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl">117</li>
            <li className="flex items-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="up" className="w-3 mr-2" />
              303%
            </li>
          </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold">Likes</li>
            <li>
              <img src={twitter} alt="twitter" />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl">507</li>
            <li className="flex items-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="up" className="w-3 mr-2" />
              553%
            </li>
          </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold">Likes</li>
            <li>
              <img src={youtube} alt="youtube" />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl">107</li>
            <li className="flex items-center text-rose-600 font-bold text-sm">
              <img src={down} alt="down" className="w-3 mr-2" />
              19%
            </li>
          </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold">Total Views</li>
            <li>
              <img src={youtube} alt="youtube" />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl">1407</li>
            <li className="flex items-center text-rose-600 font-bold text-sm">
              <img src={down} alt="down" className="w-3 mr-2" />
              12%
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
