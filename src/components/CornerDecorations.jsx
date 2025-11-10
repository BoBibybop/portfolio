import './CornerDecorations.css'

function CornerDecorations() {
  return (
    <>
      {/* Corner decorations */}
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration top-right"></div>
      <div className="corner-decoration bottom-left"></div>
      <div className="corner-decoration bottom-right"></div>
      
      {/* Circular decorations - J.A.R.V.I.S. style */}
      <div className="circular-decoration top-center"></div>
      <div className="circular-decoration bottom-center"></div>
      <div className="circular-decoration left-center"></div>
      <div className="circular-decoration right-center"></div>
      
      {/* Floating particles */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      
      {/* Scanning lines */}
      <div className="scan-line horizontal"></div>
      <div className="scan-line vertical"></div>
    </>
  )
}

export default CornerDecorations
