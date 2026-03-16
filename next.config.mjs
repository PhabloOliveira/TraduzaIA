/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const csp = [
	"default-src 'self'",
	"base-uri 'self'",
	"object-src 'none'",
	"frame-ancestors 'self'",
	"form-action 'self' https:",
	"img-src 'self' data: blob: https:",
	"font-src 'self' data: https:",
	"style-src 'self' 'unsafe-inline'",
	// Next.js commonly relies on inline scripts; hardening with nonces is possible later.
	`script-src 'self' 'unsafe-inline'${isProd ? '' : " 'unsafe-eval'"}`,
	'upgrade-insecure-requests',
].join('; ')

const nextConfig = {
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{ key: 'Content-Security-Policy', value: csp },
					{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
					{ key: 'X-Content-Type-Options', value: 'nosniff' },
					{ key: 'X-Frame-Options', value: 'SAMEORIGIN' },
					{ key: 'X-DNS-Prefetch-Control', value: 'off' },
					{ key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=()',
					},
					// Only meaningful over HTTPS; safe to send always.
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains',
					},
				],
			},
		]
	},
}

export default nextConfig;
