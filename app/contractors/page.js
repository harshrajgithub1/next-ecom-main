import Link from 'next/link'
import React from 'react'

const Contractors = () => {
  return (
    <div>
      

      <section class="banner" 
    //   style="background-image:url(assets/img/banner1.jpg)"

	style={{
        backgroundImage: 'url(/assets/img/banner1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '300px', // Set your desired height
      }}
      >
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="banner-caption">
					<h3>Contractors</h3>

					<ul class="breadcrumb">
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
