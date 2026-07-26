import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page section-spacing text-center">
      <h1 className="text-h1">Page not found</h1>
      <p className="mt-4 text-neutral-600">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link href="/" className="mt-8 inline-block text-brand underline">
        Return home
      </Link>
    </div>
  );
}
