import "./input.css";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import { Suspense } from "react";
import Loading from "./components/Loading";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <main className="min-h-screen bg-white">
          <Body />
        </main>
      </Suspense>
    </ErrorBoundary>
  );
}
