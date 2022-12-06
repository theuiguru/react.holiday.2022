import AboutLayout from '/app/about/layout';
import AboutPage from '/app/about/page';

export default function RootLayout({ children }) {
  return (
    <AboutLayout>
      <AboutPage/>
    </AboutLayout>
  )
}
