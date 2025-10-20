export default function LabelInput({ name, label, type = "text", value, callback, placeholder = "", className = "" }) {
    return (
        <>
            <div className="d-flex flex-column gap-2">
                <label htmlFor="target-date" className="d-flex gap-2 fs-6 lh-1 fw-semibold user-select-none custom-group-disabled custom-peer-disabled text-start">
                    {label}
                </label>
                <input
                id="target-date"
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={callback}
                className={`p-2 rounded-3 ${className}`}
                style={{backgroundColor: '#2F323B', borderColor: '#5233CB', color: '#EFF0F4'}}
                />
            </div>
        </>
    )
}