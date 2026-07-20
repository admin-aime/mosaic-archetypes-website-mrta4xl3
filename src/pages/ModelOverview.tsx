import { Link } from 'react-router-dom';

export function ModelOverview() {
  return (
    <>
      <div className="page-header">
        <div className="page-header__texture" />
        <div className="page-header__inner">
          <p className="section__label">Overview</p>
          <h1 className="section__title">Model Overview</h1>
        </div>
      </div>

      <section className="section section--white">
        <div className="section__inner" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'var(--font-header)', fontSize: '2rem', color: 'var(--colour-black)', marginBottom: '1rem' }}>
            What This App Is For
          </h2>
          <p className="section__body">
            The Mosaic Leadership Archetypes® website is the digital home for the Mosaic leadership
            framework — a proprietary model that maps ten distinct leadership archetypes across
            four quadrants: Power, Vision, Process, and Relationships. The site serves as both an
            educational resource and a conversion platform, helping visitors understand the framework,
            explore archetypes, and take action through downloads and enquiries.
          </p>

          <h2 style={{ fontFamily: 'var(--font-header)', fontSize: '1.75rem', color: 'var(--colour-black)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            Main Pages and Features
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.6', color: 'rgba(0,0,0,0.7)' }}>
            <div>
              <p style={{ fontWeight: 700, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                Home Page
              </p>
              <p>
                The landing page introduces the Mosaic framework with a hero section, introductory
                video, archetype preview cards, philosophy snapshot, and workshops teaser. Visitors
                can download the guide or request a callback directly from this page.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                Archetype Model
              </p>
              <p>
                Displays all ten leadership archetypes as interactive cards, filterable by the
                four quadrants (Power, Vision, Process, Relationships). Each card links to a dedicated detail
                page with a full description, quadrant context, and related archetypes.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                Philosophy
              </p>
              <p>
                Explains the Mosaic methodology — the multi-dimensional approach to leadership and
                four pillars of application: Multi-Dimensional Leadership, Archetypes Not Types,
                Precision Development, and Collective Leadership. Includes a visual
                model diagram of the four quadrants.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                Workshops & Programmes
              </p>
              <p>
                Lists four workshop formats (Discovery, Deep Dive, Leadership Journey, Team
                Alignment) with duration, format, descriptions, and learning outcomes. Also
                covers benefits of the Mosaic approach and a call-to-action to enquire.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                Download Handbook (Gated)
              </p>
              <p>
                A lead-capture page where visitors submit their name, email, organisation, and phone
                to receive the Mosaic Leadership Archetype Handbook. After submission, a thank-you confirmation
                screen appears with delivery instructions.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                Enquire Now
              </p>
              <p>
                A contact form (name, email, phone, message) for visitors to request a callback or
                more information. Includes contact details (phone and email) and a post-submission
                confirmation screen.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                About Mosaic
              </p>
              <p>
                Shares the mission, founder background, and core values of Mosaic Leadership
                Archetypes® — depth over simplicity, evidence over opinion, growth over fixing, and
                context over dogma.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                Legal Pages
              </p>
              <p>
                Privacy Policy and Cookie Policy pages covering data collection, usage, storage,
                user rights, and cookie management — keeping the site compliant and transparent.
              </p>
            </div>
          </div>

          <h2 style={{ fontFamily: 'var(--font-header)', fontSize: '1.75rem', color: 'var(--colour-black)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            How to Use the Site
          </h2>
          <p className="section__body">
            Browse the archetypes to understand the framework, read the philosophy to see why it
            matters, explore workshop options for team or individual development, and use the
            download or enquiry forms to take the next step. The site works on desktop, tablet,
            and mobile devices.
          </p>

          <div className="mt-8">
            <Link
              to="/"
              style={{
                fontFamily: 'var(--font-subheader)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--colour-mosaic-gold)',
                textDecoration: 'none',
              }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
