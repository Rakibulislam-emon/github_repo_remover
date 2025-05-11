import Hero from "./components/hero/Hero";
import Header from "./components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
    </div>
  );
}
