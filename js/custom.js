function renderHeader() {
  document.querySelector(
    '#header'
  ).innerHTML = `<div class="header-body border-top-0">
                <div
                  class="header-top header-top-default header-top-borders border-bottom-0 bg-color-light"
                >
                  <div class="container h-100">
                    <div class="header-row h-100">
                      <div class="header-column justify-content-between">
                        <div class="header-row">
                          <nav class="header-nav-top w-100">
                            <ul
                              class="nav nav-pills justify-content-between w-100 h-100"
                            >
                              <li class="nav-item py-2 d-none d-xl-inline-flex">
                                <span
                                  class="header-top-phone py-2 d-flex align-items-center text-color-primary font-weight-semibold text-uppercase"
                                >
                                  <i class="icon-phone icons text-5 me-2"></i>
                                  <a
                                    class=""
                                    href="tel:+84948903878
                                  "
                                    >0948903878
                                  </a>
                                </span>
                                <span
                                  class="header-top-email px-0 font-weight-normal d-flex align-items-center"
                                  ><i class="far fa-envelope text-4"></i>
                                  <a
                                    class="text-color-default"
                                    href="mailto:duocnhienherbal@gmail.com"
                                    >duocnhienherbal@gmail.com</a
                                  ></span
                                >
                                <span
                                  class="header-top-opening-hours px-0 font-weight-normal d-flex align-items-center"
                                  ><i class="far fa-clock text-4"></i>T2 - CN 8:00am
                                  - 17:00pm</span
                                >
                              </li>
                              <li
                                class="nav-item nav-item-header-top-socials d-flex justify-content-between"
                              >
                                <span class="header-top-socials p-0 h-100">
                                  <ul class="d-flex align-items-center h-100 p-0">
                                    <li class="list-unstyled">
                                      <a href="#"
                                        ><i
                                          class="fab fa-instagram text-color-quaternary text-hover-primary"
                                        ></i
                                      ></a>
                                    </li>
                                    <li class="list-unstyled">
                                      <a href="#"
                                        ><i
                                          class="fab fa-facebook-f text-color-quaternary text-hover-primary"
                                        ></i
                                      ></a>
                                    </li>
                                    <li class="list-unstyled">
                                      <a href="#"
                                        ><i
                                          class="fab fa-x-twitter text-color-quaternary text-hover-primary"
                                        ></i
                                      ></a>
                                    </li>
                                  </ul>
                                </span>
                                <span
                                  class="header-top-button-make-as-appoitment d-inline-flex align-items-center justify-content-center h-100 p-0 align-top"
                                >
                                  <a
                                    href="demo-medical-2-contact-us.html"
                                    class="d-flex align-items-center justify-content-center h-100 w-100 btn-primary font-weight-normal text-decoration-none"
                                    >MAKE AN APPOINTMENT</a
                                  >
                                </span>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="header-container container bg-color-light">
                  <div class="header-row">
                    <div class="header-column header-column-logo">
                      <div class="header-row">
                        <div class="header-logo">
                          <a href="/">
                            <img
                              alt="Porto"
                              width="123"
                              height="48"
                              src="assets/img/custom/logo.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      class="header-column header-column-nav-menu justify-content-end"
                    >
                      <div class="header-row">
                        <div class="header-nav header-nav-links order-2 order-lg-1">
                          <div
                            class="header-nav-main header-nav-main-square header-nav-main-effect-1 header-nav-main-sub-effect-1"
                          >
                            <nav class="collapse">
                              <ul class="nav nav-pills" id="mainNav">
                                <li class="dropdown-secondary">
                                  <a
                                    class="nav-link active"
                                    href="demo-medical-2.html"
                                  >
                                    Trang Chủ
                                  </a>
                                </li>
                                <li class="dropdown-secondary">
                                  <a class="nav-link" target="_blank" href="/hop-tac-gia-cong.html"> Hợp Tác Gia Công </a>
                                </li>
                                <li class="dropdown-secondary">
                                  <a class="nav-link" target="_blank" href="/workshop-quy-trinh-san-xuat-san-pham.html"> Quy Trình Sản Xuất </a>
                                </li>
                                <li class="dropdown-secondary">
                                  <a class="nav-link" target="_blank" href="/huong-dan-mua-hang.html"> Hướng Dẫn Mua Hàng </a>
                                </li>

                                <!-- <li class="dropdown-secondary">
                                  <a
                                    class="nav-link"
                                    href="demo-medical-2-our-doctors.html"
                                  >
                                    Our Doctors
                                  </a>
                                </li>
                                <li class="dropdown dropdown-secondary">
                                  <a
                                    class="nav-link dropdown-toggle"
                                    class="dropdown-toggle"
                                    href="demo-medical-2-departments.html"
                                  >
                                    Departments
                                  </a>
                                  <ul class="dropdown-menu">
                                    <li>
                                      <a
                                        class="dropdown-item font-weight-normal"
                                        href="demo-medical-2-departments.html"
                                      >
                                        Overview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="dropdown-item font-weight-normal"
                                        href="demo-medical-2-departments-detail.html"
                                      >
                                        Cardiology
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="dropdown-item font-weight-normal"
                                        href="demo-medical-2-departments-detail.html"
                                      >
                                        Gastroenterology
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="dropdown-item font-weight-normal"
                                        href="demo-medical-2-departments-detail.html"
                                      >
                                        Pulmonology
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="dropdown-item font-weight-normal"
                                        href="demo-medical-2-departments-detail.html"
                                      >
                                        Dental Care
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="dropdown-item font-weight-normal"
                                        href="demo-medical-2-departments-detail.html"
                                      >
                                        Gynecology
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="dropdown-item font-weight-normal"
                                        href="demo-medical-2-departments-detail.html"
                                      >
                                        Hepatology
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="dropdown-item font-weight-normal"
                                        href="demo-medical-2-departments-detail.html"
                                      >
                                        Gastroenterology
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="dropdown-item font-weight-normal"
                                        href="demo-medical-2-departments-detail.html"
                                      >
                                        Pulmonology
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li class="dropdown-secondary">
                                  <a class="nav-link" href="demo-medical-2-blog.html">
                                    Blog
                                  </a>
                                </li>
                                <li class="dropdown-secondary">
                                  <a
                                    class="nav-link"
                                    href="demo-medical-2-contact-us.html"
                                  >
                                    Contact Us
                                  </a>
                                </li> -->
                              </ul>
                            </nav>
                          </div>
                          <button
                            class="btn header-btn-collapse-nav"
                            data-bs-toggle="collapse"
                            data-bs-target=".header-nav-main nav"
                          >
                            <i class="fas fa-bars"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="header-column header-column-search justify-content-center align-items-end"
                    >
                      <div class="header-nav-features">
                        <div
                          class="header-nav-feature header-nav-features-search d-inline-flex"
                        >
                          <a
                            href="#"
                            class="header-nav-features-toggle"
                            data-focus="headerSearch"
                          >
                            <i class="fas fa-search header-nav-top-icon"></i>
                          </a>
                          <div
                            class="header-nav-features-dropdown header-nav-features-dropdown-mobile-fixed border-radius-0"
                            id="headerTopSearchDropdown"
                          >
                            <form
                              role="search"
                              action="page-search-results.html"
                              method="get"
                            >
                              <div class="simple-search input-group">
                                <input
                                  class="form-control text-1"
                                  id="headerSearch"
                                  name="q"
                                  type="search"
                                  value=""
                                  placeholder="Search..."
                                />
                                <button class="btn" type="submit" aria-label="Search">
                                  <i class="fa fa-search header-nav-top-icon"></i>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
}

function renderFooter() {
  document.querySelector('#footer').innerHTML = `<div class="container">
          <div class="row py-5">
            <div
              class="col-sm-12 pb-4 pb-lg-0 col-lg-2 mb-2 d-flex align-items-center"
            >
              <img
              class="img-fluid"
                src="assets/img/custom/logo-removebg-preview.png"
                alt="Logo Footer"
              />
            </div>
            <div
              class="col-sm-6 col-lg-3 footer-column footer-column-get-in-touch"
            >
              <h4 class="mb-4 text-uppercase">Về chúng tôi</h4>
              <div class="info custom-info mb-4">
                <div class="custom-info-block custom-info-block-address">
                  <span
                    class="text-color-default font-weight-bold text-uppercase title-custom-info-block title-custom-info-block-address"
                    >Địa chỉ</span
                  >
                  <span
                    class="font-weight-normal text-color-light text-custom-info-block p-relative bottom-6 text-custom-info-block-address"
                    >Tầng 2 tòa nhà Khang Minh , 55 Sương Nguyệt Ánh , P.Bến
                    Thành , Q.1 , Thành Phố Hồ Chí Minh</span
                  >
                </div>
                <div class="custom-info-block custom-info-block-phone">
                  <span
                    class="text-color-default font-weight-bold text-uppercase title-custom-info-block title-custom-info-block-phone"
                    >Điện thoại</span
                  >
                  <span
                    class="font-weight-normal text-color-light text-custom-info-block p-relative bottom-6 text-custom-info-block-phone"
                    >+84
                    <a href="tel:+849480903878" class="text-color-light"
                      >09480903878</a
                    ></span
                  >
                </div>
                <div class="custom-info-block custom-info-block-email">
                  <span
                    class="text-color-default font-weight-bold text-uppercase title-custom-info-block title-custom-info-block-email"
                    >Email</span
                  >
                  <span
                    class="font-weight-normal text-color-light text-custom-info-block p-relative bottom-6 text-custom-info-block-email"
                    ><a
                      class="text-color-light"
                      href="mailto:duocnhienherbal@gmail.com"
                      >duocnhienherbal@gmail.com</a
                    ></span
                  >
                </div>
                <div class="custom-info-block custom-info-block-working-days">
                  <span
                    class="text-color-default font-weight-bold text-uppercase title-custom-info-block title-custom-info-block-working-days"
                    >Thời gian làm việc</span
                  >
                  <span
                    class="font-weight-normal text-color-light text-custom-info-block text-custom-info-block-working-days"
                    >T2 - CN / 8:00AM - 17:00PM</span
                  >
                </div>
              </div>
              <ul class="social-icons">
                <li class="social-icons-instagram">
                  <a
                    href="http://www.instagram.com/"
                    target="_blank"
                    title="Instagram"
                  >
                    <i class="fab fa-instagram text-4 font-weight-semibold"></i>
                  </a>
                </li>
                <li class="social-icons-twitter">
                  <a
                    href="http://www.twitter.com/"
                    target="_blank"
                    title="Twitter"
                  >
                    <i class="fab fa-x-twitter text-4 font-weight-semibold"></i>
                  </a>
                </li>
                <li class="social-icons-facebook">
                  <a
                    href="http://www.facebook.com/"
                    target="_blank"
                    title="Facebook"
                  >
                    <i
                      class="fab fa-facebook-f text-4 font-weight-semibold"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 pt-5 pt-md-0 col-lg-4">
              <div class="nav-footer-container">
                <h4 class="mb-4 text-uppercase">Trang - Bài Viết</h4>
                <div class="nav-footer d-flex">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="/huong-dan-mua-hang.html">Hướng dẫn mua hàng</a>
                    </li>
                    <li>
                      <a href="/hop-tac-gia-cong.html">Hợp tác gia công</a>
                    </li>
                    <li>
                      <a href="/workshop-quy-trinh-san-xuat-san-pham.html">Quy trình sản xuất</a>
                    </li>
                  </ul>
                  <!-- 
                  <ul class="ps-4">
                    <li>
                      <a href="#">Hepatology</a>
                    </li>
                    <li>
                      <a href="#">Gastroenterology</a>
                    </li>
                    <li>
                      <a href="#">Pulmonology</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                  -->
                </div>
              </div>
            </div>
            <div
              class="col-sm-12 pt-4 pt-lg-0 col-lg-3 text-start ms-lg-auto footer-column footer-column-opening-hours"
            >
              <h4 class="mb-4 text-uppercase">Giờ làm việc</h4>
              <div class="info custom-info pt-0">
                <span>T2-CN</span>
                <span>8 am to 17:00 pm</span>
              </div>
              <!--
              <div class="info custom-info">
                <span>Saturday</span>
                <span>9:30 am to 1:00 pm</span>
              </div>
              <div class="info custom-info pb-0 border-bottom-0">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
              -->
            </div>
          </div>
        </div>
        <div class="footer-copyright pt-3 pb-3 container bg-color-quaternary">
          <div class="row">
            <div class="col-lg-12 text-center m-0 pb-4">
              <p class="text-color-default">Copyright © 2024 DƯỢC NHIÊN</p>
            </div>
          </div>
        </div>`;
}

async function fetchReviews() {
  try {
    const { data } = await axios.get(
      'https://6453ee11e9ac46cedf33925e.mockapi.io/api/v1/duocnhien-reviews'
    );

    const string = data.reduce((prev, curr) => {
      return (prev += `
        <div
                      class="text-center d-flex flex-wrap justify-content-center p-relative"
                    >
                      <span class="review-quotes text-start position-absolute"
                        ><i class="fas fa-quote-left text-color-primary"></i
                      ></span>
                      <p
                        class="lead lead-2 mb-0 text-color-default font-weight-normal"
                      >
                        ${curr.review}
                      </p>
                      <div class="">
                        <h4
                          class="review-signature text-capitalize text-color-quaternary mt-3 mb-0"
                        >
                        ${curr.name}
                        </h4>
                        <p>${curr.phone}</p>
                      </div>
                    </div>`);
    }, '');

    document.querySelector('.luca-review').innerHTML = string;
  } catch (error) {
    console.log(error);
  }
}
fetchReviews();
// window.onload = function () {};
renderHeader();
renderFooter();
