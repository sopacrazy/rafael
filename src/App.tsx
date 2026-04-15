import { useState, useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { BookingPage } from './components/BookingPage';
import { SkeletonLoader } from './components/SkeletonLoader';

type ViewState = 'home' | 'booking';

export default function App() {
  const [view, setView] = useState<ViewState>('home');
  const [isLoading, setIsLoading] = useState(true);

  // Initial load simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigateToBooking = () => {
    // Simulate a quick loading state when transitioning to the booking app
    setIsLoading(true);
    setView('booking');
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  const handleNavigateToHome = () => {
    setView('home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950/30 via-black to-black">
      <div className="max-w-md mx-auto relative min-h-screen shadow-2xl bg-black/40 overflow-hidden">
        {isLoading ? (
          <SkeletonLoader />
        ) : view === 'home' ? (
          <HomePage onNavigate={handleNavigateToBooking} />
        ) : (
          <BookingPage onBack={handleNavigateToHome} />
        )}
      </div>
    </div>
  );
}
