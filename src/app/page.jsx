import "./input.css";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import { Suspense } from "react";
import Loading from "./components/Loading";
import Body from "./components/Body";
import Footer from "./components/Footer";

export const metadata = {
  title: "ResumeAI - AI-Powered Resume Analysis",
  description:
    "AI-powered resume analysis and feedback specifically designed for software engineers",
  keywords: "resume, AI, analysis, software engineer, career",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#4F46E5",
};

export default function Home() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <main className="min-h-screen bg-white">
          <Header />
          <Body />
          <Footer />
          {/* Rest of your page content */}
        </main>
      </Suspense>
    </ErrorBoundary>
  );
}
