
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

declare function gtag(...args: any[]): void;

export const metadata: Metadata = {
  title: 'CaboCine | FICLosCabos',
  description: 'El portal al destino y al cine. Explora la programación, compra boletos y conecta con la industria cinematográfica en Los Cabos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1799745110909619');
          fbq('track', 'PageView');
        `}} />
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
               src="https://www.facebook.com/tr?id=1799745110909619&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SPNV1KVWNX"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SPNV1KVWNX');
        `}} />
        {/* End Google tag */}

        {/* Google tag (gtag.js) for Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17633221839"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17633221839');
        `}} />
        {/* End Google tag for Ads */}

        <script dangerouslySetInnerHTML={{ __html: `
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-17633221839/JcbPCLCIoaobEM-5lthB',
                'event_callback': callback
            });
            return false;
          }
        `}} />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
