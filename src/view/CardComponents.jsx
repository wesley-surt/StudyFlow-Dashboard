import '../css-bootstrap-custom/card.css'

function Card({ children, className = '', customizedStyle={} }) {
  
  return (
    <div style={{...customizedStyle}} className={`p-4 custom-bg-card custom-rounded-xl custom-text-light ${className}`}>
      { children }
    </div>
  )
}

function CardHeader({ children, className = '', customizedStyle={} }) {
  return (
    <div style={{...customizedStyle}} className={className}>
      { children }
    </div>
  )
}

function CardTitle({ children, className = '', customizedStyle={} }) {
  return (
    <h5 style={{...customizedStyle}} className={`${className}`}>
      { children }
    </h5>
  )
}

function CardDescription({ children, className = '', customizedStyle }) {
  return (
    <p style={{...customizedStyle}} className={className}>
      { children }
    </p>
  )
}

function CardContent({ children, className = '', customizedStyle={} }) {
  return (
    <div style={{...customizedStyle}} className={`${className}`}>
      { children }
    </div>
  )
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
};