import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="text-white">
        🏠 Home
      </Link>{" "}
      |{" "}
      <a
        href="/index-cssjsonly.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white"
      >
        📝 cssjsonly
      </a>{" "}
      |{" "}
      <a
        href="/index-gsap.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white"
      >
        📝 gsap
      </a>
    </nav>
  );
}
