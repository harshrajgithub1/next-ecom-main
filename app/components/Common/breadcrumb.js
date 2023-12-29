import Link from 'next/link';

export default function breadcrumb() {
  return (
    <div>
      <section className="banner" style={{ backgroundImage: 'url(assets/img/banner6.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-caption">
                <h3>About us</h3>
                <ul className="breadcrumb">
                  <li><Link href="index.php">Start</Link></li>
                  <li>About us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
