import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./HomepageHeader.module.css";

function PulsingDot() {
  return (
    <span className="badge-dot">
      <span className="badge-dot-pulse"></span>
    </span>
  );
}

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className="hero">
      <div className="container">
        <div className="text--center">
          <div className="badge animate-fade-in">
            <PulsingDot />
            TypeScript support
          </div>
          <h1 className={styles.heroTitle}>
            {siteConfig.tagline}
            <span className={styles.highLight}>Waiting For</span>
          </h1>

          <p className="hero__subtitle animate-fade-in animation-delay-100">
            A highly reusable and customizable React audio player, designed for
            seamless integration into any project.
          </p>

          <div className="animate-fade-in animation-delay-200 ">
            <Link
              className="button button--outline button--lg margin-right--md"
              to="/docs/intro"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
