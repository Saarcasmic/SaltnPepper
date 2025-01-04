interface MapProps {
    className?: string;
  }
  
  const Map: React.FC<MapProps> = ({ className = '' }) => {
    return (
      <div className="w-full h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Salt+And+Pepper+Learn+to+Cook,Agra+India"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Salt And Pepper Store Location"
          className={`grayscale hover:grayscale-0 transition-all duration-300 ${className}`}
          onError={(e) => {
            console.error('Map loading error:', e);
          }}
        />
      </div>
    );
  };
  
  export default Map;