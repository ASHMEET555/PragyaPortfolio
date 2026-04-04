export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-branch" aria-hidden="true" />
      <div className="footer-content">
        <p className="accent-script">"HR is not about resources, it's about people."</p>
        <h4>Pragya Singh</h4>
        <p>Aspiring Human Resources Professional</p>
        <small>© {new Date().getFullYear()} Pragya Singh. All rights reserved.</small>
      </div>
    </footer>
  );
}
