import type { Config } from 'tailwindcss'




const config: Config = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'regal-green': '#53c28b'
      },
      keyframes:{
        move:{
          'from':{transform:'translateY(-15px)'},
          'to':{transform:'translateY(0px) scale(1.03)'}
        }
      },
      animation:{
        move:'move 3s infinite ease alternate',
      },
      backgroundImage: {
        'illustration': "url('/images/illustration.png')",
        'apps': "url('/images/apps.jpg')",
        'websites': "url('/images/websites.jpg')",
      }

    },
  },
  plugins: [],
}
export default config
