import './globals.css';
import Header from '@/components/common/header/Header';
import Footer from '@/components/common/footer/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<div className='wrap'>
					<Header />
					<main>
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
