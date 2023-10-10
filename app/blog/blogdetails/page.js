import React from "react";

const BlogDetails = () => {
  return (
    <div>
      <section
        className="banner"
        // style={"background-image:url(assets/img/banner1.jpg)}"}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-caption">
                <h3>Blog Details</h3>
                <ul className="breadcrumb">
                  <li>
                    <a href="index.php">Start</a>
                  </li>
                  <li>Blog Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="single-post" className="pb-90 inner-page-hero blog-page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="post-content">
                <div className="single-post-title text-center">
                  <span className="post-tag color--green-400">Lifestyle</span>
                  <h2 className="s-46 w-700">The Backbone Of The Connected Home</h2>
                  <div className="blog-post-meta mt-35">
                    <ul className="post-meta-list ico-10">
                      <li>
                        <p className="p-md w-500">By Admin</p>
                      </li>
                      <li className="meta-list-divider">
                        <p>
                          <span className="flaticon-minus"></span>
                        </p>
                      </li>
                      <li>
                        <p className="p-md">April 29, 2023</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="blog-post-img py-50">
                  <img
                    className="img-fluid r-16"
                    src="/assets/img/blog/post-12-img.jpg"
                    alt="blog-post-image"
                  />
                </div>

                <div className="single-post-txt">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit.
                  </p>

                  <h4 className="s-28">1. Expert Consultation For Smart Home</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptater.
                  </p>
                  <ul className="simple-list long-list">
                    <li className="list-item">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis voluptates qui earum eum laudantium illum
                        nemo amet ex quis cumque.
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Laborum ea, earum quia cum ipsum, at ipsa sit rem
                        in eum enim vitae.
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quibusdam, tenetur.
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        Quaerat sodales sapien undo{" "}
                        <a href="#" className="color--theme">
                          create an API Key
                        </a>
                        blandit velna vitae auctor and congue magna tempor
                        sapien eget gravida laoreet turpis urna augue, viverra a
                        augue eget tempor diam
                      </p>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda obcaecati minima cupiditate labore, delectus
                    voluptatem vitae quibusdam. Officiis eligendi, quibusdam,
                    sunt delectus doloremque laboriosam, amet saepe corrupti
                    consectetur quaerat nulla.
                  </p>
                  <h5 className="s-24">2. Plan The Cost Of Making A Smart Home</h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Optio ad consequatur praesentium iusto labore earum tempore
                    quia alias necessitatibus mollitia ratione autem laboriosam,
                    minima cum officiis officia atque doloremque minus totam
                    odit accusamus excepturi vel. Doloremque nobis doloribus
                    laboriosam laborum!
                  </p>
                  <div className="txt-code r-06">
                    <p>
                      Tempor sapien and gravida donec ipsum <kbd>cd</kbd>{" "}
                      consectetur vel imperdiet dui varius. Purus efficitur
                      ipsum primis in cubilia laoreet augue egestas
                      <kbd>
                        <kbd>ctrl</kbd> + <kbd>,</kbd>
                      </kbd>
                    </p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    dolore laboriosam fuga facilis delectus debitis hic dolorem?
                    Voluptates corporis commodi quia, dolor ullam doloribus
                    totam necessitatibus sequi aliquam perferendis molestiae?
                  </p>
                  <div className="post-inner-img">
                    <div className="video-preview">
                      <a
                        className="video-popup1"
                        href="https://www.youtube.com/embed/SZEflIVnhH8"
                      >
                        <div className="video-btn video-btn-xl bg--pink ico-90">
                          <div className="video-block-wrapper">
                            <span className="flaticon-play-button"></span>
                          </div>
                        </div>
                      </a>
                      <img
                        className="img-fluid r-16"
                        src="/assets/img/blog/post-13-img.jpg"
                        alt="video-preview"
                      />
                    </div>
                  </div>
                  <figure>
                    <blockquote className="blockquote w-300">
                      <p>
                        "Nulla tincidunt volutpat lectus purus diam ipsum primis
                        felis a congue tempor gravida habitant morbi and
                        tristique senectus netus malesuada famesa an augue
                        luctus suscipit sapien neque undo purus neque dolor
                        primis sodales dapibus egestas volute".
                      </p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      Admin,{" "}
                      <cite title="Source Title">
                        Engineering Manager, Company Name
                      </cite>
                    </figcaption>
                  </figure>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat vitae labore deleniti iure, dolore maxime unde sequi
                    nesciunt tempore alias cupiditate perferendis laudantium
                    laborum odit ab dolorem sed, saepe recusandae!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis sed voluptas exercitationem similique beatae.
                    Tempora assumenda recusandae minus, debitis repellat
                    eligendi est, voluptatum quidem similique iure praesentium
                    ut laborum necessitatibus! Aperiam enim nostrum asperiores
                    sapiente quaerat quis et? Numquam quos doloribus libero
                    asperiores natus sapiente magni exercitationem quasi
                    deserunt recusandae.
                  </p>
                  <h4 className="s-28 w-700">
                    2. Volutpat egestas and magna suscipit
                  </h4>
                  <p>
                    Sagittis congue augue egestas integer velna purus purus
                    magna nec suscipit and egestas magna aliquam ipsum vitae
                    purus justo lacus ligula ipsum primis cubilia donec undo
                    augue luctus vitae egestas a molestie donec libero sapien
                    dapibus congue tempor undo quisque fusce cursus neque
                    blandit fusce lacinia placerat and nulla justo molestie
                    blandit justo diam aliquet tortor molestie sagittis lacinia
                    undo and mullam molestie diam luctus donec bibendum aliquet
                    massa elementum. Libero quisque lacus and ligula massa
                    lorem.
                  </p>

                  <p>
                    Sagittis augue congue egestas integer velna purus purus
                    magna nec suscipit and egestas magna aliquam ipsum vitae
                    purus justo lacus ligula ipsum primis cubilia donec undo
                    augue luctus vitae egestas a molestie donec libero sapien
                    dapibus congue tempor undo quisque fusce cursus neque
                    aliquam fusce blandit
                  </p>
                  <h5 className="s-24 w-700">
                    Primis and augue "ligula" efficitur (viverra bibendum
                    aliquet dapibus aliquet dictum tempor diam as an example).
                  </h5>
                  <p>
                    Sagittis congue augue egestas integer velna purus purus
                    magna nec suscipit and egestas magna aliquam ipsum vitae
                    purus justo lacus ligula ipsum primis cubilia donec undo
                    augue luctus vitae egestas a molestie donec libero sapien
                    dapibus congue tempor undo quisque fusce cursus neque
                    blandit fusce lacinia placerat and nulla justo molestie
                    blandit justo diam aliquet tortor molestie sagittis lacinia
                    undo and mullam molestie diam luctus donec bibendum aliquet
                    massa elementum. ibero quisque lacus and ligula massa lorem
                    fusce cursus fusce nulla vitae massa placerat and mollis,
                    sapien gravida aliquet ipsum ultrices aliquet lorem diam
                    purus undo vitae aliquam auris dapibus libero fusce blandit.
                  </p>
                  <div className="txt-code r-06">
                    <p>
                      Quisque laoreet turpis <kbd>cmd</kbd> urna augue, viverra
                      a augue eget, dictum tempor diam in cubilia laoreet augue
                      egestas{" "}
                      <kbd>
                        <kbd>Alt</kbd> + <kbd>F1</kbd>
                      </kbd>{" "}
                      congue and egestas volutpat egestas magna suscipit.
                    </p>
                  </div>
                  <p>
                    Congue augue sagittis egestas integer velna purus purus
                    magna nec suscipit and egestas magna aliquam ipsum vitae
                    purus justo lacus ligula ipsum primis cubilia donec undo
                    augue luctus vitae gestas a molestie donec libero sapien
                    dapibus congue tempor undo quisque fusce cursus neque
                    blandit fusce lorem nulla an aliquam lacinia justo molestie
                    blandit justo diam an aliquet tortor sagittis lacinia
                    molestie diam egestas
                  </p>
                  <h5 className="s-24 w-700">Vitae massa placerat undo purus?</h5>
                  <p>
                    Sagittis augue congue egestas integer velna purus purus
                    magna nec suscipit and egestas magna aliquam ipsum vitae
                    purus justo lacus ligula ipsum primis cubilia donec undo
                    augue luctus vitae egestas a molestie donec libero sapien
                    dapibus congue tempor undo quisque fusce cursus neque
                    aliquam fusce blandit
                  </p>
                  <ul className="simple-list long-list">
                    <li className="list-item">
                      <p>
                        Aliqum mullam blandit tempor sapien gravida donec ipsum
                        porta justo. Laoreet turpis urna augue, viverra a augue
                        eget, dictum tempor diam pulvinar dictum tempor
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        Blandit velna vitae auctor and congue magna tempor
                        sapien eget gravida laoreet turpis
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        Nemo ipsam egestas volute turpis dolores ut aliquam
                        quaerat sodales sapien congue augue egestas
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        Quaerat sodales sapien undo euismod purus blandit velna
                        vitae auctor and congue magna tempor sapien eget gravida
                        laoreet turpis urna augue, viverra a augue eget tempor
                        diam
                      </p>
                    </li>
                  </ul>
                  <div className="post-inner-img">
                    <img
                      className="img-fluid r-16"
                      src="/assets/img/blog/post-14-img.jpg"
                      alt="blog-post-image"
                    />
                  </div>
                  <p>
                    Congue sagittis augue egestas integer velna purus purus
                    magna nec suscipit and egestas magna aliquam ipsum vitae
                    purus justo lacus ligula ipsum primis cubilia donec undo
                    augue luctus vitae egestas a molestie donec libero sapien
                    dapibus congue tempor undo quisque fusce cursus neque
                    blandit fusce aliquam
                  </p>
                  <p>
                    Sagittis congue augue egestas integer velna purus purus
                    magna nec suscipit and egestas magna aliquam ipsum vitae
                    purus justo lacus ligula ipsum primis cubilia donec undo
                    augue luctus vitae egestas a molestie donec libero sapien
                    dapibus congue tempor undo quisque fusce cursus neque
                    blandit fusce lacinia placerat and nulla justo molestie
                    blandit justo diam aliquet tortor molestie sagittis lacinia
                    undo and mullam molestie diam luctus donec bibendum aliquet
                    massa elementum. Libero quisque lacus and ligula massa
                    lorem.
                  </p>
                  <h4 className="s-28 w-700">3. Egestas volute turpis dolores</h4>
                  <p>
                    Congue augue sagittis egestas integer velna purus purus
                    magna nec suscipit and egestas magna aliquam ipsum vitae
                    purus justo lacus ligula ipsum primis cubilia donec undo
                    augue luctus vitae egestas a molestie donec libero sapien
                    dapibus congue tempor undo quisque fusce cursus neque
                    blandit fusce lorem nulla an aliquam lacinia justo molestie
                    blandit justo diam an aliquet tortor sagittis lacinia
                    molestie diam egestas
                  </p>
                  <p>
                    Sagittis augue congue egestas integer velna purus purus
                    magna nec suscipit and egestas magna aliquam ipsum vitae
                    purus justo lacus ligula ipsum primis cubilia donec undo
                    augue luctus vitae egestas a molestie donec libero sapien
                    dapibus congue tempor undo quisque fusce cursus neque
                    aliquam fusce blandit
                  </p>
                </div>

                <div className="row">
                  <div className="col post-share-list">
                    <ul className="share-social-icons ico-20 text-center clearfix">
                      <li>
                        <a href="#" className="share-ico">
                          <span className="flaticon-twitter"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="share-ico">
                          <span className="flaticon-facebook"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="share-ico">
                          <span className="flaticon-bookmark"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="post-author py-100 x-border">
                  <div className="post-author-avatar">
                    <img
                      src="/assets/img/review-author-8.jpg"
                      alt="author-avatar"
                    />
                  </div>
                  <div className="post-author-txt">
                    <h5 className="s-24 w-700">Admin</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur elit eiusmod
                      tempor sapien dolore and incidide labore dolore labore
                      incididunt turpis vitae raesent a varius dolor sagittis
                      luctus placerat a magna cursus congue magna nihil mpedit.
                    </p>
                    <div className="author-follow-btn r-04">
                      <a href="#">Follow</a>
                    </div>
                  </div>
                </div>

                <div className="post-comments">
                  <div className="comments-wrapper">
                    <h5 className="s-24 w-700">4 Comments</h5>
                    <div className="comment d-flex">
                      <img
                        src="/assets/img/comment-author-2.jpg"
                        alt="comment-avatar"
                      />
                      <div className="comment-body">
                        <div className="comment-meta">
                          <h6 className="s-17 w-700">Jack H.</h6>
                          <span className="comment-date">2 days ago&#8194;- </span>
                          <span className="btn-reply ico-20">
                            <a href="#leave-comment">
                              <span className="flaticon-reply-arrow"></span>
                              Reply
                            </a>
                          </span>
                        </div>

                        <p className="mb-40">
                          Ratione mollis undo risus aenean arcu lectus rutrum
                          porta primis and puruss augue luctus neque purus and
                          ipsum neque dolor primis libero tempus eget tempor
                          ligula posuere varius impedit enim tempor vitae
                          pulvinar at congue egestas vitae augue
                        </p>
                        <hr />
                        <div className="comment d-flex">
                          <a href="#" className="pr-3">
                            <img
                              src="assets/img/comment-author-2.jpg"
                              alt="comment-avatar"
                            />
                          </a>
                          <div className="comment-body">
                            <div className="comment-meta">
                              <h6 className="s-17 w-700">S. Parker</h6>
                              <span className="comment-date">
                                4 days ago&#8194;-{" "}
                              </span>
                              <span className="btn-reply ico-20">
                                <a href="#leave-comment">
                                  <span className="flaticon-reply-arrow"></span>
                                  Reply
                                </a>
                              </span>
                            </div>
                            <p>
                              Etiam sapien magna at vitae pulvinar congue
                              egestas and undo pretium neque viverra porta
                              suscipit ratione, mollis risus a lectus aliquet
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />

                    <div className="comment d-flex">
                      <img
                        src="assets/img/comment-author-2.jpg"
                        alt="comment-avatar"
                      />
                      <div className="comment-body">
                        <div className="comment-meta">
                          <h6 className="s-17 w-700">Sarah Griffi</h6>
                          <span className="comment-date">16 days ago&#8194;- </span>
                          <span className="btn-reply ico-20">
                            <a href="#leave-comment">
                              <span className="flaticon-reply-arrow"></span>
                              Reply
                            </a>
                          </span>
                        </div>

                        <p>
                          Porta ratione mollis risus aenean arcu lectus rutrum
                          porta primis and puruss augue luctus neque purus and
                          ipsum neque dolor primis libero tempus eget tempor
                          ligula posuere varius impedit enim tempor vitae
                          pulvinar at congue an augue egestas vitae
                        </p>
                      </div>
                    </div>
                    <hr />

                    <div className="comment d-flex">
                      <img
                        src="assets/img/comment-author-2.jpg"
                        alt="comment-avatar"
                      />
                      <div className="comment-body">
                        <div className="comment-meta">
                          <h6 className="s-17 w-700">Joshua A.</h6>
                          <span className="comment-date">30 days ago&#8194;- </span>
                          <span className="btn-reply ico-20">
                            <a href="#leave-comment">
                              <span className="flaticon-reply-arrow"></span>
                              Reply
                            </a>
                          </span>
                        </div>

                        <p>
                          Congue augue egestas integer velna purus undo purus
                          magna nec suscipit egestas magna and neque egestas a
                          porta ratione mollis risus lectus porta quisque lacus
                        </p>
                      </div>
                    </div>
                    <hr />

                    <div id="leave-comment">
                      <h5 className="s-24 w-700">Leave a Comment</h5>

                      <p>
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                      <form name="commentform" className="row comment-form">
                        <div className="col-md-12 input-message">
                          <p className="black--color">
                            Add Comment <span>*</span>
                          </p>
                          <textarea
                            className="form-control message"
                            name="message"
                            rows="6"
                            placeholder="Enter Your Comment Here* ..."
                            required
                          ></textarea>
                        </div>

                        <div className="col-md-12">
                          <p className="black--color">
                            Name <span>*</span>
                          </p>
                          <input
                            type="text"
                            name="name"
                            className="form-control name"
                            placeholder="Enter Your Name*"
                            required
                          />
                        </div>

                        <div className="col-md-12">
                          <p className="black--color">
                            Email <span>*</span>
                          </p>
                          <input
                            type="email"
                            name="email"
                            className="form-control email"
                            placeholder="Enter Your Email*"
                            required
                          />
                        </div>

                        <div className="col-lg-12 form-btn">
                          <button
                            type="submit"
                            className="btn btn--theme hover--theme submit"
                          >
                            Post Comment
                          </button>
                        </div>

                        <div className="col-md-12 comment-form-msg text-center">
                          <div className="sending-msg">
                            <span className="loading"></span>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
