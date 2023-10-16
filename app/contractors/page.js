import Link from 'next/link'
import React from 'react'

const Contractors = () => {
  return (
    <div>
      

      <section className="banner" 
    //   style="background-image:url(assets/img/banner1.jpg)"

	style={{
        backgroundImage: 'url(/assets/img/banner1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '300px', // Set your desired height
      }}
      >
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="banner-caption">
					<h3>Contractors</h3>

					<ul className="breadcrumb">
						<li><Link href="/">Start</Link></li>
						<li>Contractors</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

    </div>
  )
}

export default Contractors
