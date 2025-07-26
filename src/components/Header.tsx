"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/home", label: "ホーム" },
  { href: "/history", label: "履歴" },
  { href: "/settings", label: "設定" },
]

export const Header = () => {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-40">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/home"
            className="text-3xl font-semibold"
            style={{ color: "#646A76" }}
          >
            MoyaLog
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                      flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200
                      ${
                        isActive(item.href)
                          ? "bg-purple-100 text-purple-700 shadow-sm"
                          : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                      }
                    `}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
