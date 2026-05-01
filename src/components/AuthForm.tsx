import * as React from "react"
import { cn } from "@/src/lib/utils"
import { 
  Eye, 
  EyeOff, 
  KeyRound, 
  Mail, 
  Sparkles,
  X
} from "lucide-react"

// --- "Liquid Glass" UI Components (Internal to AuthForm to avoid missing imports) ---

const GlassCard = React.forwardRef<HTMLDivElement, { className?: string; children: React.ReactNode }>(
  ({ className, children }, ref) => (
    <div ref={ref} className={cn("liquid-glass rounded-[2rem] p-8 shadow-2xl relative border border-brand-border dark:border-dark-border", className)}>
      {children}
    </div>
  )
)
GlassCard.displayName = "GlassCard"

const GlassInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border border-brand-border dark:border-dark-border bg-brand-surface dark:bg-dark-surface-2 px-3 py-2 text-sm text-brand-text dark:text-dark-text ring-offset-brand-bg file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-brand-text-muted dark:placeholder:text-dark-text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary dark:focus-visible:ring-dark-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
GlassInput.displayName = "GlassInput"

const GlassButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'ghost' }>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: "bg-brand-primary dark:bg-dark-primary text-white dark:text-black hover:opacity-90",
      outline: "liquid-glass border border-brand-border dark:border-dark-border text-brand-text dark:text-dark-text hover:bg-brand-primary/5 dark:hover:bg-dark-primary/5",
      ghost: "text-brand-text-muted dark:text-dark-text-muted hover:text-brand-text dark:hover:text-dark-text hover:bg-brand-primary/5 dark:hover:bg-dark-primary/5",
    }
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-11 px-6 active:scale-95",
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)
GlassButton.displayName = "GlassButton"

const GlassLabel = ({ className, children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={cn("text-xs font-semibold uppercase tracking-widest text-brand-text-muted dark:text-dark-text-muted mb-1.5 block px-1", className)} {...props}>
    {children}
  </label>
)

// --- Icons ---

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <img src="https://svgl.app/library/google.svg" {...props} alt="Google" />
)

const MicrosoftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <img src="https://svgl.app/library/microsoft.svg" {...props} alt="Microsoft" />
)

const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const [isDark, setIsDark] = React.useState(false);
  
  React.useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return <img src={`https://svgl.app/library/apple${isDark ? '_dark' : ''}.svg`} {...props} alt="Apple" />
}

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  onEmailSubmit?: (data: { email: string; password?: string }) => void
  onSocialSignIn?: (provider: 'google' | 'microsoft' | 'apple' | 'sso') => void
  onEmailLink?: () => void
  onClose?: () => void
}

export const AuthForm = React.forwardRef<HTMLDivElement, AuthFormProps>(
  ({ className, onEmailSubmit, onSocialSignIn, onEmailLink, onClose, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const email = formData.get("email") as string
      const password = formData.get("password") as string
      onEmailSubmit?.({ email, password })
    }

    return (
      <GlassCard ref={ref} className={cn("w-full max-w-md mx-auto", className)} {...props}>
        {/* Close Button */}
        {onClose && (
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-primary/5 dark:hover:bg-dark-primary/5 text-brand-text-muted dark:text-dark-text-muted hover:text-brand-text dark:hover:text-dark-text transition-colors"
          >
            <X size={20} />
          </button>
        )}

        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl text-brand-text dark:text-dark-text tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Sign in with email
            </h2>
            <p className="text-brand-text-muted dark:text-dark-text-muted text-sm leading-relaxed">
              Join the collective of the curious. Bring your vision and teams together. For free.
            </p>
          </div>

          <div className="space-y-6">
            {/* Social Sign-in */}
            <div className="space-y-3">
              <GlassLabel>Sign in with</GlassLabel>
              <div className="grid grid-cols-4 gap-2">
                <GlassButton variant="outline" className="px-0" onClick={() => onSocialSignIn?.('google')}>
                  <GoogleIcon className="size-5" />
                </GlassButton>
                <GlassButton variant="outline" className="px-0" onClick={() => onSocialSignIn?.('microsoft')}>
                  <MicrosoftIcon className="size-5" />
                </GlassButton>
                <GlassButton variant="outline" className="px-0" onClick={() => onSocialSignIn?.('apple')}>
                  <AppleIcon className="size-5" />
                </GlassButton>
                <GlassButton variant="outline" className="px-0" onClick={() => onSocialSignIn?.('sso')}>
                  <KeyRound className="h-5 w-5" />
                </GlassButton>
              </div>
            </div>

            {/* Divider */}
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-brand-border dark:border-dark-border" />
              <span className="flex-shrink mx-4 text-[10px] uppercase tracking-[0.2em] text-brand-text-muted dark:text-dark-text-muted font-bold">OR</span>
              <div className="flex-grow border-t border-brand-border dark:border-dark-border" />
            </div>

            {/* Email Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-2">
                <GlassLabel htmlFor="email">Email</GlassLabel>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-text-muted dark:text-dark-text-muted" />
                  <GlassInput id="email" name="email" type="email" placeholder="liza@asme.io" className="pl-12" required />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <GlassLabel htmlFor="password">Password</GlassLabel>
                  <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-brand-text-muted dark:text-dark-text-muted hover:text-brand-text dark:hover:text-dark-text transition-colors">
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-text-muted dark:text-dark-text-muted" />
                  <GlassInput 
                    id="password" 
                    name="password" 
                    type={showPassword ? "text" : "password"} 
                    className="pl-12 pr-12" 
                    required 
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-brand-primary/5 dark:hover:bg-dark-primary/5 text-brand-text-muted dark:text-dark-text-muted hover:text-brand-text dark:hover:text-dark-text transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <GlassButton type="submit" className="w-full h-14 text-base font-semibold mt-4">
                Sign In
              </GlassButton>
            </form>

            <div className="space-y-4 pt-4">
              <GlassButton variant="ghost" className="w-full text-brand-text-muted dark:text-dark-text-muted hover:text-brand-text dark:hover:text-dark-text transition-all" onClick={() => onEmailLink?.()}>
                <Sparkles className="mr-2 h-4 w-4 text-emerald-400" />
                Or email me a magic link
              </GlassButton>

              <p className="text-[10px] text-brand-text-muted dark:text-dark-text-muted text-center w-full leading-5">
                By logging in, you agree to our{' '}
                <a href="#" className="text-brand-text-muted dark:text-dark-text-muted hover:text-brand-text dark:hover:text-dark-text underline decoration-brand-border dark:decoration-dark-border underline-offset-4">Terms</a>
                {' '}&{' '}
                <a href="#" className="text-brand-text-muted dark:text-dark-text-muted hover:text-brand-text dark:hover:text-dark-text underline decoration-brand-border dark:decoration-dark-border underline-offset-4">Privacy</a>
              </p>
            </div>
          </div>
        </div>
      </GlassCard>
    )
  }
)

AuthForm.displayName = "AuthForm"
