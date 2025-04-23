import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const fullUser = null;
  // const fullUser = { id: "", name: "Tal", role: "user" };

  return (
    <div className="bg-background text-foreground">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Nimble Nomad
      </h1>
      {fullUser == null ? (
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      ) : (
        // <Card className="max-w-[500px] mt-4"></Card>
        <Button>Create new character</Button>
      )}
    </div>
  );
}
