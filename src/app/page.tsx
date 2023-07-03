import { redirect } from 'next/navigation';

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect('/en');
}

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1>hello world</h1>
//     </main>
//   );
// }
