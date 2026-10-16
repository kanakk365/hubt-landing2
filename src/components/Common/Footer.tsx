import Link from "next/link";
import { Logo } from "@/components/site/Logo";
import { BookCall } from "@/components/site/BookCall";
import { NAV_LINKS, PRODUCTS } from "@/lib/site";

const Footer = () => {
  return (
    <footer className="relative border-t border-line bg-bg-deep">
      <div className="container-site grid grid-cols-2 gap-x-8 gap-y-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-14 md:py-20">
        <div className="col-span-2 flex flex-col items-start gap-5 md:col-span-1">
          <Logo />
          <p className="max-w-[34ch] text-[0.9375rem] leading-relaxed text-fg-muted">
            An AI and software studio. We design, build and run production systems for
            businesses, founders and sports organisations.
          </p>
          <BookCall size="sm" variant="ghost" />
        </div>

        <FooterColumn title="Studio">
          <FooterLink href="/">Home</FooterLink>
          {NAV_LINKS.map((l) => (
            <FooterLink key={l.href} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Products">
          {PRODUCTS.map((p) => (
            <FooterLink key={p.slug} href={`/#work-${p.slug}`}>
              {p.name}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Work with us">
          <FooterLink href="/#process">How an engagement runs</FooterLink>
          <FooterLink href="/#contact">Start a project</FooterLink>
        </FooterColumn>
      </div>

      <div aria-hidden className="container-site select-none overflow-hidden">
        <p className="font-display translate-y-[18%] text-center text-[clamp(4.5rem,17.5vw,15.5rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-white/[0.075] [font-stretch:110%] [mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)]">
          HubTech
        </p>
      </div>
      <div className="container-site flex flex-col gap-3 border-t border-line py-6 text-[0.8125rem] text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} HubTech Ltd. All rights reserved.</p>
        <p>hubts.io</p>
      </div>
    </footer>
  );
};

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[0.8125rem] font-medium text-fg-subtle">{title}</h2>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[0.9375rem] text-fg-muted transition-colors duration-200 hover:text-fg"
      >
        {children}
      </Link>
    </li>
  );
}

export default Footer;
