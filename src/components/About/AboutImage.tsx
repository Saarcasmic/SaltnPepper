export function AboutImage() {
  return (
    <div className="relative w-full h-full group">
      {/* Main image with 3D hover effect */}
    <div className="relative h-full transition-transform duration-500 ease-out transform hover:scale-[1.02]">
        <img
            src="https://i.ibb.co/Csy917F/Screenshot-2025-01-02-231104-removebg-preview.png"
            alt="Chef portrait"
            className="rounded-2xl shadow-2xl object-contain w-full h-full"
        />
        
        {/* Animated decorative elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24">
            <div className="absolute inset-0 bg-amber-100 rounded-full animate-spin-slow opacity-70" />
        </div>
        
        <div className="absolute -bottom-6 -left-6 w-20 h-20">
            <div className="absolute inset-0 bg-orange-100 rounded-full animate-bounce-slow opacity-70" />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-2xl" />
        </div>

      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-30 scale-105 blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-100/50 rounded-2xl" />
      </div>
    </div>
  );
}