
import React, { useState, useEffect } from 'react';
// import './Preloader.css'; // Import your preloader styles

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate the loading process, you can replace this with your actual loading logic
      setLoading(false);
    }, 2999); // Adjust the timeout based on your loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${loading ? 'visible' : 'hidden'}`}>
      {/* Your preloader content (e.g., spinner, loading animation) */}
    

  <div className="k">
<svg viewBox="0 0 1420 300">
	<text  >
  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
	</text>
</svg>	
  <h1 className='u'>شُروع اَللہ کے پاک نام سے جو بڑا مہر بان نہايت رحم والا ہے </h1>
  <h1 className='u'>In The Name of God, Most Gracious, Most Merciful</h1>
  </div>
    </div>
  );
};

export default Preloader;

