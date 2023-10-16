import Image from 'next/image';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section id="hero-1" className="bg--scroll hero-section">
        <Image src="/assets/img/slider/slider1.jpg" alt="" className="img-fluid banner-img" width={500} height={200} />
        <div className="container container-content">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="hero-1-img wow fadeInLeft">
                <Image src="/assets/img/slider/img1.png" alt="hero-image" width={500} height={200} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-1-txt color--white wow fadeInRight">
                <h2 className="s-47">Jetzt vergleichen und deine Wohnung <span>optimal vernetzen</span></h2>
                <p className="p-xl">Trishala Connect bietet dir einzigartige Möglichkeiten auf 
                den neusten Stand der Technik zu kommen. Simple better advice</p>
                <Link href="#banner-3" className="btn r-04 btn--theme hover--tra-white">Get started for free</Link>
              </div>
            </div>

            <div className="col-md-12">
              <div className="select_section wow fadeInUp">
                <select name="" id="select1" className="form-control">
                  <option value="Industrie">Industrie</option>
                  <option value="Privat">Privat</option>
                </select>

                <select name="" id="select2" className="form-control">
                  <option value="">Mehrfamilienhaus</option>
                  <option value="">Umbau</option>
                  <option value="">Büro</option>
                  <option value="">Werkstatt</option>
                  <option value="">Lagerhalle</option>
                  <option value="">Produktion</option>
                </select>

                <select name="" id="select3" className="form-control">
                  <option value="">Systeme</option>
                  <option value="">Einzelsysteme</option>
                  <option value="">Kompaktsysteme</option>
                  <option value="">Alle</option>
                </select>

                <select name="" id="select4" className="form-control">
                  <option value="">Anzahl Räume</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                </select>

                <select name="" id="countries" className="form-control">
                  <option value="">Land</option>
                  <option value="">German</option>
                  <option value="">France</option>
                  <option value="">US</option>
                </select>

                <button className="btn btn-submit">Ich habe schon etwas</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
