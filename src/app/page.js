import { SignInButton } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>RiPEN</h1>
      <p>It knows before you do.</p>
      <SignInButton>
        <button>Sign in here</button>
        </SignInButton>
        <SignUpButton>
          <button> Sign up here </button>
          </SignUpButton>
    </main>
  );
}