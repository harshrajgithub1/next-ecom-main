import Link from "next/link";
import React from "react";

const Faqs = () => {
  return (
    <div>
      <section
        className="banner"
        // style="background-image:url(assets/img/banner1.jpg)"

        style={{
        backgroundImage: 'url(/assets/img/banner1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '540px', // Set your desired height
      }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-caption">
                <h3>Faqs</h3>
                <ul className="breadcrumb">
                  <li>
                    <Link href="/">Start</Link>
                  </li>
                  <li>Faqs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="faqs-2"
        className="gr--whitesmoke pb-30 inner-page-hero faqs-section division"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-10">
              <div className="inner-page-title">
                <h2 className="s-52 w-700">
                  Questions & Answers <span>FAQ's</span>
                </h2>
                <p className="p-lg">Some common questions we get about Trisfusa</p>
              </div>
              <div className="accordion-wrapper">
                <ul className="accordion">
                  <li className="accordion-item is-active">
                    <div className="accordion-thumb">
                      <h4 className="s-28 w-700">Getting Started</h4>
                    </div>
                    <div className="accordion-panel">
                      <div className="accordion-panel-item mb-35">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>1.</span> What is Trisfusa and how does it
                            work?
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas magna ipsum vitae purus congue
                            efficitur and ipsum primis in cubilia laoreet augue
                            egestas luctus donec and curabitur dapibus{" "}
                          </p>
                        </div>
                      </div>
                      <div className="accordion-panel-item mb-35">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>2.</span> What's inside the package?
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas and magna ipsum vitae purus and
                            efficitur ipsum primis in cubilia laoreet tempor
                            gravida congue laoreet turpis neque auctor{" "}
                          </p>
                          <p>
                            Sapien egestas, congue gestas posuere cubilia congue
                            ipsum mauris undo lectus laoreet and gestas neque
                            vitae auctor eros dolor luctus placerat a magna
                            cursus congue magna impedit ligula congue maecenas{" "}
                          </p>
                        </div>
                      </div>
                      <div className="accordion-panel-item mb-35">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>3.</span> Which languages does Trisfusa
                            support?
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <ul className="simple-list">
                            <li className="list-item">
                              <p>
                                Curabitur ac dapibus libero quisque eu congue
                                tristique neque. Phasellus blandit tristique
                                justo aliquam quisque aliquam vitae and molestie
                                sapien nunc justo, aliquet non molestie purus
                                tempor{" "}
                              </p>
                            </li>
                            <li className="list-item">
                              <p>
                                Sagittis congue augue egestas volutpat egestas
                                magna suscipit egestas magna ipsum undo purus
                                vitae efficitur ipsum primis in cubilia laoreet
                                augue donec egestas luctus curabitur dapibus
                                libero{" "}
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="accordion-panel-item">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>4.</span> Automate testing with API
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            An augue cubilia laoreet and magna suscipit egestas
                            magna ipsum purus ipsum primis and augue ultrice
                            ligula egestas suscipit lectus gestas integer congue
                            a lectus porta phasellus neque blandit tristique{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="accordion-item">
                    <div className="accordion-thumb">
                      <h4 className="s-28 w-700">Manage your account</h4>
                    </div>
                    <div className="accordion-panel">
                      <div className="accordion-panel-item mb-35">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>1.</span> Sign up and manage your account
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
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
                      </div>
                      <div className="accordion-panel-item mb-35">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>2.</span> Manage account settings
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas magna ipsum vitae purus congue and
                            efficitur ipsum primis in cubilia laoreet augue
                            egestas luctus donec and curabitur dapibus{" "}
                          </p>
                        </div>
                      </div>
                      <div className="accordion-panel-item mb-35">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>3.</span> Change language or location settings
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            Sapien egestas, congue gestas posuere cubilia congue
                            ipsum mauris lectus laoreet gestas neque pulvinar
                            vitae auctor eros dolor luctus placerat a magna
                            cursus congue magna nihil mpedit ligula congue.
                            Maecenas gravida porttitor nunc, quis vehicula magna
                            luctus tempor. Quisque vel laoreet turpis. Viverra
                            augue augue eget, dictum tempor diam. Sed pulvinar a
                            consectetur nibh, imperdiet varius viverra{" "}
                          </p>
                        </div>
                      </div>
                      <div className="accordion-panel-item mb-35">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>4.</span> Troubleshoot account issues
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            An augue cubilia laoreet and magna suscipit egestas
                            magna ipsum purus ipsum primis and augue ultrice
                            ligula egestas suscipit lectus gestas integer congue
                            a lectus porta phasellus neque blandit tristique{" "}
                          </p>
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas and magna ipsum vitae{" "}
                          </p>
                          <p>
                            Sagittis congue augue egestas volutpat egestas and
                            magna suscipit egestas magna ipsum vitae efficitur
                            purus congue ipsum primis in cubilia laoreet augue
                            egestas luctus donec and curabitur dapibus{" "}
                          </p>
                        </div>
                      </div>
                      <div className="accordion-panel-item">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>5.</span> Manage accessibility settings
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            Sapien egestas, congue gestas posuere cubilia congue
                            ipsum mauris lectus laoreet at gestas neque cubilia
                            vitae auctor eros dolor luctus placerat a magna
                            cursus congue magna nihil mpedit ligula congue.
                            Maecenas gravida porttitor nunc, quis vehicula magna
                            luctus tempor. Quisque vel laoreet turpis augue{" "}
                          </p>
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas and magna ipsum and vitae purus
                            efficitur ipsum primis in cubilia laoreet tempor
                            gravida sapien cursus congue magna purus quaerat{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="accordion-item">
                    <div className="accordion-thumb">
                      <h4 className="s-28 w-700">Purchase and License</h4>
                    </div>
                    <div className="accordion-panel">
                      <div className="accordion-panel-item mb-35">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>1.</span> How much does Trisfusa cost?
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            An augue cubilia laoreet and magna suscipit egestas
                            magna ipsum purus ipsum primis and augue ultrice
                            ligula egestas suscipit lectus gestas integer congue
                            a lectus porta phasellus neque blandit tristique{" "}
                          </p>
                        </div>
                      </div>
                      <div className="accordion-panel-item mb-35">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>2.</span> Do you offer discounts for annual
                            plans?
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas and magna ipsum vitae{" "}
                          </p>
                          <p>
                            Sagittis congue augue egestas volutpat egestas and
                            magna suscipit egestas magna ipsum vitae purus
                            congue efficitur ipsum primis in cubilia laoreet
                            augue egestas luctus donec and curabitur dapibus{" "}
                          </p>
                        </div>
                      </div>
                      <div className="accordion-panel-item">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>3.</span> I didn't receive the license key
                            after purchased
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <ul className="simple-list">
                            <li className="list-item">
                              <p>
                                Curabitur ac dapibus libero. Quisque eu congue
                                tristique neque phasellus blandit tristique
                                justo aliquam. Aliquam vitae undo molestie nunc.
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
                      </div>
                      <div className="accordion-panel-item">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>4.</span> I can't activate Trisfusa
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            Sapien egestas, congue gestas posuere cubilia congue
                            ipsum mauris lectus laoreet gestas neque pulvinar
                            vitae auctor eros dolor luctus placerat a magna
                            cursus congue magna nihil mpedit ligula congue.
                            Maecenas gravida porttitor nunc, quis vehicula magna
                            luctus tempor. Quisque vel laoreet turpis. Viverra
                            augue augue eget, dictum tempor diam. Sed pulvinar a
                            consectetur nibh, imperdiet varius viverra{" "}
                          </p>
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas and magna ipsum vitae purus and
                            efficitur ipsum primis in cubilia laoreet tempor
                            gravida{" "}
                          </p>
                        </div>
                      </div>
                      <div className="accordion-panel-item">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>5.</span> How to request a refund?
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
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
                                tristique justo undo aliquam aliquam vitae
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
                      </div>
                    </div>
                  </li>
                  <li className="accordion-item">
                    <div className="accordion-thumb">
                      <h4 className="s-28 w-700">Policy, Safety & Copyright</h4>
                    </div>
                    <div className="accordion-panel">
                      <div className="accordion-panel-item mb-35">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>1.</span> Copyright and rights management
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            Sapien egestas, congue gestas posuere cubilia congue
                            ipsum mauris lectus laoreet gestas neque pulvinar
                            vitae auctor eros dolor luctus placerat a magna
                            cursus congue magna nihil mpedit ligula congue.
                            Maecenas gravida porttitor nunc, quis vehicula magna
                            luctus tempor. Quisque vel laoreet turpis. Viverra
                            augue augue eget, dictum tempor diam. Sed pulvinar a
                            consectetur nibh, imperdiet varius viverra{" "}
                          </p>
                        </div>
                      </div>
                      <div className="accordion-panel-item mb-35">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>2.</span> Manage privacy settings
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas magna ipsum vitae purus congue
                            efficitur ipsum and primis undo cubilia a laoreet
                            augue egestas luctus donec and curabitur dapibus{" "}
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
                      </div>
                      <div className="accordion-panel-item mb-35">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>3.</span> Change your subscription privacy
                            settings
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            Sapien egestas, congue gestas posuere cubilia congue
                            ipsum mauris lectus laoreet and gestas neque vitae
                            auctor eros dolor luctus placerat a magna cursus
                            congue magna nihil mpedit ligula congue maecenas
                            undo gravida porttitor nunc, quis vehicula magna
                            luctus tempor. Quisque vel laoreet turpis augue{" "}
                          </p>
                          <ul className="simple-list">
                            <li className="list-item">
                              <p>
                                Congue tristique neque phasellus blandit
                                tristique justo undo aliquam aliquam vitae
                                molestie quisque and sapien justo, aliquet non
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
                      </div>
                      <div className="accordion-panel-item">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>4.</span> Protecting your identity
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            Sapien egestas, congue gestas posuere cubilia congue
                            ipsum mauris lectus laoreet gestas neque pulvinar
                            vitae auctor eros dolor luctus placerat a magna
                            cursus congue magna nihil mpedit ligula congue.
                            Maecenas gravida porttitor nunc, quis vehicula magna
                            luctus tempor. Quisque vel laoreet turpis. Viverra
                            augue augue eget, dictum tempor diam. Sed pulvinar a
                            consectetur nibh, imperdiet varius viverra{" "}
                          </p>
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas and magna ipsum vitae purus and
                            efficitur ipsum primis in cubilia laoreet tempor
                            gravida{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="accordion-item acc-last-item">
                    <div className="accordion-thumb">
                      <h4 className="s-28 w-700">Other Questions</h4>
                    </div>
                    <div className="accordion-panel">
                      <div className="accordion-panel-item mb-35">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>1.</span> How do I get the error log?
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas and magna ipsum vitae{" "}
                          </p>
                          <p>
                            Sagittis congue augue egestas volutpat egestas and
                            magna suscipit egestas and magna ipsum vitae purus
                            congue efficitur ipsum primis in cubilia laoreet
                            augue egestas luctus donec and curabitur dapibus{" "}
                          </p>
                        </div>
                      </div>
                      <div className="accordion-panel-item mb-35">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>2.</span> I forgot my folder password, what
                            should I do?
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas magna ipsum vitae purus congue
                            efficitur ipsum and primis in cubilia laoreet augue
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
                      </div>
                      <div className="accordion-panel-item mb-35">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>3.</span> Limitations of folder password
                            protection
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            Sapien egestas, congue gestas posuere cubilia congue
                            ipsum mauris lectus laoreet gestas neque pulvinar
                            vitae auctor eros dolor luctus placerat a magna
                            cursus congue magna nihil mpedit ligula congue.
                            Maecenas gravida porttitor nunc, quis vehicula magna
                            luctus tempor. Quisque vel laoreet turpis. Viverra
                            augue augue eget, dictum tempor diam. Sed pulvinar a
                            consectetur nibh, imperdiet varius viverra{" "}
                          </p>
                        </div>
                      </div>
                      <div className="accordion-panel-item mb-35">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>4.</span> Import existing library
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            Sapien egestas, congue gestas posuere cubilia congue
                            an ipsum mauris lectus laoreet gestas neque vitae
                            auctor eros dolor luctus placerat a magna cursus
                            congue magna nihil mpedit ligula congue gravida
                            tempor porttitor nunc, quis vehicula magna luctus
                            tempor. Quisque vel laoreet turpis augue{" "}
                          </p>
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas and magna ipsum vitae purus and
                            efficitur ipsum primis in cubilia laoreet tempor
                            gravida{" "}
                          </p>
                        </div>
                      </div>
                      <div className="accordion-panel-item">
                        <div className="faqs-2-question">
                          <h5 className="s-22 w-700">
                            <span>5.</span> I lost my license. Can you send it
                            to me?
                          </h5>
                        </div>
                        <div className="faqs-2-answer color--grey">
                          <p>
                            An augue cubilia laoreet and magna suscipit egestas
                            magna ipsum purus ipsum primis augue ultrice ligula
                            egestas suscipit lectus gestas integer congue a
                            lectus porta phasellus neque blandit tristique{" "}
                          </p>
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas and magna ipsum vitae{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="more-questions">
                <div className="more-questions-txt bg--white-400 r-100">
                  <p className="p-lg">
                    Have any questions?{" "}
                    <a href="contacts.php" className="color--theme">
                      Get in Touch
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
