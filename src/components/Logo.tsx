export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        {/* Logo Icon - Abstract Calculator/Building */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Shape */}
          <rect
            x="6"
            y="6"
            width="36"
            height="36"
            rx="6"
            fill="#030213"
          />
          
          {/* Grid Pattern - Calculator inspired */}
          <rect x="12" y="12" width="8" height="6" rx="1" fill="#ffffff" opacity="0.9" />
          <rect x="22" y="12" width="8" height="6" rx="1" fill="#ffffff" opacity="0.9" />
          <rect x="32" y="12" width="4" height="6" rx="1" fill="#ffffff" opacity="0.9" />
          
          <rect x="12" y="20" width="8" height="6" rx="1" fill="#ffffff" opacity="0.7" />
          <rect x="22" y="20" width="8" height="6" rx="1" fill="#ffffff" opacity="0.7" />
          <rect x="32" y="20" width="4" height="6" rx="1" fill="#ffffff" opacity="0.7" />
          
          <rect x="12" y="28" width="8" height="8" rx="1" fill="#ffffff" opacity="0.9" />
          <rect x="22" y="28" width="14" height="8" rx="1" fill="#ffffff" opacity="0.9" />
        </svg>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className="text-[#030213] tracking-wide" style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1 }}>
            LLB
          </span>
          <span className="text-[#717182]" style={{ fontSize: '20px', fontWeight: 400, lineHeight: 1 }}>
            & Co
          </span>
        </div>
        <span className="text-[#717182] tracking-wider" style={{ fontSize: '11px', fontWeight: 500, lineHeight: 1, marginTop: '4px' }}>
          CERTIFIED PUBLIC ACCOUNTANTS
        </span>
      </div>
    </div>
  );
}
