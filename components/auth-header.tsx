import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Suspense } from "react"

import { Button } from "@/components/ui/button"

/** Top bar with Clerk sign-in/sign-up (signed out) and user menu (signed in). */
export const AuthHeader = () => {
  return (
    <header className="flex h-14 items-center justify-end gap-2 border-b px-6">
      {/* Show reads the request on the server, so it sits inside Suspense */}
      <Suspense>
        <Show when="signed-out">
          <SignInButton>
            <Button variant="ghost">Sign in</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Sign up</Button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </Suspense>
    </header>
  )
}
