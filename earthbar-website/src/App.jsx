import { useEffect, useRef, useState } from 'react'

const PACKAGES = [
  {
    id: 'essential',
    name: 'Essential',
    subtitle: 'Cellular Assessment',
    price: '$750',
    duration: '60 minutes',
    blurb:
      'Clear answers and a first action plan for people ready to understand what their body is asking for.',
    features: [
      'Live Blood Analysis',
      'Dry Blood Analysis',
      'Iridology Scan',
      'Physical Wellness Assessment',
      'Health History Review',
      'Nutrition & Lifestyle Consultation',
      'Personalized Wellness Action Plan',
    ],
  },
  {
    id: 'signature',
    name: 'Signature',
    subtitle: 'Most popular',
    price: '$997',
    duration: '75 minutes',
    blurb:
      'A deeper diagnostic look with bioresonance, a custom herbal formula, and a follow-up to keep you on track.',
    features: [
      'Everything in Essential',
      'Bioresonance Assessment',
      'Earth Bar HealthScore™',
      'Body Composition Analysis',
      'One Custom Herbal Formula',
      'Personalized Wellness Blueprint',
      'Supplement Recommendations',
      '30-Minute Follow-Up',
    ],
  },
  {
    id: 'executive',
    name: 'Executive',
    subtitle: 'Comprehensive',
    price: '$1,397',
    duration: '90 minutes',
    blurb:
      'The fullest consultation experience for long-term transformation, with advanced review and ongoing guidance.',
    features: [
      'Everything in Signature',
      'Extended 90-Minute Consultation',
      'Advanced Iridology Interpretation',
      'Hormone & Adrenal Review',
      'Digestive Health Assessment',
      'Detox & Toxic Burden Review',
      'Premium Custom Herbal Formula',
      'Priority Scheduling',
      'One Additional Follow-Up',
      'Ongoing Implementation Guidance',
    ],
  },
]

const HERO_IMAGE = '/images/hero.jpg'
const APPROACH_IMAGE = '/images/approach.jpg'
const ABOUT_IMAGE = '/images/about.jpg'

function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}

function Reveal({ className = '', children }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  )
}

export default function App() {
  const [activePackage, setActivePackage] = useState(PACKAGES[1].id)
  const [submitted, setSubmitted] = useState(false)
  const selected = PACKAGES.find((item) => item.id === activePackage) ?? PACKAGES[1]

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <header className="site-header">
        <a className="brand-mark" href="#top">
          Earth Bar
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#how">How it works</a>
          <a href="#approach">Approach</a>
          <a href="#book">Consultations</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Book a visit
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-label="Earth Bar hero">
          <div className="hero-media" aria-hidden="true">
            <img
              src={HERO_IMAGE}
              alt=""
              width={2400}
              height={1800}
              fetchPriority="high"
            />
          </div>
          <div className="hero-content">
            <p className="hero-brand">Earth Bar</p>
            <h1 className="hero-headline">
              Your body can heal itself. It just needs the right protocol.
            </h1>
            <p className="hero-support">
              Root-cause herbal consultations with Dr. Catalina Cali — bioresonance,
              iridology, and custom formulas made for your body.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#book">
                Choose a consultation
              </a>
              <a className="btn btn-secondary" href="tel:+17069412302">
                Call (706) 941-2302
              </a>
            </div>
          </div>
        </section>

        <div className="trust-strip">
          <div className="section">
            <span>
              <strong>500+</strong> clients guided
            </span>
            <span>
              <strong>Best of Georgia</strong> 2024 &amp; 2025
            </span>
            <span>
              <strong>12+</strong> years of herbal practice
            </span>
            <span>
              <strong>Martinez / Augusta, GA</strong>
            </span>
          </div>
        </div>

        <section className="section steps" id="how">
          <Reveal>
            <p className="section-kicker">How it works</p>
            <h2 className="section-title">From symptoms to a clear path</h2>
            <p className="section-copy">
              Your healing journey starts with understanding your body — then building
              a protocol that matches it.
            </p>
          </Reveal>
          <Reveal>
            <ol className="steps-list">
              <li className="step">
                <span className="step-index" aria-hidden="true">
                  01
                </span>
                <div>
                  <h3>Share your story</h3>
                  <p>
                    Tell us about your symptoms, history, and goals so Dr. Cali can see
                    the full picture before you meet.
                  </p>
                </div>
              </li>
              <li className="step">
                <span className="step-index" aria-hidden="true">
                  02
                </span>
                <div>
                  <h3>Book your consultation</h3>
                  <p>
                    Choose Essential, Signature, or Executive. Same-week appointments
                    are often available.
                  </p>
                </div>
              </li>
              <li className="step">
                <span className="step-index" aria-hidden="true">
                  03
                </span>
                <div>
                  <h3>Receive your protocol</h3>
                  <p>
                    Leave with a personalized herbal plan, supplement guidance, and a
                    roadmap built for your body.
                  </p>
                </div>
              </li>
            </ol>
          </Reveal>
        </section>

        <section className="approach" id="approach">
          <div className="section approach-grid">
            <Reveal>
              <div className="approach-visual">
                <img
                  src={APPROACH_IMAGE}
                  alt="Dried herbs and flowers with a stone mortar and pestle on a wooden table"
                  width={2000}
                  height={1333}
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal>
              <div>
                <p className="section-kicker">The Earth Bar approach</p>
                <h2 className="section-title">Find the root. Then feed the fix.</h2>
                <p className="section-copy">
                  Most people spend years masking symptoms. Dr. Cali uses advanced
                  diagnostics and herbal wisdom to uncover why the body is struggling —
                  and what it needs to recover.
                </p>
                <ul className="approach-points">
                  <li>
                    <strong>Advanced testing</strong>
                    <span>
                      Bioresonance, iridology, and blood analysis reveal patterns
                      beneath the surface.
                    </span>
                  </li>
                  <li>
                    <strong>Custom herbal formulas</strong>
                    <span>
                      Handmade teas and capsules tailored to your condition — not a
                      one-size-fits-all bottle.
                    </span>
                  </li>
                  <li>
                    <strong>Whole-person care</strong>
                    <span>
                      Nutrition, lifestyle, and follow-through support so progress
                      actually sticks.
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="book">
          <Reveal className="packages-intro">
            <p className="section-kicker">Consultations</p>
            <h2 className="section-title">Book the depth you need</h2>
            <p className="section-copy">
              Select a consultation. Prefer to talk it through first? Call or email Dr.
              Cali directly.
            </p>
            <div className="package-switch" role="tablist" aria-label="Consultation packages">
              {PACKAGES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  className="package-tab"
                  aria-selected={activePackage === item.id}
                  onClick={() => setActivePackage(item.id)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div
              className="package-panel"
              role="tabpanel"
              aria-label={`${selected.name} consultation details`}
            >
              <div>
                <p className="section-kicker">{selected.subtitle}</p>
                <h3 className="section-title" style={{ maxWidth: '12ch' }}>
                  {selected.name}
                </h3>
                <p className="package-price">{selected.price}</p>
                <p className="package-meta">{selected.duration}</p>
                <p className="package-desc" style={{ marginTop: '1rem' }}>
                  {selected.blurb}
                </p>
                <div className="cta-row" style={{ marginTop: '1.5rem' }}>
                  <a className="btn btn-dark" href="#contact">
                    Request {selected.name}
                  </a>
                  <a className="btn btn-ghost" href="mailto:earthbarllc@gmail.com">
                    Email Dr. Cali
                  </a>
                </div>
              </div>
              <ul className="feature-list">
                {selected.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <section className="section about" id="about">
          <Reveal>
            <div className="about-portrait">
              <img
                src={ABOUT_IMAGE}
                alt="Hands preparing dried herbs with a mortar and pestle"
                width={2000}
                height={1333}
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal>
            <div>
              <p className="section-kicker">About</p>
              <h2 className="section-title">Dr. Catalina Cali</h2>
              <p className="section-copy">
                Holistic Health Practitioner &amp; Master Herbalist. Known to her clients
                as Dr. Cali, she founded Earth Bar LLC on a simple belief: nature
                provides everything the body needs to heal, thrive, and flourish.
              </p>
              <p className="section-copy" style={{ marginTop: '1rem' }}>
                A two-time Best of Georgia award winner and published author, Dr. Cali
                combines bioresonance testing and iridology with deep herbal wisdom to
                address root causes — not just symptoms. Every consultation is delivered
                with care, expertise, and a commitment to long-term wellbeing.
              </p>
              <p className="section-copy" style={{ marginTop: '1rem' }}>
                Visit the studio at 514 Shartom Dr, Martinez, GA — Tuesday through
                Saturday, noon to 6pm.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="contact-band" id="contact">
          <div className="section contact-layout">
            <Reveal>
              <div>
                <p className="section-kicker">Contact</p>
                <h2 className="section-title">Begin your protocol</h2>
                <p className="section-copy">
                  Tell us what you are working through. We will follow up to confirm
                  availability and the right consultation for you.
                </p>
                <div className="contact-details">
                  <div>
                    <strong>Phone</strong>
                    <a href="tel:+17069412302">(706) 941-2302</a>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:earthbarllc@gmail.com">earthbarllc@gmail.com</a>
                  </div>
                  <div>
                    <strong>Studio</strong>
                    <p>514 Shartom Dr, Martinez, GA 30907</p>
                  </div>
                  <div>
                    <strong>Hours</strong>
                    <p>Tue–Sat · 12:00–6:00pm</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              {submitted ? (
                <p className="form-success" role="status">
                  Thank you — we received your request and will be in touch soon.
                </p>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <label>
                    Name
                    <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
                  </label>
                  <label>
                    Email
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@example.com"
                    />
                  </label>
                  <label>
                    Phone
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(706) 000-0000"
                    />
                  </label>
                  <label>
                    Consultation interest
                    <select name="package" defaultValue={selected.id}>
                      {PACKAGES.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name} — {item.price}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    What are you hoping to address?
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Share a short note about your symptoms or goals."
                    />
                  </label>
                  <button className="btn btn-primary" type="submit">
                    Send request
                  </button>
                  <p className="form-note">
                    This preview form stores your message on this page only. For a live
                    booking, call or email Earth Bar directly.
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section">
          <span>© {new Date().getFullYear()} Earth Bar LLC</span>
          <span>Inspired by health. Guided by nature.</span>
          <a href="https://www.instagram.com/catalinacali_/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </footer>
    </>
  )
}
