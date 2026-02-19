
import React, { useEffect, useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';

const SocialMediaCreative: React.FC = () => {
	const [htmlContent, setHtmlContent] = useState<string>('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchContent = async () => {
			try {
				const response = await fetch('/html/social-media-creative-fragment.html');
				if (response.ok) {
					const html = await response.text();

					// Optional: Fix internal links if necessary
					// html = html.replace(/href="\/social-media-creative\.html"/g, 'href="/social-media-creative"');

					setHtmlContent(html);
				} else {
					console.error('Failed to load HTML fragment');
				}
			} catch (error) {
				console.error('Error loading content:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchContent();

		// Inject CSS
		const cssFiles = [
			'/_astro/elysia.Ba-Vcanz.css',
			'/_astro/_path_.BAMHH4mQ.css',
			'/_astro/_slug_.r9Bj-ZSG.css',
			'/_astro/album.T2_Jql_Y.css',
			'/_astro/_slug_.DBMp0hqV.css',
			'/_astro/album.Cmvz6cBO.css',
			'/_astro/_path_.DiW8k6hf.css'
		];

		const links: HTMLLinkElement[] = [];
		cssFiles.forEach(href => {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = href;
			document.head.appendChild(link);
			links.push(link);
		});

		// Inject JS
		// We need to inject the collected astro init script and the module scripts
		// Module scripts need type="module"
		const jsModules = [
			'/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CON9sG30.js',
			'/_astro/page.BgmgLP1E.js'
		];

		const scripts: HTMLScriptElement[] = [];

		// 1. Astro Init (sync)
		const initScript = document.createElement('script');
		initScript.src = '/astro-init.js';
		initScript.async = false;
		document.head.appendChild(initScript);
		scripts.push(initScript);

		// 2. Modules
		jsModules.forEach(src => {
			const script = document.createElement('script');
			script.type = 'module';
			script.src = src;
			document.head.appendChild(script);
			scripts.push(script);
		});

		// 3. Set Theme and Styles
		const originalTheme = document.documentElement.dataset.theme;
		document.documentElement.dataset.theme = 'elysia';

		const style = document.createElement('style');
		style.textContent = `
            astro-island, astro-slot, astro-static-slot { display: contents; }
            ._dotsContainer_1734u_1{transform:var(--dots-tx)}._activeMovingDot_1734u_5{left:var(--dots-space);right:calc(-1 * var(--dots-space))}._activeMovingBackDot_1734u_10{left:calc(-1 * var(--dots-space));right:var(--dots-space)}
            /* Force exact original body styles on the wrapper */
            .superside-wrapper {
                min-height: 100%;
                -webkit-font-smoothing: antialiased;
                font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            }
        `;
		document.head.appendChild(style);

		return () => {
			// Cleanup injected resources
			links.forEach(link => link.remove());
			scripts.forEach(script => script.remove());
			style.remove();

			if (originalTheme) {
				document.documentElement.dataset.theme = originalTheme;
			} else {
				delete document.documentElement.dataset.theme;
			}
		};
	}, []);

	return (
		<MainLayout>
			{loading ? (
				<div className="flex justify-center items-center h-screen">Loading...</div>
			) : (
				<div
					className="superside-wrapper bg-bor-background text-bor-foreground light overflow-x-hidden font-sans min-h-full text-base leading-[1.5] normal-nums antialiased"
					data-mood="light"
					dangerouslySetInnerHTML={{ __html: htmlContent }}
				/>
			)}
		</MainLayout>
	);
};

export default SocialMediaCreative;
