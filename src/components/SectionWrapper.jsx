

export default function SectionWrapper({ id, className, children }) {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-24 flex flex-col justify-center w-full max-w-7xl mx-auto px-6 sm:px-8 relative ${className || ""}`}
    >
      <div className="w-full">
        {children}
      </div>
    </section>
  );
}
