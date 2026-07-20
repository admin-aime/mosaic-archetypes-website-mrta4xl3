export function Cookies() {
  return (
    <>
      <div className="page-header">
        <div className="page-header__texture" />
        <div className="page-header__inner">
          <p className="section__label">Legal</p>
          <h1 className="section__title">Cookie Policy</h1>
        </div>
      </div>

      <section className="section section--white">
        <div className="section__inner" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.7', color: 'rgba(0,0,0,0.7)' }}>
            <p className="mb-6" style={{ color: 'var(--colour-black)', fontWeight: 600 }}>
              Last updated: January 2025
            </p>

            <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.25rem', color: 'var(--colour-black)', marginBottom: '0.75rem', marginTop: '2rem' }}>
              1. What Are Cookies?
            </h3>
            <p className="mb-4">
              Cookies are small text files placed on your device when you visit a website. They are
              widely used to make websites work efficiently and to provide information to site owners.
            </p>

            <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.25rem', color: 'var(--colour-black)', marginBottom: '0.75rem', marginTop: '2rem' }}>
              2. How We Use Cookies
            </h3>
            <p className="mb-4">
              We use Google Analytics 4 to collect anonymised information about how visitors use our
              site — pages visited, time on site, and basic device information. This helps us improve
              the website experience. GA4 uses first-party cookies that do not store personal
              identifiers.
            </p>

            <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.25rem', color: 'var(--colour-black)', marginBottom: '0.75rem', marginTop: '2rem' }}>
              3. Types of Cookies We Use
            </h3>

            <div className="mb-4">
              <p style={{ fontWeight: 600, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                Essential Cookies
              </p>
              <p>
                Required for basic site functionality. These do not store personal information.
              </p>
            </div>

            <div className="mb-4">
              <p style={{ fontWeight: 600, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                Analytics Cookies (GA4)
              </p>
              <p>
                Collect anonymised usage data to help us understand how visitors interact with the site.
                These cookies do not identify you personally.
              </p>
            </div>

            <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.25rem', color: 'var(--colour-black)', marginBottom: '0.75rem', marginTop: '2rem' }}>
              4. Managing Cookies
            </h3>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings. You can block or
              delete cookies, but this may affect site functionality. To opt out of Google Analytics
              tracking, you can install the Google Analytics Opt-out Browser Add-on.
            </p>

            <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.25rem', color: 'var(--colour-black)', marginBottom: '0.75rem', marginTop: '2rem' }}>
              5. Contact
            </h3>
            <p>
              For questions about this cookie policy, contact us at hello@mosaic-archetypes.co.uk.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
