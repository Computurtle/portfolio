function NotFoundPage() {
  return (
    <div>
      <h2>404 - Not Found</h2>
      {/* Escaped the apostrophe in "doesn't" */}
      <p>Oops! This page doesn&apos;t exist.</p>
    </div>
  );
}

export default NotFoundPage;
