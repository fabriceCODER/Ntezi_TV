# NTEZE TV Website

A modern, responsive website for NTEZE TV Ministry, built with React and TypeScript. This platform serves as a digital presence for sharing biblical teachings and connecting with the faith community.

## 🚀 Features

- **Modern Design**: Clean and professional interface with a focus on user experience
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with performance and accessibility in mind
- **Interactive Elements**: Smooth animations and transitions
- **Social Integration**: Direct links to YouTube and X (Twitter) platforms

## 🛠️ Tech Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ntezetv-website.git
cd ntezetv-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🔧 Configuration

The website uses a configuration object in `src/pages/Index.tsx` that includes:

```typescript
const config = {
  youtubeApiKey: 'YOUR_YOUTUBE_API_KEY',
  channelId: 'YOUR_CHANNEL_ID',
  channelName: 'NTEZE TV',
  youtuberName: 'NTEZE TV Ministry',
  channelUrl: 'https://www.youtube.com/@NTEZETV',
  xHandle: '@ntezetv',
  xUrl: 'https://x.com/ntezetv',
  niche: 'Biblical Teaching & Spiritual Growth'
};
```

## 🎨 Customization

### Colors
The website uses a custom color scheme:
- Primary: Amber/Gold (#F59E0B)
- Background: Dark gradient (slate-900 to purple-900)
- Text: White and gray shades

### Components
The website is built using modular components that can be easily customized:
- Hero Section
- Feature Cards
- About Section
- Footer

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile devices
- Tablets
- Desktop screens
- Large displays

## 🚀 Deployment

The website can be deployed to any static hosting service. Recommended platforms:
- Vercel
- Netlify
- GitHub Pages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please contact the NTEZE TV Ministry team.

---

Built with ❤️ for NTEZE TV Ministry
