"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: "LLD",
    children: [
      { label: "What is LLD?", href: "/lld/what-is-lld" },
      {
        label: "OOP Fundamentals",
        children: [
          { label: "Abstraction", href: "/lld/oop-fundamentals/abstraction" },
          {
            label: "Encapsulation",
            href: "/lld/oop-fundamentals/encapsulation",
          },
          { label: "Inheritance", href: "/lld/oop-fundamentals/inheritance" },
          { label: "Polymorphism", href: "/lld/oop-fundamentals/polymorphism" },
        ],
        href: "/lld/oop-fundamentals",
      },
      {
        label: "SOLID Principles",
        children: [
          { label: "SRP", href: "/lld/solid-principles/srp" },
          { label: "OCP", href: "/lld/solid-principles/ocp" },
          { label: "LSP", href: "/lld/solid-principles/lsp" },
          { label: "ISP", href: "/lld/solid-principles/isp" },
          { label: "DIP", href: "/lld/solid-principles/dip" },
        ],
        href: "/lld/solid-principles",
      },
      {
        label: "Design Patterns",
        children: [
          { label: "Strategy", href: "/lld/patterns/strategy" },
          { label: "Factory", href: "/lld/patterns/factory" },
          { label: "SingleTon", href: "/lld/patterns/singleton" },
          { label: "Observer", href: "/lld/patterns/observer" },
          { label: "Decorator", href: "/lld/patterns/decorator" },
          { label: "Command", href: "/lld/patterns/command" },
          { label: "Facade", href: "/lld/patterns/facade" },
          { label: "Composite", href: "/lld/patterns/composite" },
          { label: "Template", href: "/lld/patterns/template" },
          { label: "Proxy", href: "/lld/patterns/proxy" },
          { label: "Chain of Responsibility", href: "/lld/patterns/cor" },
          { label: "Bridge", href: "/lld/patterns/bridge" },
          { label: "Builder", href: "/lld/patterns/builder" },
          { label: "Iterator", href: "/lld/patterns/iterator" },
          { label: "Fly Weight", href: "/lld/patterns/flyweight" },
          { label: "State", href: "/lld/patterns/state" },
          { label: "Mediator", href: "/lld/patterns/mediator" },
          { label: "Prototype", href: "/lld/patterns/prototype" },
          { label: "Visitor", href: "/lld/patterns/visitor" },
          { label: "Memento", href: "/lld/patterns/memento" },
          { label: "Null Object", href: "/lld/patterns/null-object" },
        ],
        href: "/lld/patterns",
      },
      {
        label: "Problems",
        children: [
          { label: "Document Editor", href: "lld/problems/document-editor" },
          { label: "Zomato", href: "lld/problems/zomato" },
          {
            label: "Notification Engine",
            href: "lld/problems/notification-engine",
          },
          { label: "Spotify", href: "lld/problems/spotify" },
          { label: "Payment Gateway", href: "lld/problems/payment-gateway" },
          {
            label: "Discount Coupon System",
            href: "lld/problems/discount-coupon-system",
          },
          { label: "Zepto", href: "lld/problems/zepto" },
          { label: "Tinder", href: "lld/problems/tinder" },
          { label: "Vending Machine", href: "lld/problems/vending-machine" },
          { label: "Splitwise", href: "lld/problems/splitwise" },
          { label: "Tic-Tac-Toe", href: "lld/problems/tic-tac-toe" },
          { label: "Snake and Ladder", href: "lld/problems/snake-and-ladder" },
          { label: "Chess", href: "lld/problems/chess" },
        ],
        href: "/lld/problems",
      },
      { label: "Pattern × Problem", href: "lld/pattern-problem" },
    ],
  },
];

function NavLink({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const pathname = usePathname();

  const isActive = pathname === item.href;

  const hasChildren = item.children && item.children.length > 0;

  const [open, setOpen] = useState(false);

  if (!item.href && depth === 0) {
    return (
      <div>
        <p className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
          {item.label}
        </p>

        {item.children?.map((child) => (
          <NavLink key={child.label} item={child} depth={1} />
        ))}
      </div>
    );
  }

  if (hasChildren) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isActive) {
        e.preventDefault();

        setOpen((prev) => !prev);
        return;
      }

      setOpen(true);
    };

    return (
      <div>
        <Link
          href={item.href!}
          onClick={handleClick}
          className={`w-full flex items-center justify-between px-3 py-1.5 rounded-md text-sm transition-colors group
            ${
              isActive
                ? "text-emerald-700 font-semibold bg-emerald-50"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
        >
          <span className="font-medium">{item.label}</span>

          <div className="flex items-center gap-1.5">
            <ChevronRight
              size={13}
              className={`transition-transform duration-200 ${
                open ? "rotate-90" : ""
              }`}
            />
          </div>
        </Link>

        {open && (
          <div className="ml-3 mt-0.5 border-l border-gray-200 pl-3 space-y-0.5">
            {item.children?.map((child) => (
              <NavLink key={child.label} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href!}
      className={`flex items-center px-3 py-1.5 rounded-md text-sm transition-colors
        ${
          isActive
            ? "text-emerald-700 font-semibold bg-emerald-50 border-l-2 border-emerald-500 -ml-px pl-2.75"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        }`}
    >
      {item.label}
    </Link>
  );
}

export function Sidebar() {
  return (
    <aside className="w-60 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-gray-100 bg-white py-6 px-2">
      <nav className="space-y-0.5">
        {navItems.map((item) => (
          <NavLink key={item.label} item={item} depth={0} />
        ))}
      </nav>
    </aside>
  );
}
