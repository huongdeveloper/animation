
const Close = () => {
    return (
        <svg className="mt-3" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_3704_6111)">
                <circle cx="26" cy="26" r="26" fill="white" fillOpacity="0.2" />
            </g>
            <path d="M32 32L26 26M26 26L20 20M26 26L32 20M26 26L20 32" stroke="#A9A9A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <filter id="filter0_b_3704_6111" x="-4" y="-4" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3704_6111" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3704_6111" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export default Close