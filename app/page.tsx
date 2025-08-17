"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPinterest,
  FaXTwitter,
  FaTiktok,
  FaGlobe,
  FaAndroid,
  FaApple,
  FaStar,
} from "react-icons/fa6"
import { cn } from "@/lib/utils"

type LinkItem = {
  label: string
  href: string
  icon: React.ReactNode
}

const socialLinks: LinkItem[] = [
  {
    label: "Facebook Page (Nisar Bakers)",
    href: "https://www.facebook.com/NisarBakersOfficial/",
    icon: <FaFacebook size={20} aria-hidden="true" />,
  },
  {
    label: "Facebook Page (WOK refreshment)",
    href: "https://www.facebook.com/WokRefreshment/",
    icon: <FaFacebook size={20} aria-hidden="true" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nisarbakersofficial/",
    icon: <FaInstagram size={20} aria-hidden="true" />,
  },
  {
    label: "X Profile",
    href: "https://x.com/NisarBakers",
    icon: <FaXTwitter size={20} aria-hidden="true" />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@nisarbakers",
    icon: <FaTiktok size={20} aria-hidden="true" />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@NISARBAKERSOFFICIAL",
    icon: <FaYoutube size={20} aria-hidden="true" />,
  },
  {
    label: "Whatsapp (Wok)",
    href: "https://wa.me/message/52F6273WPNEXL1",
    icon: <FaWhatsapp size={20} aria-hidden="true" />,
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/nisarbakersofficial",
    icon: <FaPinterest size={20} aria-hidden="true" />,
  },
]

const reviews = [
  {
    title: "Dhoke Syedan Branch",
    href: "https://g.page/r/CddPAtDa8HoFEBM/review",
    rating: 5,
  },
  {
    title: "Adiyala Road Branch",
    href: "https://g.page/r/Cf-TDzaJfjeHEBM/review",
    rating: 5,
  },
  {
    title: "WOK FOOD",
    href: "https://g.page/r/CW1Ji08un6unEBM/review",
    rating: 5,
  },
]

function useInViewAnimation(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1 text-[var(--nb-gold)]">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar
          key={i}
          size={16}
          className="fill-[var(--nb-gold)]"
          aria-hidden="true"
        />
      ))}
      <span className="sr-only">{`${count} star rating`}</span>
    </div>
  )
}

type CtaItem = {
  label: string
  sublabel?: string
  href: string
  icon: React.ReactNode
}

const ctaItems: CtaItem[] = [
  {
    label: "Visit Our Website",
    href: "https://www.nisarbakers.com",
    icon: <FaGlobe size={24} aria-hidden="true" />,
  },
  {
    label: "Android",
    sublabel: "Download for",
    href: "https://nisarbakers.com",
    icon: <FaAndroid size={24} aria-hidden="true" />,
  },
  {
    label: "iOS",
    sublabel: "Download for",
    href: "https://nisarbakers.com",
    icon: <FaApple size={24} aria-hidden="true" />,
  },
]

export default function Page() {
  const { ref: socialRef, inView: socialIn } = useInViewAnimation()
  const { ref: reviewRef, inView: reviewIn } = useInViewAnimation()
  const headerRef = useRef<HTMLDivElement | null>(null)
  const bgRef = useRef<HTMLDivElement | null>(null)
  const [loaded, setLoaded] = useState(false)

  // In-view animation for CTA section
  const { ref: ctaRef, inView: ctaIn } = useInViewAnimation()

  // Parallax effect for hero background
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      if (bgRef.current) {
        const translate = Math.min(y * 0.25, 140)
        bgRef.current.style.transform = `translateY(${translate}px) scale(1.05)`
      }
      if (headerRef.current) {
        headerRef.current.style.backdropFilter = y > 20 ? "blur(8px)" : "blur(0)"
        headerRef.current.style.background =
          y > 20
            ? "linear-gradient(to bottom, rgba(20,12,6,0.65), rgba(20,12,6,0.35))"
            : "transparent"
      }
    }
    const onLoad = () => setLoaded(true)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("load", onLoad)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("load", onLoad)
    }
  }, [])

  return (
    <main className="min-h-screen bg-[var(--nb-brown-900)] text-white">
      {/* Fixed Header */}
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-40"
        aria-label="Main header"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full shadow-lg ring-1 ring-white/20">
              <Image
                src="/images/logo.png"
                alt="Nisar Bakers logo"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <span
              className="text-lg font-semibold tracking-wide"
              style={{ textShadow: "var(--nb-text-shadow)" }}
            >
              Nisar Bakers
            </span>
          </div>
          <div className="hidden md:block text-sm text-white/80">
            Freshly baked goodness, every day.
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative isolate flex min-h-[85vh] w-full items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          ref={bgRef}
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 bg-center bg-cover",
            "transition-transform duration-300 will-change-transform"
          )}
          style={{
            backgroundImage: 'url("/images/hero.png")',
          }}
          aria-hidden="true"
        />
        {/* Warm overlay gradient for readability */}
        <div
          className="absolute inset-0 -z-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(33,21,14,0.55), rgba(33,21,14,0.65) 40%, rgba(33,21,14,0.75))",
          }}
          aria-hidden="true"
        />

        {/* Center Content */}
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          {/* Big Logo with glow + animation */}
          <div
            className={cn(
              "relative mb-6 mt-24 h-36 w-36 overflow-hidden rounded-full shadow-2xl ring-2 ring-[var(--nb-gold)]/60",
              "transition-all duration-700"
            )}
            style={{
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.4), 0 0 30px rgba(226,184,87,0.35)",
              transform: loaded ? "scale(1)" : "scale(0.9)",
              opacity: loaded ? 1 : 0,
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Nisar Bakers logo large"
              fill
              sizes="144px"
              className="object-cover"
              priority
            />
          </div>

          <h1
            className="mb-3 text-4xl font-extrabold tracking-tight sm:text-5xl"
            style={{ textShadow: "var(--nb-text-shadow)" }}
          >
            <span className="block">Nisar Bakers</span>
          </h1>

          {/* Tagline */}
          <p
            className="mx-auto mt-5 max-w-2xl text-base text-white/90 sm:text-lg"
            style={{ textShadow: "var(--nb-text-shadow)" }}
          >
            Modern, elegant, and vibrant bakes crafted with love. Taste the
            warmth of gold, cream, and cocoa in every bite.
          </p>

          {/* Social buttons */}
          <div
            ref={socialRef}
            className={cn(
              "mt-8 grid w-full gap-3 sm:grid-cols-2 md:gap-4",
              socialIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transition: "opacity 600ms ease, transform 600ms ease" }}
          >
            {socialLinks.map((link) => (
              <Button
                key={link.href}
                asChild
                className={cn(
                  "group h-12 w-full justify-center gap-2 rounded-2xl text-base font-semibold",
                  "shadow-lg transition-transform duration-200",
                  "hover:scale-[1.02] focus:scale-[1.02]",
                  "ring-1 ring-white/10",
                  "bg-gradient-to-tr from-[var(--nb-brown-700)] via-[var(--nb-brown-600)] to-[var(--nb-gold)]",
                  "hover:shadow-[0_0_0_3px_rgba(226,184,87,0.25),0_15px_40px_rgba(0,0,0,0.35)]"
                )}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2"
                  aria-label={link.label}
                  title={link.label}
                >
                  <span className="text-white">{link.icon}</span>
                  <span className="truncate">{link.label}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section
        className={cn(
          "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
          "opacity-100 translate-y-0"
        )}
        style={{ transition: "opacity 600ms ease, transform 600ms ease" }}
        aria-labelledby="reviews-heading"
      >
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2
            id="reviews-heading"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
            style={{ textShadow: "var(--nb-text-shadow)" }}
          >
            Google Reviews
          </h2>
          <StarRow />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <Card
              key={r.href}
              className={cn(
                "group overflow-hidden border-white/10 bg-white/5 text-white",
                "backdrop-blur-sm transition-all duration-200",
                "hover:translate-y-[-2px] hover:shadow-xl"
              )}
            >
              <CardHeader className="space-y-2">
                <CardTitle className="flex items-center justify-between">
                  <span className="truncate">{r.title}</span>
                  <StarRow count={r.rating} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-white/80">
                  Share your experience with us! Your feedback helps us serve
                  you better.
                </p>
                <Button
                  asChild
                  className={cn(
                    "w-full gap-2 rounded-xl font-semibold",
                    "bg-gradient-to-r from-[var(--nb-gold)] to-amber-400 text-black",
                    "hover:from-amber-400 hover:to-[var(--nb-gold)]"
                  )}
                >
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Leave a Google review for ${r.title}`}
                    title={`Leave a Google review for ${r.title}`}
                  >
                    <FaStar size={20} aria-hidden="true" />
                    Leave a Review
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
          {/* CTA Section */}
          <div
            ref={ctaRef}
            className={cn(
              "w-full mt-4",
              ctaIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            )}
            style={{ transition: "opacity 700ms ease, transform 700ms ease" }}
            aria-label="Call to action"
          >
            <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-3">
              {ctaItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group relative flex h-16 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl px-4",
                    "bg-gradient-to-r from-[var(--nb-gold)] to-amber-300 text-black",
                    "ring-1 ring-black/10 shadow-lg",
                    "transition-all duration-200 hover:scale-[1.02] focus:scale-[1.02]",
                    "hover:shadow-[0_0_0_3px_rgba(226,184,87,0.35),0_20px_50px_rgba(0,0,0,0.35)]",
                    "cta-pulse"
                  )}
                  aria-label={item.sublabel ? `${item.sublabel} ${item.label}` : item.label}
                >
                  <span className="shrink-0 text-black/80">{item.icon}</span>
                  <span className="flex min-w-0 flex-col">
                    {item.sublabel ? (
                      <>
                        <span className="text-xs text-black/70">{item.sublabel}</span>
                        <span className="truncate text-lg font-extrabold leading-5">
                          {item.label}
                        </span>
                      </>
                    ) : (
                      <span className="truncate text-base sm:text-lg font-extrabold">
                        {item.label}
                      </span>
                    )}
                  </span>
                </a>
              ))}
            </div>
          </div>

      {/* Footer */}
      <footer className="mt-8 border-t border-white/10 bg-gradient-to-b from-transparent to-[rgba(20,12,6,0.75)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/20">
                <Image
                  src="/images/logo.png"
                  alt="Nisar Bakers footer logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-semibold">Nisar Bakers</span>
            </div>
            <p className="max-w-xs text-sm text-white/80">
              Fresh breads, cakes, and pastries baked daily with love.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-base font-semibold">Hours</h3>
            <ul className="space-y-1 text-sm text-white/80">
              <li>Mon–Sat: 9:00 AM – 10:00 PM</li>
              <li>Sun: 10:00 AM – 9:00 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-base font-semibold">Connect</h3>
            <ul className="space-y-2 text-sm">
              {socialLinks.slice(0, 5).map((item) => (
                <li key={item.href} className="flex items-center gap-2">
                  <span className="text-white/90">{item.icon}</span>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 underline-offset-2 hover:underline"
                    aria-label={item.label}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Nisar Bakers. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
