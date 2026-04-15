import { useState, useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { BookingPage } from './components/BookingPage';
import { SkeletonLoader } from './components/SkeletonLoader';

type ViewState = 'home' | 'booking';

export default function App() {
  const [view, setView] = useState<ViewState>('home');
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Initial load simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

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
    <div className={`min-h-screen transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-emerald-950/30 via-black to-black' 
        : 'bg-gradient-to-b from-emerald-50 via-emerald-100 to-white'
    }`}>
      <div className={`max-w-md mx-auto relative min-h-screen shadow-2xl transition-colors duration-500 overflow-hidden ${
        theme === 'dark' ? 'bg-black/40' : 'bg-white/80'
      }`}>
        {isLoading ? (
          <SkeletonLoader />
        ) : view === 'home' ? (
          <HomePage onNavigate={handleNavigateToBooking} theme={theme} onToggleTheme={toggleTheme} />
        ) : (
          <BookingPage onBack={handleNavigateToHome} theme={theme} />
        )}
      </div>
    </div>
  );
}
