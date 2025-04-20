import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Nimble Nomad
      </h1>
      <Button>Create new character</Button>
    </div>
  );
}
