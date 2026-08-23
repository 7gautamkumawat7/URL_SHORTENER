import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col md:flex-row justify-center items-center">
        
  {/* Column 1 */}
  <div className="w-full md:w-1/2 py-6 px-4 font-bold">
    <p className="text-lg mb-2">The best URL shortener in the market</p>
    <p className="font-normal">
      Transform long, messy URLs into sleek, trackable links that drive results. 
      With our powerful shortener, you don’t just save space — you unlock insights, 
      boost engagement, and build trust with every click. Whether it’s social media, 
      email campaigns, or QR codes, our short links make sharing smarter, faster, 
      and more effective. Join the future of URL shortening today and elevate your online presence.
    </p>
    <div className ="gap-7 mt-4 flex">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">try now</button>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">GITHUB</button>
    </div>
  </div>

  {/* Column 2 */}
  <div className="w-full md:w-1/2 flex justify-center p-4 py-6">
    <Image
      src="/group.jpg"
      height={300}
      width={300}
      alt="An image of group"
      className="mix-blend-darken"
    />
  </div>
      </section>
    </main>
  );
}

