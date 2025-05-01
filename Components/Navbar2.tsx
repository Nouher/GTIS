'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export function Navbar2() {
  return (
    <header className="w-full border-b shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold">
          MyApp
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm hover:underline">Home</Link>
          <Link href="/about" className="text-sm hover:underline">About</Link>
          <Link href="/contact" className="text-sm hover:underline">Contact</Link>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-4">
            <div className="flex flex-col gap-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
