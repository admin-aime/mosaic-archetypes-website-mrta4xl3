import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function ModelOverview() {
  useDocumentTitle('Model Overview');
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
            explore archetypes, and take the next step through the Start the Journey enquiry form.
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
                video, three featured archetype cards (Heroic, Nurturing, and Maverick), a
                philosophy snapshot, and a Solutions call-to-action. Visitors can start their
                journey directly from this page via the Cross the Threshold button.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                Archetype Model
              </p>
              <p>
                Displays all ten leadership archetypes as interactive cards. Each card links to a dedicated
                detail page with the archetype image (with male/female toggle), a full description,
                quadrant context, and related archetypes from the same quadrant.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                Philosophy
              </p>
              <p>
                Explains the Mosaic methodology — the multi-dimensional approach to leadership
                grounded in the circumplex model. Covers the four axes (Power, Vision, Process,
                Relationships) and why the Mosaic framework is a departure from traditional,
                one-dimensional leadership models. Includes a visual diagram of the model.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                Solutions
              </p>
              <p>
                Presents three workshop tiers — Silver, Gold, and Platinum — each with a
                description of what the programme includes and typical outcomes. A shared
                Cross the Threshold call-to-action at the bottom invites visitors to enquire
                about the right programme for their context.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                Start the Journey
              </p>
              <p>
                A contact form (name, email, phone, message) for visitors to enquire about
                Mosaic programmes or request more information. After submission, a
                confirmation screen confirms receipt and sets expectations for a response
                within two business days.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                About — The Mosaic Approach
              </p>
              <p>
                Shares the Mosaic story: the mission, founder backgrounds (Ian Buckingham and
                Kate Hargreaves), the core principles behind the framework — including why it
                was created, the Why Mosaic Archetypes section, and contact details.
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
            matters, explore the Solutions page for development options, and use the Start the
            Journey form to take the next step. The site works on desktop, tablet, and mobile
            devices.
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
