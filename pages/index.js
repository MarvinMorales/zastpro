import React from 'react';
import Head from 'next/head';
import Script from 'next/Script';
import { Modal1 } from '../components/modal1';

export default function IndexHome() {
    const [modal, setModal] = React.useState(false);
    return (
        <React.Fragment>
            { modal && <Modal1/> }
          <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>ZastPro | improve your marketing campaing</title>
            <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600" rel="stylesheet"/>
            <link rel="stylesheet" href="dist/css/style.css" />
          </Head>
          <Script src="https://kit.fontawesome.com/26afabd640.js" crossorigin="anonymous"></Script>
          <React.Fragment>
              <body className="is-boxed has-animations">
          <div className="body-wrap">
            <header className="site-header">
                <div className="container">
                <div className="site-header-inner">
                    <div className="brand header-brand">
                    <h1 className="m-0">
                        <a href="#">
                        <img
                            style={{width:180}}
                            className="header-logo-image"
                            src="dist/images/logo.png"
                            alt="Logo"
                        />
                        </a>
                    </h1>
                    </div>
                </div>
                </div>
            </header>
            <main>
                <section className="hero">
                <div className="container">
                    <div className="hero-inner">
                    <div className="hero-copy">
                        <h1 className="hero-title mt-0">Landing template for startups</h1>
                        <p className="hero-paragraph">
                        Our landing page template works on all devices, so you only have
                        to set it up once, and get beautiful results forever.
                        </p>
                        <div className="hero-cta" onClick={() => setModal(!modal)}>
                        <a className="button button-primary" style={{background:'linear-gradient(to bottom, #720FF2, #4C00C4)'}}>
                            Pre order now
                        </a>
                        <a className="button" href="#">
                            Get in touch
                        </a>
                        </div>
                    </div>
                    <div className="hero-figure anime-element">
                        <svg
                        className="placeholder"
                        width={528}
                        height={396}
                        viewBox="0 0 528 396"
                        >
                        <rect width={528} height={396} style={{ fill: "transparent" }} />
                        </svg>
                        <div
                        className="hero-figure-box hero-figure-box-01"
                        data-rotation="45deg"
                        />
                        <div
                        className="hero-figure-box hero-figure-box-02"
                        data-rotation="-45deg"
                        />
                        <div
                        className="hero-figure-box hero-figure-box-03"
                        data-rotation="0deg"
                        />
                        <div
                        className="hero-figure-box hero-figure-box-04"
                        data-rotation="-135deg"
                        />
                        <div className="hero-figure-box hero-figure-box-05" />
                        <div className="hero-figure-box hero-figure-box-06" />
                        <div className="hero-figure-box hero-figure-box-07" />
                        <div
                        className="hero-figure-box hero-figure-box-08"
                        data-rotation="-22deg"
                        />
                        <div
                        className="hero-figure-box hero-figure-box-09"
                        data-rotation="-52deg"
                        />
                        <div
                        className="hero-figure-box hero-figure-box-10"
                        data-rotation="-50deg"
                        />
                    </div>
                    </div>
                </div>
                </section>
                <section className="features section">
                <div className="container">
                    <div className="features-inner section-inner has-bottom-divider">
                    <div className="features-wrap">
                        <div className="feature text-center is-revealing">
                        <div className="feature-inner">
                            <div className="feature-icon">
                            <img src="dist/images/feature-icon-01.svg" alt="Feature 01" />
                            </div>
                            <h4 className="feature-title mt-24">Be Productive</h4>
                            <p className="text-sm mb-0">
                            Fermentum posuere urna nec tincidunt praesent semper feugiat
                            nibh. A arcu cursus vitae congue mauris. Nam at lectus urna
                            duis convallis. Mauris rhoncus aenean vel elit scelerisque
                            mauris.
                            </p>
                        </div>
                        </div>
                        <div className="feature text-center is-revealing">
                        <div className="feature-inner">
                            <div className="feature-icon">
                            <img src="dist/images/feature-icon-02.svg" alt="Feature 02" />
                            </div>
                            <h4 className="feature-title mt-24">Be Productive</h4>
                            <p className="text-sm mb-0">
                            Fermentum posuere urna nec tincidunt praesent semper feugiat
                            nibh. A arcu cursus vitae congue mauris. Nam at lectus urna
                            duis convallis. Mauris rhoncus aenean vel elit scelerisque
                            mauris.
                            </p>
                        </div>
                        </div>
                        <div className="feature text-center is-revealing">
                        <div className="feature-inner">
                            <div className="feature-icon">
                            <img src="dist/images/feature-icon-03.svg" alt="Feature 03" />
                            </div>
                            <h4 className="feature-title mt-24">Be Productive</h4>
                            <p className="text-sm mb-0">
                            Fermentum posuere urna nec tincidunt praesent semper feugiat
                            nibh. A arcu cursus vitae congue mauris. Nam at lectus urna
                            duis convallis. Mauris rhoncus aenean vel elit scelerisque
                            mauris.
                            </p>
                        </div>
                        </div>
                        <div className="feature text-center is-revealing">
                        <div className="feature-inner">
                            <div className="feature-icon">
                            <img src="dist/images/feature-icon-04.svg" alt="Feature 04" />
                            </div>
                            <h4 className="feature-title mt-24">Be Productive</h4>
                            <p className="text-sm mb-0">
                            Fermentum posuere urna nec tincidunt praesent semper feugiat
                            nibh. A arcu cursus vitae congue mauris. Nam at lectus urna
                            duis convallis. Mauris rhoncus aenean vel elit scelerisque
                            mauris.
                            </p>
                        </div>
                        </div>
                        <div className="feature text-center is-revealing">
                        <div className="feature-inner">
                            <div className="feature-icon">
                            <img src="dist/images/feature-icon-05.svg" alt="Feature 05" />
                            </div>
                            <h4 className="feature-title mt-24">Be Productive</h4>
                            <p className="text-sm mb-0">
                            Fermentum posuere urna nec tincidunt praesent semper feugiat
                            nibh. A arcu cursus vitae congue mauris. Nam at lectus urna
                            duis convallis. Mauris rhoncus aenean vel elit scelerisque
                            mauris.
                            </p>
                        </div>
                        </div>
                        <div className="feature text-center is-revealing">
                        <div className="feature-inner">
                            <div className="feature-icon">
                            <img src="dist/images/feature-icon-06.svg" alt="Feature 06" />
                            </div>
                            <h4 className="feature-title mt-24">Be Productive</h4>
                            <p className="text-sm mb-0">
                            Fermentum posuere urna nec tincidunt praesent semper feugiat
                            nibh. A arcu cursus vitae congue mauris. Nam at lectus urna
                            duis convallis. Mauris rhoncus aenean vel elit scelerisque
                            mauris.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section className="pricing section">
                <div className="container-sm">
                    <div className="pricing-inner section-inner">
                    <div className="pricing-header text-center">
                        <h2 className="section-title mt-0">Unlimited for all</h2>
                        <p className="section-paragraph mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad
                        quis nostrud.
                        </p>
                    </div>
                    
                    <div className="pricing-tables-wrap">
                        <div className="pricing-table">
                        <div className="pricing-table-inner is-revealing">
                            <div className="pricing-table-main">
                            <div className="pricing-table-header pb-24">
                                <div className="pricing-table-price">
                                <span className="pricing-table-price-currency h2">$</span>
                                <span className="pricing-table-price-amount h1">699</span>
                                <span className="text-xs">/month</span>
                                </div>
                            </div>
                            <div className="pricing-table-features-title text-xs pt-24 pb-24">
                                What you will get
                            </div>
                            <ul className="pricing-table-features list-reset text-xs">
                                <li>
                                <span>Lorem ipsum dolor sit nisi</span>
                                </li>
                                <li>
                                <span>Lorem ipsum dolor sit nisi</span>
                                </li>
                                <li>
                                <span>Lorem ipsum dolor sit nisi</span>
                                </li>
                                <li>
                                <span>Lorem ipsum dolor sit nisi</span>
                                </li>
                            </ul>
                            </div>
                            <div className="pricing-table-cta mb-8" >
                            <a
                                className="button button-primary button-shadow button-block"
                                href="#" style={{background:'linear-gradient(to bottom, #720FF2, #4C00C4)'}}
                            >
                                Pre order now
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
                </div>
                </section>
                <section className="cta section">
                <div className="container">
                    <div className="cta-inner section-inner">
                    <h3 className="section-title mt-0">Still not convinced on buying?</h3>
                    <div className="cta-cta">
                        <a className="button button-primary button-wide-mobile" style={{background:'linear-gradient(to bottom, #720FF2, #4C00C4)'}} href="#">
                        Get in touch
                        </a>
                    </div>
                    </div>
                </div>
                </section>
            </main>
            <footer className="site-footer">
                <div className="container">
                <div className="site-footer-inner">
                    <div className="brand footer-brand">
                    <a href="#">
                        <img
                        className="header-logo-image"
                        src="dist/images/logo.png" style={{width:120}}
                        alt="Logo"
                        />
                    </a>
                    </div>
                    <ul className="footer-links list-reset">
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">FAQ&apos;s</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                    </ul>
                    <ul className="footer-social-links list-reset">
                    <li>
                        <a href="#">
                        <span className="screen-reader-text">Facebook</span>
                        <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                            fill="#720FF2"
                            />
                        </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span className="screen-reader-text">Twitter</span>
                        <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                            fill="#720FF2"
                            />
                        </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span className="screen-reader-text">Google</span>
                        <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                            fill="#720FF2"
                            />
                        </svg>
                        </a>
                    </li>
                    </ul>
                    <div className="footer-copyright">
                    ?? 2019 Solid, all rights reserved
                    </div>
                </div>
                </div>
            </footer>
            </div>
            <Script src="dist/js/main.min.js"></Script>
            <Script async src='https://www.googletagmanager.com/gtag/js?id=UA-125021779-1'></Script>
            </body>
            <Script>
                {function() {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());gtag('config', 'UA-125021779-1', { 'anonymize_ip': true });
                }}
            </Script>
          </React.Fragment>
        </React.Fragment>
    );
}