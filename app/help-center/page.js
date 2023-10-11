import Link from "next/link";
import React from "react";

const HelpCenter = () => {
  return (
    <div>
      <section
        className="banner"
        //style="background-image:url(assets/img/banner1.jpg)"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-caption">
                <h3>Help Center</h3>

                <ul className="breadcrumb">
                  <li>
                    <Link href="/">Start</Link>
                  </li>
                  <li>Help Center</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="faqs-4"
        className="gr--whitesmoke inner-page-hero pb-100 faqs-section division"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-10">
              <div className="inner-page-title">
                <h2 className="s-52">
                  How Can <span>We Help?</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="tabs-nav tabs--theme clearfix">
                <ul className="tabs-1">
                  <li className="tab-link current ico-45 r-16" data-tab="tab-1">
                    <div className="tab-link-ico">
                      <span className="flaticon-mechanics"></span>
                    </div>
                    <p>Getting Started</p>
                  </li>
                  <li className="tab-link ico-45 r-16" data-tab="tab-2">
                    <div className="tab-link-ico">
                      <span className="flaticon-suit"></span>
                    </div>
                    <p>My Account</p>
                  </li>
                  <li className="tab-link ico-45 r-16" data-tab="tab-3">
                    <div className="tab-link-ico">
                      <span className="flaticon-price-label"></span>
                    </div>
                    <p>Pricing Plans</p>
                  </li>
                  <li className="tab-link ico-45 r-16" data-tab="tab-4">
                    <div className="tab-link-ico">
                      <span className="flaticon-screenplay"></span>
                    </div>
                    <p>Other Questions</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tabs-content">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div id="tab-1" className="tab-content current">
                  <div className="accordion-wrapper">
                    <ul className="accordion">
                      <li className="accordion-item is-active">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">
                            What is Trisfusa and how does it work?
                          </h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas magna ipsum vitae purus congue
                            efficitur and ipsum primis in cubilia laoreet augue
                            egestas luctus donec and curabitur dapibus{" "}
                          </p>
                        </div>
                      </li>
                      <li className="accordion-item">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">What's inside the package?</h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas tempor magna undo ipsum vitae purus
                            and efficitur ipsum primis in cubilia laoreet tempor
                            gravida luctus neque purus ipsum neque{" "}
                          </p>
                          <p>
                            Sapien egestas, congue gestas posuere cubilia congue
                            ipsum mauris lectus laoreet and gestas neque vitae
                            auctor dolor luctus placerat a magna cursus congue
                            magna mpedit ligula undo congue. Maecenas agravida
                            augue porttitor nunc, quis vehicula magna luctus
                            tempor. Quisque vel laoreet turpis. Viverra augue, a
                            augue tempor, dictum tempor diam. Sed pulvinar a
                            consectetur nibh, imperdiet varius viverra{" "}
                          </p>
                        </div>
                      </li>
                      <li className="accordion-item">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">General settings</h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <p>
                            An augue cubilia laoreet magna suscipit egestas
                            magna ipsum purus ipsum a primis an augue ultrice
                            ligula egestas suscipit lectus gestas integer congue
                            a lectus porta phasellus neque blandit tristique{" "}
                          </p>
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas and magna and vehicula{" "}
                          </p>
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit lipsum egestas magna ipsum vitae a purus
                            ipsum congue efficitur ipsum primis in cubilia
                            laoreet augue egestas luctus donec and curabitur{" "}
                          </p>
                        </div>
                      </li>
                      <li className="accordion-item">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">
                            Which languages does Trisfusa support?
                          </h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <p>
                            An augue cubilia laoreet and magna suscipit egestas
                            magna ipsum purus ipsum primis undo augue ultrice
                            ligula egestas suscipit lectus gestas integer congue
                            a lectus porta tristique phasellus neque a blandit
                            and tristique justo aliquam justo suscipit congue
                            augue egestas volutpat egestas magna sem congue{" "}
                          </p>
                          <p>
                            An augue cubilia laoreet and magna suscipit egestas
                            magna ipsum purus ipsum primis and augue efficitur
                            ligula egestas suscipit lectus gestas integer congue
                            a lectus porta phasellus neque{" "}
                          </p>
                        </div>
                      </li>
                      <li className="accordion-item acc-last-item">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">Automate testing with API</h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <ul className="simple-list">
                            <li className="list-item">
                              <p>
                                Curabitur ac dapibus libero quisque eu congue
                                tristique egestas phasellus blandit tristique
                                justo aliquam. Aliquam vitae molestie quisque
                                sapien justo, aliquet aliquam molestie sed purus
                                undo venenatis tempor gravida eget lacinia.
                                Augue aliquam a suscipit tincidunt tincidunt
                                massa{" "}
                              </p>
                            </li>
                            <li className="list-item">
                              <p>
                                Aliquam vitae molestie nunc. Quisque sapien
                                justo, aliquet non molestie sed purus, venenatis{" "}
                              </p>
                            </li>
                            <li className="list-item">
                              <p>
                                Sagittis congue augue egestas volutpat egestas
                                magna suscipit egestas magna ipsum vitae an
                                efficitur purus undo ipsum primis in cubilia
                                laoreet augue egestas luctus donec curabitur
                                dapibus libero{" "}
                              </p>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="tab-2" className="tab-content">
                  <div className="accordion-wrapper">
                    <ul className="accordion">
                      <li className="accordion-item is-active">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">
                            Sign up and manage your account
                          </h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <ol className="digit-list">
                            <li className="list-item">
                              <p>
                                Curabitur ac dapibus libero eu congue tristique
                                neque
                              </p>
                            </li>
                            <li className="list-item">
                              <p>
                                Sagittis congue augue egestas volutpat egestas
                              </p>
                            </li>
                            <li className="list-item">
                              <p>An aliquam justo suscipit congue augue</p>
                            </li>
                            <li className="list-item">
                              <p>Gestas integer congue a lectus porta</p>
                            </li>
                          </ol>
                        </div>
                      </li>
                      <li className="accordion-item">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">Manage account settings</h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <p>
                            Sapien egestas, congue gestas posuere cubilia congue
                            ipsum mauris lectus laoreet gestas neque and vitae
                            undo auctor dolor luctus placerat a magna cursus
                            congue magna mpedit ligula congue maecenas gravida
                            augue porttitor nunc, quis vehicula magna luctus
                            tempor. Quisque vel laoreet turpis. Viverra augue, a
                            augue tempor, dictum tempor diam. Sed pulvinar a
                            consectetur nibh, imperdiet varius viverra{" "}
                          </p>
                        </div>
                      </li>
                      <li className="accordion-item">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">
                            Change language or location settings
                          </h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <p>
                            Sapien egestas, congue gestas posuere cubilia congue
                            ipsum mauris lectus laoreet gestas neque and vitae
                            undo auctor dolor luctus placerat a magna cursus
                            congue magna mpedit ligula congue maecenas gravida
                            augue porttitor nunc, quis vehicula magna luctus
                            tempor. Quisque vel laoreet turpis. Viverra augue, a
                            augue tempor, dictum tempor diam. Sed pulvinar a
                            consectetur nibh, imperdiet varius viverra{" "}
                          </p>
                        </div>
                      </li>
                      <li className="accordion-item">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">
                            Troubleshoot account issues
                          </h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <p>
                            An augue cubilia laoreet and magna suscipit egestas
                            magna ipsum purus ipsum primis an augue ultrice
                            ligula egestas suscipit lectus gestas integer congue
                            a lectus porta tristique phasellus neque a blandit
                            and tristique justo aliquam justo suscipit congue
                            augue egestas volutpat egestas magna sem congue{" "}
                          </p>
                          <p>
                            An augue cubilia laoreet and magna suscipit egestas
                            magna ipsum purus ipsum primis and augue efficitur
                            ligula egestas suscipit lectus gestas integer congue
                            a lectus porta phasellus neque{" "}
                          </p>
                        </div>
                      </li>
                      <li className="accordion-item acc-last-item">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">
                            Manage accessibility settings
                          </h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <p>
                            Sapien egestas, congue gestas posuere cubilia congue
                            ipsum mauris lectus laoreet gestas neque and vitae
                            undo auctor dolor luctus placerat a magna cursus
                            congue magna mpedit ligula congue maecenas gravida
                            augue porttitor nunc, quis vehicula magna luctus
                            tempor. Quisque vel laoreet turpis. Viverra augue, a
                            augue tempor, dictum tempor diam. Sed pulvinar a
                            consectetur nibh, imperdiet varius viverra{" "}
                          </p>
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas and magna ipsum vitae purus and
                            efficitur ipsum primis in cubilia laoreet tempor
                            gravida{" "}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="tab-3" className="tab-content">
                  <div className="accordion-wrapper">
                    <ul className="accordion">
                      <li className="accordion-item is-active">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">
                            How much does Trisfusa cost?
                          </h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <p>
                            An augue cubilia laoreet and magna suscipit egestas
                            magna ipsum purus ipsum primis undo augue ultrice
                            ligula egestas suscipit lectus gestas integer congue
                            a lectus porta neque blandit tristique{" "}
                          </p>
                        </div>
                      </li>
                      <li className="accordion-item">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">
                            I didn't receive the license key after purchased
                          </h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <ul className="simple-list">
                            <li className="list-item">
                              <p>
                                Curabitur ac dapibus libero. Quisque eu congue
                                tristique neque. Phasellus blandit tristique
                                aliquam justo undo. Aliquam vitae molestie nunc.
                                Quisque sapien justo, aliquet non molestie purus
                                tempor{" "}
                              </p>
                            </li>
                            <li className="list-item">
                              <p>
                                Sagittis congue augue egestas volutpat egestas
                                magna suscipit egestas magna ipsum vitae purus
                                undo efficitur ipsum primis in cubilia laoreet
                                augue egestas luctus donec curabitur dapibus
                                libero{" "}
                              </p>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="accordion-item">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">
                            Do you offer discounts for annual plans?
                          </h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <ul className="simple-list">
                            <li className="list-item">
                              <p>
                                Curabitur ac dapibus libero. Quisque eu congue
                                justo undo tristique neque phasellus and blandit
                                tristique aliquam. Aliquam vitae molestie nunc.
                                Quisque sapien justo, aliquet non molestie purus
                                tempor{" "}
                              </p>
                            </li>
                            <li className="list-item">
                              <p>
                                Sagittis congue augue egestas volutpat egestas
                                magna suscipit egestas magna ipsum vitae purus
                                undo efficitur ipsum primis in cubilia laoreet
                                augue egestas luctus donec curabitur dapibus
                                libero{" "}
                              </p>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="accordion-item">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">How safe is my data?</h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <p>
                            An augue cubilia laoreet and magna suscipit egestas
                            magna an ipsum purus ipsum primis an augue ultrice
                            ligula egestas suscipit lectus gestas integer congue
                            a lectus porta tristique phasellus neque a blandit
                            undo tristique justo aliquam justo suscipit congue
                            augue egestas volutpat egestas magna sem{" "}
                          </p>
                          <p>
                            An augue cubilia laoreet and magna suscipit egestas
                            magna ipsum purus ipsum primis and augue efficitur
                            ligula egestas suscipit lectus gestas integer congue
                            a lectus porta phasellus neque{" "}
                          </p>
                        </div>
                      </li>
                      <li className="accordion-item acc-last-item">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">How to request a refund?</h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <ul className="simple-list">
                            <li className="list-item">
                              <p>
                                Curabitur ac dapibus libero. Quisque eu congue
                                tristique
                              </p>
                            </li>
                            <li className="list-item">
                              <p>
                                Congue tristique neque phasellus blandit
                                tristique justo undo aliquam. Aliquam vitae
                                molestie quisque sapien justo, aliquet non
                                molestie purus tempor{" "}
                              </p>
                            </li>
                            <li className="list-item">
                              <p>
                                Sagittis congue augue egestas volutpat egestas
                                magna suscipit egestas magna ipsum{" "}
                              </p>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="tab-4" className="tab-content">
                  <div className="accordion-wrapper">
                    <ul className="accordion">
                      <li className="accordion-item is-active">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">
                            How do I get the error log?
                          </h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas and magna ipsum vitae{" "}
                          </p>
                          <p>
                            Sagittis congue augue egestas volutpat egestas and
                            magna suscipit an egestas magna ipsum vitae purus
                            congue efficitur ipsum primis in cubilia laoreet
                            augue egestas luctus donec and curabitur dapibus{" "}
                          </p>
                        </div>
                      </li>
                      <li className="accordion-item">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">
                            I forgot my folder password, what should I do?
                          </h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas magna ipsum vitae purus congue
                            efficitur ipsum primis in cubilia laoreet augue
                            egestas luctus donec and curabitur dapibus{" "}
                          </p>
                          <ol className="digit-list">
                            <li className="list-item">
                              <p>Gestas integer congue a lectus porta</p>
                            </li>
                            <li className="list-item">
                              <p>An aliquam justo suscipit congue augue</p>
                            </li>
                            <li className="list-item">
                              <p>
                                Sagittis congue augue egestas volutpat egestas
                              </p>
                            </li>
                          </ol>
                        </div>
                      </li>
                      <li className="accordion-item">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">
                            Limitations of folder password protection
                          </h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <p>
                            Sapien egestas, congue gestas posuere cubilia congue
                            ipsum mauris lectus laoreet gestas neque and vitae
                            undo auctor dolor luctus placerat a magna cursus
                            congue magna mpedit ligula congue maecenas gravida
                            augue porttitor nunc, quis vehicula magna luctus
                            tempor. Quisque vel laoreet turpis. Viverra augue, a
                            augue tempor, dictum tempor diam. Sed pulvinar a
                            consectetur nibh, imperdiet varius viverra{" "}
                          </p>
                        </div>
                      </li>
                      <li className="accordion-item">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">Import existing library</h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <p>
                            Sapien egestas, congue gestas posuere cubilia congue
                            ipsum mauris lectus laoreet gestas neque and vitae
                            undo auctor dolor luctus placerat a magna cursus
                            congue magna mpedit ligula congue maecenas gravida
                            augue porttitor nunc, quis vehicula magna luctus
                            tempor. Quisque vel laoreet turpis. Viverra augue, a
                            augue tempor, dictum tempor diam. Sed pulvinar a
                            consectetur nibh, imperdiet varius viverra{" "}
                          </p>
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas and magna ipsum vitae purus and
                            efficitur ipsum primis in cubilia laoreet tempor
                            gravida{" "}
                          </p>
                        </div>
                      </li>
                      <li className="accordion-item acc-last-item">
                        <div className="accordion-thumb">
                          <h5 className="s-22 w-700">
                            I lost my license. Can you send it to me?
                          </h5>
                        </div>
                        <div className="accordion-panel color--grey">
                          <p>
                            An augue cubilia laoreet and magna suscipit egestas
                            magna ipsum purus ipsum primis undo augue ultrice
                            ligula egestas suscipit lectus gestas integer congue
                            phasellus neque blandit tristique{" "}
                          </p>
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas and magna ipsum vitae{" "}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="banner-9" className="bg--02 py-70 x-border banner-section">
        <div className="container">
          <div className="banner-7-wrapper">
            <div className="row justify-content-center d-flex align-items-center">
              <div className="col-md-7 col-xl-5">
                <div className="banner-9-txt">
                  <h3 className="s-40 w-700">Still need help?</h3>
                  <p className="p-lg">
                    Don't hesitate to contact us about any question you might be
                    interested in
                  </p>
                  <a
                    href="contacts.php"
                    className="btn r-04 btn--theme hover--theme"
                  >
                    Ask your question here
                  </a>
                </div>
              </div>
              <div className="col-md-5 col-xl-5">
                <div className="banner-9-img text-end">
                  <img
                    className="img-fluid"
                    src="/assets/images/help.png"
                    alt="banner-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
