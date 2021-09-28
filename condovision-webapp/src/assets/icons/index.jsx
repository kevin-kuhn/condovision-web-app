import React from "react"

export const ArrowIcon = ({ size = 5 }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={`h-${size} w-${size}`}
		viewBox='0 0 20 20'
		fill='currentColor'
	>
		<path
			fillRule='evenodd'
			d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
			clipRule='evenodd'
		/>
	</svg>
)

export const CameraIcon = ({ size = 6 }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={`h-${size} w-${size}`}
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
		/>
	</svg>
)

export const EletricIcon = ({ size = 6 }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={`h-${size} w-${size}`}
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M13 10V3L4 14h7v7l9-11h-7z'
		/>
	</svg>
)

export const FireIcon = ({ size = 6 }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={`h-${size} w-${size}`}
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
		/>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
		/>
	</svg>
)

export const PhoneIcon = ({ size = 6 }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={`h-${size} w-${size}`}
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
		/>
	</svg>
)

export const VideoIcon = ({ size = 6 }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className='feather feather-monitor'
	>
		<rect x='2' y='3' width='20' height='14' rx='2' ry='2'></rect>
		<line x1='8' y1='21' x2='16' y2='21'></line>
		<line x1='12' y1='17' x2='12' y2='21'></line>
	</svg>
)

export const EngineIcon = ({ size = 6 }) => (
	<svg
		enableBackground='new 0 0 50 50'
		fill='currentColor'
		height={size}
		id='Layer_1'
		version='1.1'
		viewBox='0 0 50 50'
		width={size}
	>
		<rect fill='none' height='50' width='50' />
		<polyline
			fill='none'
			points='30,14 30,10   35,10 35,6 21,6 21,10 26,10 26,14 '
			stroke='currentColor'
			strokeLinejoin='round'
			strokeMiterlimit='10'
			strokeWidth='3'
		/>
		<polyline
			fill='none'
			points='9,27 5,27 5,21   1,21 1,37 5,37 5,31 9,31 '
			stroke='currentColor'
			strokeLinejoin='round'
			strokeMiterlimit='10'
			strokeWidth='3'
		/>
		<path
			d='  M45,20v5h-3v-8.157C42,15.826,41.189,15,40.191,15H19.99c-0.479,0-0.941,0.195-1.28,0.542L14,21h-3c-1,0-2,1-2,2v12  c0,1.018,1.002,2,2,2h3l4.712,5.461C19.051,42.806,19.511,43,19.99,43h12.855c0.479,0,0.939-0.194,1.278-0.539l7.346-7.482  c0.341-0.346,0.53-0.814,0.53-1.303V31h3v5h4V20H45z'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit='10'
			strokeWidth='3'
		/>
		<polygon points='32,28 24,39 27,30 22,30 27,20 32,20 27,28 ' />
	</svg>
)

export const IpIcon = ({ size = 6 }) => (
	<svg
		version='1.0'
		xmlns='http://www.w3.org/2000/svg'
		width={size}
		height={size}
		viewBox='0 0 512.000000 512.000000'
		preserveAspectRatio='xMidYMid meet'
	>
		<g
			transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
			fill='currentColor'
			stroke='none'
		>
			<path
				d='M1048 4940 c-20 -11 -50 -36 -65 -57 l-28 -36 -3 -476 c-2 -262 0
-491 3 -509 3 -18 20 -49 38 -69 62 -71 27 -68 775 -71 l672 -3 0 -184 0 -185
-721 -2 -721 -3 -24 -28 c-24 -28 -24 -28 -24 -278 l0 -249 -147 0 c-164 0
-207 -8 -254 -47 -68 -58 -69 -62 -69 -518 0 -456 1 -460 69 -518 47 -39 90
-47 254 -47 l147 0 0 -190 0 -189 -42 -11 c-200 -50 -363 -214 -412 -411 -70
-286 93 -578 376 -670 58 -19 93 -23 173 -23 164 1 289 57 404 179 133 143
180 328 131 519 -27 107 -63 169 -145 252 -73 73 -175 133 -262 154 l-43 11 0
189 0 188 168 4 c161 3 169 4 214 30 32 19 52 41 67 71 20 42 21 57 21 462 0
405 -1 420 -21 462 -15 30 -35 52 -67 71 -45 26 -53 27 -209 30 l-163 4 0 184
0 184 650 0 650 0 0 -184 0 -184 -162 -4 c-183 -3 -204 -10 -262 -81 l-31 -39
-3 -421 c-3 -471 -2 -478 63 -536 49 -42 91 -51 253 -51 l142 0 -2 -192 -3
-192 -45 -11 c-132 -35 -283 -156 -347 -280 -135 -259 -50 -574 199 -735 88
-57 185 -85 298 -84 148 1 270 49 378 149 185 171 232 426 121 660 -62 131
-221 260 -366 295 l-43 11 0 189 0 188 168 4 c153 3 170 5 207 26 22 13 52 39
65 59 l25 37 0 441 0 441 -25 37 c-13 20 -43 46 -65 59 -37 21 -54 23 -207 26
l-168 4 0 184 0 184 660 0 660 0 0 -185 0 -185 -147 0 c-169 0 -209 -8 -260
-53 -63 -56 -63 -53 -63 -512 0 -459 0 -456 63 -512 51 -45 91 -53 260 -53
l147 0 -1 -142 c0 -79 -4 -165 -7 -192 -7 -49 -8 -50 -52 -61 -92 -24 -163
-66 -241 -144 -117 -117 -169 -237 -169 -393 0 -199 93 -369 261 -478 215
-139 505 -107 688 77 123 124 178 263 167 423 -11 162 -71 290 -186 393 -54
49 -170 111 -237 127 l-43 11 0 189 0 190 148 0 c168 0 208 8 259 53 63 56 63
53 63 512 0 459 0 456 -63 512 -51 45 -91 53 -259 53 l-148 0 0 251 0 251 -29
29 -29 29 -721 0 -721 0 0 185 0 184 678 3 c533 2 683 6 707 16 43 19 75 51
96 97 17 37 19 74 19 510 0 435 -2 473 -19 510 -22 48 -44 69 -94 90 -32 13
-203 15 -1484 15 -1416 -1 -1449 -1 -1485 -20z m2892 -325 l0 -155 -516 0
c-568 0 -569 0 -594 -61 -14 -34 -8 -67 19 -100 l19 -24 536 -3 536 -3 0 -179
0 -180 -1402 2 -1403 3 -3 428 -2 427 1405 0 1405 0 0 -155z m-2520 -2390 l0
-375 -375 0 -375 0 0 375 0 375 375 0 375 0 0 -375z m1500 0 l0 -375 -375 0
-375 0 0 375 0 375 375 0 375 0 0 -375z m1500 0 l0 -375 -375 0 -375 0 0 375
0 375 375 0 375 0 0 -375z m-3286 -1140 c116 -30 214 -119 256 -233 31 -81 25
-204 -12 -285 -50 -107 -156 -187 -278 -209 -157 -30 -329 61 -398 210 -38 80
-43 203 -12 285 42 113 139 201 253 232 69 18 120 18 191 0z m1562 -24 c77
-36 143 -101 181 -179 25 -51 28 -68 28 -157 0 -89 -3 -106 -28 -157 -102
-208 -359 -279 -547 -150 -104 71 -161 179 -161 307 0 274 279 452 527 336z
m1489 5 c74 -34 119 -71 161 -133 86 -129 86 -287 0 -416 -112 -167 -339 -214
-508 -106 -228 146 -228 482 0 628 102 65 240 76 347 27z'
			/>
			<path
				d='M2503 4445 c-62 -27 -74 -106 -22 -149 41 -35 83 -34 120 3 38 38 39
87 4 125 -13 14 -28 26 -34 26 -5 0 -15 2 -23 5 -7 2 -27 -2 -45 -10z'
			/>
		</g>
	</svg>
)

export const SirenIcon = ({ size = 6 }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={`$h-${size} w-${size}`}
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
		/>
	</svg>
)

export const MobileIcon = ({ size = 6 }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={`h-${size} w-${size}`}
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
		/>
	</svg>
)

export const FacebookIcon = ({ size = 6 }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className='feather feather-facebook'
	>
		<path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
	</svg>
)

export const MailIcon = ({ size = 6 }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className='feather feather-mail'
	>
		<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
		<polyline points='22,6 12,13 2,6'></polyline>
	</svg>
)

export const Video2Icon = ({ size = 6 }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className='feather feather-video'
	>
		<polygon points='23 7 16 12 23 17 23 7'></polygon>
		<rect x='1' y='5' width='15' height='14' rx='2' ry='2'></rect>
	</svg>
)

export const MapPinIcon = ({ size = 6 }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className='feather feather-map-pin'
	>
		<path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
		<circle cx='12' cy='10' r='3'></circle>
	</svg>
)

export const YoutubeIcon = ({ size = 6 }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className='feather feather-youtube'
	>
		<path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z'></path>
		<polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02'></polygon>
	</svg>
)

export const InstagramIcon = ({ size = 6 }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className='feather feather-instagram'
	>
		<rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
		<path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
		<line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
	</svg>
)

export const WhatsAppIcon = ({ size = 6 }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='currentColor'
		width={size}
		height={size}
		viewBox='0 0 24 24'
	>
		<path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
	</svg>
)

export const HelmetIcon = ({ size = 25 }) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 512.000000 512.000000'
		preserveAspectRatio='xMidYMid meet'
	>
		<g
			transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
			fill='currentColor'
			stroke='none'
		>
			<path
				d='M1892 4493 c-18 -9 -43 -30 -55 -47 -20 -29 -22 -40 -18 -151 2 -66
5 -139 5 -163 l1 -43 -96 -38 c-194 -76 -427 -213 -589 -345 -409 -334 -693
-801 -794 -1306 -27 -133 -46 -303 -46 -409 0 -106 -62 -181 -150 -181 -50 0
-107 -35 -130 -80 -18 -35 -20 -59 -20 -220 0 -249 -1 -246 180 -330 271 -124
696 -277 1013 -364 885 -244 1582 -267 2417 -80 425 95 897 251 1300 431 155
69 166 77 191 124 17 34 19 60 19 219 0 161 -2 185 -20 220 -23 45 -80 80
-130 80 -17 0 -49 9 -70 20 -54 28 -80 80 -80 162 0 299 -90 664 -236 957
-253 509 -665 889 -1192 1101 -51 21 -95 40 -98 43 -3 3 0 70 7 150 12 144 12
145 -12 187 -47 84 -10 80 -729 80 -564 0 -639 -2 -668 -17z m1103 -310 c-3
-16 -35 -393 -71 -838 -65 -793 -67 -812 -49 -848 37 -78 126 -107 204 -68 76
39 75 31 131 712 27 334 50 614 50 623 0 14 5 14 50 -4 83 -33 231 -110 236
-123 2 -7 -16 -257 -41 -555 -50 -601 -51 -580 14 -635 55 -46 123 -49 180 -8
55 39 58 58 98 540 21 248 41 451 44 451 12 0 178 -171 239 -245 182 -223 323
-511 389 -795 29 -122 40 -205 51 -375 5 -82 13 -162 16 -178 l6 -27 -1982 0
-1982 0 6 27 c4 16 11 97 16 180 11 169 21 246 51 373 66 285 206 571 393 800
61 75 222 240 235 240 3 0 23 -203 44 -451 40 -482 43 -501 98 -540 57 -41
125 -38 180 8 65 55 64 34 14 635 -25 298 -43 548 -41 555 5 13 153 90 236
123 36 14 50 16 50 7 0 -6 23 -289 51 -627 56 -678 54 -666 125 -708 76 -45
172 -14 209 67 17 40 17 50 -49 848 -36 444 -68 820 -71 836 l-4 27 439 0 440
0 -5 -27z m1825 -2701 c0 -27 -7 -31 -152 -92 -789 -327 -1574 -496 -2208
-477 -575 18 -1262 176 -1916 441 -254 102 -244 97 -244 129 l0 27 2260 0
2260 0 0 -28z'
			/>
		</g>
	</svg>
)
