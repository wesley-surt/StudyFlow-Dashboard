export default function ButtonCardLesson({ callback, className, customizedStyle, children }) {
  return (
    <button
    type="button"
    className={`btn d-flex align-items-center justify-content-center p-0 ${className}`}
    style={{
      backgroundColor: '#1CA8DD',
      border: 'none',
      boxShadow: '0 1rem 3rem rgba(0,0,0,.175)',
      transition: 'filter 0.2s',
      ...customizedStyle
    }}
    onMouseOver={e => (e.currentTarget.style.filter = 'brightness(1.15)')}
    onMouseOut={e => (e.currentTarget.style.filter = 'none')}
    onClick={callback}
  >
      { children }
    </button>
  )
}