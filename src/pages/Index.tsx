import { useState, useEffect } from 'react';
import { ExternalLink, Youtube, Twitter, Users, BookOpen, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  // Configuration - Replace these with your actual details
  const config = {
    youtubeApiKey: 'AIzaSyC9E8caGzkhG_83ni1PDGZa2M87Um7scEU',
    channelId: 'UCYourChannelIdHere', // Replace with actual channel ID
    channelName: 'NTEZE TV',
    youtuberName: 'NTEZE TV Ministry',
    channelUrl: 'https://www.youtube.com/@NTEZETV',
    xHandle: '@ntezetv', // Replace with actual X handle
    xUrl: 'https://x.com/ntezetv', // Replace with actual X URL
    niche: 'Biblical Teaching & Spiritual Growth'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-amber-900/20"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-8">
              <BookOpen className="w-24 h-24 text-amber-400" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent mb-6">
              {config.channelName}
            </h1>

            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold mb-4">
                Teaching the Word of God & Biblical Knowledge
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Join us on a transformative spiritual journey as we explore the depths of Scripture,
                grow in faith, and discover God's purpose for your life through comprehensive
                biblical teachings and practical life applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <BookOpen className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Biblical Teaching</h3>
                <p className="text-gray-400">In-depth scripture study and interpretation</p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <Heart className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Spiritual Growth</h3>
                <p className="text-gray-400">Guidance for personal faith development</p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <Users className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
                <p className="text-gray-400">Join our growing faith community</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open(config.channelUrl, '_blank')}
              >
                <Youtube className="w-6 h-6 mr-2" />
                Subscribe to Channel
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-400 text-amber-400 hover:bg-amber-400/10 px-8 py-4 text-lg transition-all duration-300"
                onClick={() => window.open(config.xUrl, '_blank')}
              >
                <Twitter className="w-6 h-6 mr-2" />
                Follow on X
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-12 h-12 text-amber-400 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              About Our Ministry
            </h2>
          </div>

          <div className="bg-gray-800/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-700">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Welcome to <span className="text-amber-400 font-semibold">{config.youtuberName}</span>,
              where we are dedicated to spreading the Word of God and deepening biblical knowledge.
              Our mission is to help believers grow in their faith through comprehensive scripture study,
              practical life applications, and spiritual guidance.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Whether you're a new believer seeking to understand the foundations of faith or a seasoned
              Christian looking to deepen your relationship with God, our content is designed to inspire,
              educate, and encourage your spiritual journey. Join our community as we explore the
              transformative power of God's Word together.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-amber-400" />
                <span>{config.niche}</span>
              </div>
              <div className="flex items-center">
                <Youtube className="w-5 h-5 mr-2 text-red-500" />
                <span>Weekly Bible Studies</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-2 text-pink-500" />
                <span>Faith Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-12 h-12 text-amber-400" />
            </div>
            <p className="text-gray-400 text-center mb-6">
              Teaching the Word of God and sharing biblical knowledge with the world.
            </p>
            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-red-500 transition-colors"
                onClick={() => window.open(config.channelUrl, '_blank')}
              >
                <Youtube className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                onClick={() => window.open(config.xUrl, '_blank')}
              >
                <Twitter className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-500">
              © 2024 {config.channelName}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
