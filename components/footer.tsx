export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 pb-6 text-center">
      {/* The line is the same width as the text because the wrapper shrinks to fit it */}
      <div className="inline-block">
        <div
          aria-hidden="true"
          className="h-[2px] w-full bg-gradient-to-r from-accent to-accent2"
        />
        <p className="mt-4 text-sm text-muted">
          &copy; {currentYear} Charfeddine Fredj. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
