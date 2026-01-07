export function ChatIcon({ className = "", size = "w-8 h-8" }: { className?: string; size?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg 
        className={`${size} text-orange-500`} 
        viewBox="0 0 24 24" 
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Chat bubble */}
        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="#EA580C"/>
        
        {/* Dollar sign */}
        <path d="M12 6v2m0 8v2m-1-8h2a2 2 0 1 1 0 4h-2m0-4a2 2 0 1 0 0 4" 
              stroke="white" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none"/>
        
        {/* Sparkles for "cheap" effect */}
        <circle cx="7" cy="6" r="0.8" fill="#FED7AA" opacity="0.9">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="17" cy="7" r="0.6" fill="#FED7AA" opacity="0.7">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite" begin="0.3s" />
        </circle>
        <circle cx="18" cy="14" r="0.5" fill="#FED7AA" opacity="0.8">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
        </circle>
      </svg>
    </div>
  );
}