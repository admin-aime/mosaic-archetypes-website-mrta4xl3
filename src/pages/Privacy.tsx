import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function Privacy() {
  useDocumentTitle('Privacy Policy');
  return (
    <>
      <div className="page-header">
        <div className="page-header__texture" />
        <div className="page-header__inner">
          <p className="section__label">Legal</p>
          <h1 className="section__title">Privacy Policy</h1>
        </div>
      </div>

      <section className="section section--white">
        <div className="section__inner" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.7', color: 'rgba(0,0,0,0.7)' }}>
            <p className="mb-6" style={{ color: 'var(--colour-black)', fontWeight: 600 }}>
              Last updated: January 2025
            </p>

            <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.25rem', color: 'var(--colour-black)', marginBottom: '0.75rem', marginTop: '2rem' }}>
              1. Introduction
            </h3>
            <p className="mb-4">
              Mosaic Leadership Archetypes® ("we", "our", "us") is committed to protecting your
              privacy. This policy explains how we collect, use, and safeguard your personal
              information when you use our website or engage with our services.
            </p>

            <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.25rem', color: 'var(--colour-black)', marginBottom: '0.75rem', marginTop: '2rem' }}>
              2. Information We Collect
            </h3>
            <p className="mb-4">
              We collect information you voluntarily provide when you fill in forms on our website,
              including your name, email address, phone number, organisation, and any message content.
              We also collect basic analytics data including page views and interactions through
              Google Analytics 4.
            </p>

            <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.25rem', color: 'var(--colour-black)', marginBottom: '0.75rem', marginTop: '2rem' }}>
              3. How We Use Your Information
            </h3>
            <p className="mb-4">
              We use your information to respond to enquiries, deliver requested resources (such as
              the Mosaic Leadership Archetype Handbook), improve our website and services, and — with your consent —
              send you relevant information about Mosaic Leadership Archetypes®. We never sell your
              personal data to third parties.
            </p>

            <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.25rem', color: 'var(--colour-black)', marginBottom: '0.75rem', marginTop: '2rem' }}>
              4. Data Storage & Security
            </h3>
            <p className="mb-4">
              We implement appropriate technical and organisational measures to protect your personal
              data against unauthorised access, alteration, disclosure, or destruction. Form submissions
              are transmitted securely and stored in accordance with applicable data protection laws.
            </p>

            <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.25rem', color: 'var(--colour-black)', marginBottom: '0.75rem', marginTop: '2rem' }}>
              5. Cookies
            </h3>
            <p className="mb-4">
              Our website uses essential cookies for functionality and analytics cookies (via Google
              Analytics 4) to understand how visitors use our site. You can manage cookie preferences
              through your browser settings. See our Cookie Policy for more detail.
            </p>

            <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.25rem', color: 'var(--colour-black)', marginBottom: '0.75rem', marginTop: '2rem' }}>
              6. Your Rights
            </h3>
            <p className="mb-4">
              Depending on your jurisdiction, you may have rights to access, correct, delete, or
              restrict the processing of your personal data. To exercise these rights, contact us at
              hello@mosaic-archetypes.co.uk.
            </p>

            <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.25rem', color: 'var(--colour-black)', marginBottom: '0.75rem', marginTop: '2rem' }}>
              7. Contact
            </h3>
            <p>
              For questions about this privacy policy, contact us at hello@mosaic-archetypes.co.uk.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
