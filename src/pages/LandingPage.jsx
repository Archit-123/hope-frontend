import {
  FiArrowRight,
  FiHeart,
  FiLock,
  FiMail,
  FiPenTool,
  FiShield,
  FiUser,
  FiPlay,
  FiCheck,
  FiStar,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { useState } from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <div className="hope-page">
      {/* =========================
          NAVBAR
      ========================== */}

      <header className="hope-navbar">
        <div className="hope-container navbar-inner">
          <a
            href="#hero"
            className="hope-logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            <span className="logo-icon">
              <FiHeart />
            </span>

            <span>HOPE</span>
          </a>

          <nav className={`hope-nav ${menuOpen ? "open" : ""}`}>
            <button onClick={() => scrollToSection("how-it-works")}>
              How It Works
            </button>

            <button onClick={() => scrollToSection("features")}>
              Features
            </button>

            <button onClick={() => scrollToSection("faq")}>FAQs</button>

            <button onClick={() => scrollToSection("about")}>About</button>

            <div className="mobile-nav-actions">
              <Link to="/login" className="nav-login">
                Login
              </Link>

              <Link to="/login" className="nav-get-started">
                Get Started
              </Link>
            </div>
          </nav>

          <div className="navbar-actions">
            <Link to="/login" className="nav-login">
              Login
            </Link>

            <Link to="/login" className="nav-get-started">
              Get Started
            </Link>
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* =========================
          HERO
      ========================== */}

      <main>
        <section id="hero" className="hope-hero">
          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>

          <div className="hope-container hero-grid">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <span className="eyebrow-dot"></span>
                Your words. Your hope.
              </div>

              <h1>
                Some words are too important to leave <span>unsaid.</span>
              </h1>

              <p className="hero-description">
                Write a private message for someone you love. Hope keeps it safe
                until the day they need to hear it.
              </p>

              <div className="hero-buttons">
                <Link to="/login" className="primary-button">
                  <FiPenTool />
                  Create Your Hope
                  <FiArrowRight />
                </Link>

                <button
                  className="secondary-button"
                  onClick={() => scrollToSection("how-it-works")}
                >
                  <FiPlay />
                  How It Works
                </button>
              </div>

              <div className="hero-trust">
                <FiShield />

                <span>Your messages are private and protected</span>
              </div>
            </div>

            {/* HERO ENVELOPE */}

            <div className="hero-visual">
              <div className="visual-stars">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="envelope-scene">
                <div className="envelope-glow"></div>

                <div className="letter">
                  <p>For you,</p>

                  <p>
                    when the time
                    <br />
                    is right.
                  </p>

                  <FiHeart className="letter-heart" />
                </div>

                <div className="envelope">
                  <div className="envelope-flap"></div>

                  <div className="envelope-front"></div>

                  <div className="envelope-heart">
                    <FiHeart />
                  </div>
                </div>

                <div className="pen"></div>

                <div className="candle">
                  <div className="flame"></div>

                  <div className="candle-body"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            EMOTIONAL INTRO
        ========================== */}

        <section id="about" className="emotional-section">
          <div className="hope-container">
            <div className="emotional-card">
              <div className="emotional-icon">
                <FiHeart />
              </div>

              <div className="emotional-text">
                <h2>
                  What if you could leave them
                  <br />
                  one more message?
                </h2>

                <p>
                  Sometimes there are things we wish we could say one last time.
                </p>
              </div>

              <div className="message-types">
                <div>
                  <FiStar />
                  <span>A memory</span>
                </div>

                <div>
                  <FiHeart />
                  <span>An apology</span>
                </div>

                <div>
                  <FiCheck />
                  <span>A thank you</span>
                </div>

                <div>
                  <FiStar />
                  <span>A promise</span>
                </div>

                <div>
                  <FiHeart />
                  <span>"I love you"</span>
                </div>
              </div>

              <div className="emotional-bottom">
                <span>Hope</span> gives you a place to leave those words.
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            HOW IT WORKS
        ========================== */}

        <section id="how-it-works" className="how-section">
          <div className="hope-container">
            <div className="section-heading">
              <span className="section-label">SIMPLE & PRIVATE</span>

              <h2>
                How <span>Hope</span> Works
              </h2>

              <p>Leave your words behind in just a few simple steps.</p>
            </div>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">01</div>

                <div className="step-icon">
                  <FiPenTool />
                </div>

                <h3>Write</h3>

                <p>Write your private message for someone you love.</p>
              </div>

              <div className="step-card">
                <div className="step-number">02</div>

                <div className="step-icon">
                  <FiLock />
                </div>

                <h3>Protect</h3>

                <p>
                  Tell Hope who the message is for. Your message stays hidden.
                </p>
              </div>

              <div className="step-card">
                <div className="step-number">03</div>

                <div className="step-icon">
                  <FiUser />
                </div>

                <h3>Find</h3>

                <p>
                  When the time comes, your loved one can discover the message.
                </p>
              </div>

              <div className="step-card">
                <div className="step-number">04</div>

                <div className="step-icon">
                  <FiMail />
                </div>

                <h3>Unlock</h3>

                <p>
                  They verify through the registered email and receive the
                  message.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            FEATURES / PRIVACY
        ========================== */}

        <section id="features" className="privacy-section">
          <div className="hope-container">
            <div className="privacy-card">
              <div className="privacy-visual">
                <div className="shield-ring">
                  <div className="shield-icon">
                    <FiShield />
                  </div>
                </div>
              </div>

              <div className="privacy-content">
                <span className="section-label">PRIVATE BY DESIGN</span>

                <h2>
                  Your words.
                  <br />
                  <span>Your privacy.</span>
                </h2>

                <p>
                  Your messages aren't meant to be seen by anyone before they're
                  meant to be.
                </p>

                <p>
                  Hope keeps your messages protected until they're properly
                  verified.
                </p>

                <div className="privacy-features">
                  <div className="privacy-feature">
                    <div className="small-feature-icon">
                      <FiLock />
                    </div>

                    <div>
                      <strong>Private messages</strong>

                      <span>
                        Only the intended person can access your message.
                      </span>
                    </div>
                  </div>

                  <div className="privacy-feature">
                    <div className="small-feature-icon">
                      <FiShield />
                    </div>

                    <div>
                      <strong>Protected</strong>

                      <span>
                        Your messages remain hidden until verification.
                      </span>
                    </div>
                  </div>

                  <div className="privacy-feature">
                    <div className="small-feature-icon">
                      <FiUser />
                    </div>

                    <div>
                      <strong>You're in control</strong>

                      <span>You decide who your message is meant for.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            FAQ
        ========================== */}

        <section id="faq" className="faq-section">
          <div className="hope-container">
            <div className="section-heading">
              <span className="section-label">QUESTIONS</span>

              <h2>
                Frequently Asked <span>Questions</span>
              </h2>
            </div>

            <div className="faq-grid">
              <div className="faq-item">
                <h3>What is Hope?</h3>

                <p>
                  Hope gives you a private place to leave meaningful messages
                  for the people you love.
                </p>
              </div>

              <div className="faq-item">
                <h3>Who can see my message?</h3>

                <p>
                  Your message remains hidden and is intended only for the
                  person you choose.
                </p>
              </div>

              <div className="faq-item">
                <h3>How does someone receive my message?</h3>

                <p>
                  The person you selected can discover the message and complete
                  the required verification to access it.
                </p>
              </div>

              <div className="faq-item">
                <h3>Can I leave more than one message?</h3>

                <p>
                  Yes. You can create messages for different people and
                  different moments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            FINAL CTA
        ========================== */}

        <section className="final-cta-section">
          <div className="hope-container">
            <div className="final-cta">
              <div className="cta-stars"></div>

              <div className="cta-content">
                <span className="section-label">LEAVE SOMETHING BEHIND</span>

                <h2>
                  Don't leave the important
                  <br />
                  things <span>unsaid.</span>
                </h2>

                <p>Create your Hope today.</p>

                <Link to="/login" className="primary-button">
                  Get Started
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================== */}

      <footer className="hope-footer">
        <div className="hope-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="hope-logo">
                <span className="logo-icon">
                  <FiHeart />
                </span>

                <span>HOPE</span>
              </div>

              <p>Your last hope of getting the words you couldn't say.</p>
            </div>

            <div className="footer-column">
              <h4>Product</h4>

              <button onClick={() => scrollToSection("how-it-works")}>
                How It Works
              </button>

              <button onClick={() => scrollToSection("features")}>
                Features
              </button>

              <button onClick={() => scrollToSection("faq")}>FAQs</button>
            </div>

            <div className="footer-column">
              <h4>Company</h4>

              <button onClick={() => scrollToSection("about")}>About</button>

              <Link to="/privacy">Privacy Policy</Link>

              <Link to="/terms">Terms of Service</Link>
            </div>

            <div className="footer-column">
              <h4>Support</h4>

              <Link to="/help">Help Center</Link>

              <Link to="/contact">Contact Us</Link>
            </div>

            <div className="footer-column">
              <h4>Get Started</h4>

              <Link to="/login">Create Your Hope</Link>

              <Link to="/login">Login</Link>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Hope. All rights reserved.</span>

            <span>Made with ❤️</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
