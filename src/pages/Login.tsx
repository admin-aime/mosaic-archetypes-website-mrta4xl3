import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function Login() {
  useDocumentTitle('Login');
  return (
    <div
      className="page-header"
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="page-header__texture" />
      <div className="page-header__inner">
        <h1 className="section__title">Replace with Mosaic Archetype Tool Login Page</h1>
      </div>
    </div>
  );
}
