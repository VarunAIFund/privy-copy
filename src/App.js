import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Stripe Announcement Bar */}
      <div className="bg-blue-600 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <span className="text-sm font-medium">
            <strong className="font-semibold">Privy is joining stripe.</strong> Same product, same team—moving faster, shipping more.
          </span>
          <button className="ml-6 text-sm border border-white/30 px-4 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200 font-medium">
            Learn more →
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold text-black tracking-tight">privy</span>
                <span className="text-sm text-gray-500 font-medium">a stripe company</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors flex items-center space-x-2">
                <span>⚡</span><span>Product</span>
              </a>
              <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors flex items-center space-x-2">
                <span>🔧</span><span>Solutions</span>
              </a>
              <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors flex items-center space-x-2">
                <span>♦</span><span>Pricing</span>
              </a>
              <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors flex items-center space-x-2">
                <span>●</span><span>About</span>
              </a>
              <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">
                Docs →
              </a>
              <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">
                Demo →
              </a>
            </nav>

            {/* Login Button */}
            <button className="border border-gray-300 hover:border-gray-400 px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium text-gray-900">
              Log in
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Colorful background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000' fill-opacity='0.4'%3e%3cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="text-6xl lg:text-7xl font-bold text-black leading-[0.9] tracking-tight">
                  Wallet<br/>
                  infrastructure,<br/>
                  <span className="text-black">for every app.</span>
                </h1>
                
                <p className="text-lg text-gray-700 leading-relaxed font-normal">
                  Privy makes it easy to build on crypto rails. 
                  Securely spin up whitelabel wallets, sign 
                  transactions, and integrate onchain 
                  infrastructure—all through one simple API.
                </p>

                <div className="flex items-center space-x-4 pt-4">
                  <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all duration-200 font-medium text-base">
                    Get started
                  </button>
                  <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium text-gray-900 text-base">
                    Talk to sales →
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Visual Mockup */}
            <div className="relative lg:pl-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Background gradient blob */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-green-200 rounded-3xl transform rotate-6 scale-105 opacity-40"></div>
                
                {/* Main mobile mockup container */}
                <div className="relative bg-white rounded-2xl shadow-2xl p-6 mx-auto max-w-sm">
                  {/* Mobile screen header */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs text-gray-500">12:30</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">●●● ⚡</span>
                  </div>

                  {/* Login modal */}
                  <div className="bg-white border rounded-xl p-4 mb-4">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <h3 className="font-semibold text-sm">Login or sign up</h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-3 flex items-center space-x-3">
                        <div className="text-xs">✉️</div>
                        <span className="text-xs text-gray-600">som@white.so</span>
                        <div className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded">Submit</div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-3 flex items-center space-x-3">
                        <div className="text-xs">🔍</div>
                        <span className="text-xs text-gray-600">Google</span>
                        <span className="ml-auto text-xs text-gray-400">Recent</span>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-3 flex items-center space-x-3">
                        <div className="text-xs">🦊</div>
                        <span className="text-xs text-gray-600">MetaMask</span>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-3 flex items-center space-x-3">
                        <div className="text-xs">🔑</div>
                        <span className="text-xs text-gray-600">Passkey</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <span className="text-xs text-gray-500">Protected by ● privy</span>
                    </div>
                  </div>
                </div>

                {/* Wallet dashboard sidebar mockup */}
                <div className="absolute -right-8 top-12 bg-white rounded-xl shadow-xl p-4 w-64 transform rotate-2">
                  <div className="mb-3">
                    <h4 className="font-semibold text-sm mb-2">Wallets</h4>
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                      <span>Total balance</span>
                      <span>Transaction count</span>
                    </div>
                    <div className="flex items-center justify-between text-sm font-semibold mb-3">
                      <span>19.6M</span>
                      <span>134.2M</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-xs text-gray-600 mb-1">Transaction volume</div>
                    <div className="text-sm font-semibold">$667.2M</div>
                  </div>
                  
                  {/* Mini chart representation */}
                  <div className="h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded mb-4 flex items-end px-2 pb-1">
                    <div className="bg-blue-400 w-1 h-2 mr-1 rounded-t-sm"></div>
                    <div className="bg-blue-500 w-1 h-4 mr-1 rounded-t-sm"></div>
                    <div className="bg-blue-600 w-1 h-6 mr-1 rounded-t-sm"></div>
                    <div className="bg-purple-500 w-1 h-8 mr-1 rounded-t-sm"></div>
                    <div className="bg-purple-600 w-1 h-5 mr-1 rounded-t-sm"></div>
                  </div>
                  
                  {/* Wallet list */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Wallet</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>Chain</span>
                        <span>Policy</span>
                      </div>
                    </div>
                    {Array.from({length: 5}).map((_, i) => (
                      <div key={i} className="flex items-center justify-between py-1 text-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <span className="text-gray-600">0x123...8764</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-500">
                          <span>ETH</span>
                          <span>Administrator</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gray-500 mb-16 font-medium text-lg">Powering 75M+ accounts for 1,000+ teams.</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-40">
            <div className="text-xl font-bold text-gray-700">Jupiter</div>
            <div className="text-xl font-bold text-gray-700">farcaster</div>
            <div className="text-xl font-bold text-gray-700">stripe</div>
            <div className="text-xl font-bold text-gray-700">Hyperliquid</div>
            <div className="text-xl font-bold text-gray-700">BLACKBIRD</div>
            <div className="text-xl font-bold text-gray-700">PUMP.FUN</div>
            <div className="text-xl font-bold text-gray-700">lightspark</div>
            <div className="text-xl font-bold text-gray-700">OpenSea</div>
            <div className="text-xl font-bold text-gray-700">ProofofPlay</div>
          </div>
        </div>
      </section>

      {/* Unlock Crypto Rails Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.1'%3e%3cpath d='M20 20L30 10L20 0L10 10z M20 20L30 30L20 40L10 30z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
          }}></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-4 h-4 border-2 border-white/20 rotate-45"></div>
        <div className="absolute top-40 right-32 w-6 h-6 border-2 border-white/10 rotate-12"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-white/10 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-8 h-8 border border-white/10 rounded-full"></div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Unlock crypto rails.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're building in-app wallets or launching your own fleet, we 
              help you meet users where they are.
            </p>
            <div className="pt-6">
              <button className="border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 font-medium text-lg">
                Get setup in 9 minutes →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-4 h-4 border-2 border-white/10 rotate-45"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 border border-white/10 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Privy powers hardware-secured, SOC 2-compliant wallets for any user—across EVM, 
                  Solana, Bitcoin, and more. Built on TEEs and distributed key sharding, with passkey and 
                  hardware token support for iron-clad wallets.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-white text-sm">$</span>
                    </div>
                    <span className="text-white font-medium">Gas sponsorship</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-white text-sm">👥</span>
                    </div>
                    <span className="text-white font-medium">Global user accounts</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-white text-sm">🔒</span>
                    </div>
                    <span className="text-white font-medium">Server-side sessions</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-white text-sm">📊</span>
                    </div>
                    <span className="text-white font-medium">Wallet and transaction analytics</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button className="text-white border border-white/30 px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium">
                    Learn more →
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Dashboard Mockup */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Main dashboard container */}
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-1">
                  <div className="bg-white rounded-xl p-6">
                    {/* Dashboard header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-black font-semibold text-lg">Dashboard</h4>
                        <p className="text-gray-500 text-sm">Wallet Analytics</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* Stats cards */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-600 mb-1">Total wallets</div>
                        <div className="font-bold text-lg text-black">18.8M</div>
                        <div className="text-xs text-green-600">↗ 4%</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-600 mb-1">Transaction volume</div>
                        <div className="font-bold text-lg text-black">$639.4M</div>
                        <div className="text-xs text-green-600">↗ 15%</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-600 mb-1">Active policies</div>
                        <div className="font-bold text-lg text-black">27</div>
                      </div>
                    </div>

                    {/* Wallet list header */}
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                      <div className="flex items-center space-x-8">
                        <span>Wallet</span>
                        <span>Chain</span>
                        <span>Policy</span>
                        <span>App</span>
                      </div>
                    </div>

                    {/* Wallet entries */}
                    <div className="space-y-2">
                      {[
                        { chain: 'SVM', policy: 'AdminAccess', app: 'B2B' },
                        { chain: 'EVM', policy: 'TestWallet', app: 'C2B' },
                        { chain: 'EVM', policy: 'US_KYC', app: 'D2B' },
                        { chain: 'SVM', policy: 'EnterpriseUser', app: 'F2B' },
                        { chain: 'BTC', policy: 'EnterpriseUser', app: 'G2B' },
                        { chain: 'XLM', policy: 'US_KYC', app: 'H2B' },
                        { chain: 'SVM', policy: 'US_NON_KYC', app: 'I2B' }
                      ].map((wallet, i) => (
                        <div key={i} className="flex items-center text-xs py-2">
                          <div className="flex items-center space-x-3 flex-1">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="text-gray-600 font-mono">0x{Math.random().toString(36).substr(2, 3)}...{Math.random().toString(36).substr(2, 4)}</span>
                          </div>
                          <div className="flex items-center space-x-8 text-gray-500">
                            <div className="flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full ${
                                wallet.chain === 'SVM' ? 'bg-purple-400' : 
                                wallet.chain === 'EVM' ? 'bg-blue-400' : 
                                wallet.chain === 'BTC' ? 'bg-orange-400' : 'bg-gray-400'
                              }`}></div>
                              <span>{wallet.chain}</span>
                            </div>
                            <span>{wallet.policy}</span>
                            <span>{wallet.app}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Secure by design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gray-900/50 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300"
            >
              <div className="mb-8">
                {/* Security icon visualization */}
                <div className="relative w-20 h-20 mx-auto">
                  <div className="absolute inset-0 border-2 border-gray-600 rounded-lg transform rotate-12"></div>
                  <div className="absolute inset-2 border-2 border-gray-500 rounded-lg transform -rotate-6"></div>
                  <div className="absolute inset-4 bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border border-gray-600 rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Secure by design</h3>
              <p className="text-gray-300 leading-relaxed">
                Privy combines key sharding and multiparty computation with hardware security modules, 
                giving you bank-grade security for every wallet operation.
              </p>
            </motion.div>

            {/* Whitelabel and modular */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900/50 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300"
            >
              <div className="mb-8">
                {/* Modular icon visualization */}
                <div className="relative w-20 h-20 mx-auto">
                  <div className="absolute top-0 left-0 w-8 h-8 border-2 border-gray-600 rounded"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-2 border-gray-600 rounded"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-2 border-gray-600 rounded"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-2 border-gray-600 rounded"></div>
                  <div className="absolute inset-6 bg-gray-700 rounded flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-1 h-1 bg-gray-400"></div>
                      <div className="w-1 h-1 bg-gray-400"></div>
                      <div className="w-1 h-1 bg-gray-400"></div>
                      <div className="w-1 h-1 bg-gray-400"></div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Whitelabel and modular</h3>
              <p className="text-gray-300 leading-relaxed">
                From APIs to modular components, Privy adapts to your tech stack. 
                Build custom flows while we handle the complex infrastructure.
              </p>
            </motion.div>

            {/* Scales as you grow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-900/50 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300"
            >
              <div className="mb-8">
                {/* Scale icon visualization */}
                <div className="relative w-20 h-20 mx-auto">
                  <div className="absolute inset-0 border-2 border-gray-600 rounded-lg transform scale-50 opacity-30"></div>
                  <div className="absolute inset-0 border-2 border-gray-500 rounded-lg transform scale-75 opacity-60"></div>
                  <div className="absolute inset-0 border-2 border-gray-400 rounded-lg"></div>
                  <div className="absolute inset-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Scales as you grow</h3>
              <p className="text-gray-300 leading-relaxed">
                The complete embedded wallet infrastructure that grows with your business. 
                From startup to enterprise, we handle millions of transactions seamlessly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Low-level Key Management Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.1'%3e%3cpath d='M20 20L30 10L20 0L10 10z M20 20L30 30L20 40L10 30z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
          }}></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-32 left-16 w-4 h-4 bg-white/10 rotate-45"></div>
        <div className="absolute bottom-20 right-32 w-6 h-6 border-2 border-white/10 rotate-12"></div>
        <div className="absolute top-40 right-1/4 w-2 h-2 bg-white/20 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  Low-level key<br/>
                  management.
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Manage fleets of secure wallets within hardware-isolated TEEs, enforce compliance 
                  through programmable policies, and automate onchain actions at scale—all with 
                  lightning-fast, reliable performance.
                </p>
              </motion.div>
            </div>

            {/* Right Code Snippet */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Code editor mockup */}
                <div className="bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-2xl p-1">
                  <div className="bg-gray-900 rounded-xl overflow-hidden">
                    {/* Editor header */}
                    <div className="bg-gray-800 px-4 py-3 flex items-center space-x-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-gray-400 text-sm">wallet-setup.js</div>
                    </div>
                    
                    {/* Code content */}
                    <div className="p-6 font-mono text-sm">
                      <div className="space-y-1">
                        <div>
                          <span className="text-purple-400">import</span>{' '}
                          <span className="text-yellow-300">{'{PrivyClient}'}</span>{' '}
                          <span className="text-purple-400">from</span>{' '}
                          <span className="text-green-400">'@privy-io/server-auth'</span>
                          <span className="text-gray-500">;</span>
                        </div>
                        <div className="h-4"></div>
                        <div>
                          <span className="text-purple-400">const</span>{' '}
                          <span className="text-blue-300">privy</span>{' '}
                          <span className="text-white">=</span>{' '}
                          <span className="text-purple-400">new</span>{' '}
                          <span className="text-yellow-300">PrivyClient</span>
                          <span className="text-white">()</span>
                          <span className="text-gray-500">;</span>
                        </div>
                        <div>
                          <span className="text-purple-400">const</span>{' '}
                          <span className="text-blue-300">transaction</span>{' '}
                          <span className="text-white">=</span>{' '}
                          <span className="text-purple-400">await</span>
                        </div>
                        <div className="ml-4">
                          <span className="text-blue-300">privy</span>
                          <span className="text-white">.</span>
                          <span className="text-yellow-300">walletApi</span>
                          <span className="text-white">.</span>
                          <span className="text-yellow-300">rpc</span>
                          <span className="text-white">({`{`}</span>
                        </div>
                        <div className="ml-8">
                          <span className="text-red-300">address</span>
                          <span className="text-white">:</span>{' '}
                          <span className="text-green-400">'0x123'</span>
                          <span className="text-white">,</span>
                        </div>
                        <div className="ml-8">
                          <span className="text-red-300">chainType</span>
                          <span className="text-white">:</span>{' '}
                          <span className="text-green-400">'ethereum'</span>
                          <span className="text-white">,</span>
                        </div>
                        <div className="ml-8">
                          <span className="text-red-300">rpc</span>
                          <span className="text-white">: {`{`}</span>
                        </div>
                        <div className="ml-12">
                          <span className="text-red-300">method</span>
                          <span className="text-white">:</span>{' '}
                          <span className="text-green-400">'eth_sendTransaction'</span>
                          <span className="text-white">,</span>
                        </div>
                        <div className="ml-12">
                          <span className="text-red-300">params</span>
                          <span className="text-white">: [{`{`}</span>
                        </div>
                        <div className="ml-16">
                          <span className="text-red-300">to</span>
                          <span className="text-white">:</span>{' '}
                          <span className="text-green-400">'0xRecipient'</span>
                          <span className="text-white">,</span>
                        </div>
                        <div className="ml-16">
                          <span className="text-red-300">value</span>
                          <span className="text-white">:</span>{' '}
                          <span className="text-green-400">'0x16345785D8A0000'</span>
                        </div>
                        <div className="ml-12">
                          <span className="text-white">{`}`}</span>
                          <span className="text-white">]</span>
                        </div>
                        <div className="ml-8">
                          <span className="text-white">{`}`}</span>
                        </div>
                        <div className="ml-4">
                          <span className="text-white">{`}`}</span>
                          <span className="text-white">)</span>
                          <span className="text-gray-500">;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Integrations Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-4 h-4 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-6 h-6 border-2 border-white/20 rotate-45"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Apple Pay Mockup */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* iPhone mockup */}
                <div className="bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-3xl p-1">
                  <div className="bg-black rounded-2xl p-4">
                    <div className="bg-gray-800 rounded-xl p-6 max-w-sm mx-auto">
                      {/* Status bar */}
                      <div className="flex justify-between items-center mb-6 text-white text-sm">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-1">
                            <div className="w-1 h-3 bg-white rounded"></div>
                            <div className="w-1 h-3 bg-white rounded"></div>
                            <div className="w-1 h-3 bg-white/50 rounded"></div>
                          </div>
                          <span className="ml-2">⚡</span>
                        </div>
                      </div>

                      {/* App icon */}
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white text-2xl">😊</span>
                        </div>
                      </div>

                      {/* Add funds interface */}
                      <div className="bg-white rounded-xl p-4">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                        </div>
                        
                        <div className="text-center mb-6">
                          <h3 className="text-black font-semibold text-lg mb-2">Add funds</h3>
                          <p className="text-gray-500 text-sm">Select a method for funding your (App name) wallet.</p>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
                            <div className="flex items-center space-x-3">
                              <div className="w-6 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded text-white text-xs flex items-center justify-center">💳</div>
                              <span className="text-black text-sm font-medium">Pay with card</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs bg-black text-white px-2 py-1 rounded">🍎Pay</span>
                            </div>
                          </div>
                          
                          <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
                            <div className="flex items-center space-x-3">
                              <div className="w-4 h-4 bg-gray-300 rounded flex items-center justify-center">
                                <span className="text-xs">🏦</span>
                              </div>
                              <span className="text-black text-sm">Bank transfer</span>
                            </div>
                            <span className="text-gray-400">→</span>
                          </div>
                          
                          <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
                            <div className="flex items-center space-x-3">
                              <div className="w-4 h-4 bg-gray-300 rounded flex items-center justify-center">
                                <span className="text-xs">💱</span>
                              </div>
                              <span className="text-black text-sm">Transfer from wallet or exchange</span>
                            </div>
                            <span className="text-gray-400">→</span>
                          </div>
                          
                          <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
                            <div className="flex items-center space-x-3">
                              <div className="w-4 h-4 bg-gray-300 rounded flex items-center justify-center">
                                <span className="text-xs">📨</span>
                              </div>
                              <span className="text-black text-sm">Receive funds</span>
                            </div>
                            <span className="text-gray-400">→</span>
                          </div>
                        </div>
                        
                        <div className="mt-6 text-center">
                          <span className="text-xs text-gray-500">Protected by ● privy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  Powerful<br/>
                  integrations.
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Privy integrates with the best onchain tools to make money move. 
                  Easily integrate swaps, bridges, gas sponsorship and more.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-white text-sm">💱</span>
                    </div>
                    <span className="text-white font-medium">Fiat-to-crypto rails</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-white text-sm">🔄</span>
                    </div>
                    <span className="text-white font-medium">Automated bridging</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-white text-sm">💡</span>
                    </div>
                    <span className="text-white font-medium">Smart wallet signers</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button className="text-white border border-white/30 px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium">
                    Learn more →
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise-grade Security Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.1'%3e%3cpath d='M30 30L40 20L30 10L20 20z M30 30L40 40L30 50L20 40z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
          }}></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-16 w-3 h-3 bg-white/10 rotate-45"></div>
        <div className="absolute bottom-32 right-24 w-5 h-5 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/3 right-16 w-2 h-2 bg-white/20 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              Enterprise-grade security.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
            >
              Security is the backbone across Privy's team, architecture, and workflows. 
              All engineering is security engineering.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Hardware-isolated self custody */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gray-900/50 backdrop-blur rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300"
            >
              <div className="mb-8">
                {/* 3D cube visualization */}
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0">
                    {/* Front face */}
                    <div className="absolute inset-2 border-2 border-gray-400 bg-gray-800/50 transform rotate-12"></div>
                    {/* Top face */}
                    <div className="absolute inset-1 border-2 border-gray-300 bg-gray-700/50 transform -rotate-12 translate-x-1 -translate-y-1"></div>
                    {/* Right face */}
                    <div className="absolute inset-0 border-2 border-gray-500 bg-gray-800/50"></div>
                    {/* Corner points */}
                    <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full"></div>
                    <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-white rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Hardware-isolated self custody</h3>
              <p className="text-gray-300 leading-relaxed">
                Keys are sharded, end-to-end encrypted, and distributed across isolated services. 
                Wallets are only reconstructed in secure hardware environments, ensuring only owners can 
                access their assets.
              </p>
            </motion.div>

            {/* Defense in depth */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300"
            >
              <div className="mb-8">
                {/* Layered security visualization */}
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0">
                    {/* Multiple overlapping shields/layers */}
                    <div className="absolute inset-0 border-2 border-gray-400 rounded-lg bg-gradient-to-br from-gray-700/30 to-gray-800/30"></div>
                    <div className="absolute inset-2 border-2 border-gray-300 rounded-lg bg-gradient-to-br from-gray-600/30 to-gray-700/30"></div>
                    <div className="absolute inset-4 border-2 border-gray-200 rounded-lg bg-gradient-to-br from-gray-500/30 to-gray-600/30"></div>
                    {/* Mountain peaks representing defense layers */}
                    <div className="absolute inset-6 flex items-center justify-center">
                      <svg className="w-8 h-6 text-white opacity-60" viewBox="0 0 32 24" fill="currentColor">
                        <path d="M2 22L8 8L14 16L20 4L26 12L30 22H2Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Defense in depth</h3>
              <p className="text-gray-300 leading-relaxed">
                Secure enclaves protect keys, encrypted networks safeguard data, and RBAC with 
                micro-segmentation enforces least privilege. Privy's defense-in-depth ensures no single 
                point of failure.
              </p>
            </motion.div>

            {/* Compliance and auditing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-900/50 backdrop-blur rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300"
            >
              <div className="mb-8">
                {/* Checklist/audit visualization */}
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0 border-2 border-gray-400 rounded-lg bg-gray-800/50 p-3">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 border border-gray-300 rounded-sm bg-green-500"></div>
                        <div className="w-8 h-0.5 bg-gray-400"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 border border-gray-300 rounded-sm bg-green-500"></div>
                        <div className="w-6 h-0.5 bg-gray-400"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 border border-gray-300 rounded-sm bg-green-500"></div>
                        <div className="w-10 h-0.5 bg-gray-400"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 border border-gray-300 rounded-sm"></div>
                        <div className="w-7 h-0.5 bg-gray-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Compliance and auditing</h3>
              <p className="text-gray-300 leading-relaxed">
                Security leaders from YC, Consensys, and Coinbase are actively involved in whitehat defense 
                of the blockchain ecosystem.
              </p>
            </motion.div>

            {/* Multi-layered protection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-900/50 backdrop-blur rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300"
            >
              <div className="mb-8">
                {/* Shield layers visualization */}
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0">
                    {/* Multiple shield layers */}
                    <div className="absolute inset-0 border-2 border-gray-400 rounded-full bg-gradient-to-br from-gray-700/20 to-gray-800/20"></div>
                    <div className="absolute inset-3 border-2 border-gray-300 rounded-full bg-gradient-to-br from-gray-600/20 to-gray-700/20"></div>
                    <div className="absolute inset-6 border-2 border-gray-200 rounded-full bg-gradient-to-br from-gray-500/20 to-gray-600/20"></div>
                    {/* Central lock icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-4 border-2 border-white rounded-t-md"></div>
                      <div className="absolute bottom-7 w-4 h-3 bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Multi-layered protection</h3>
              <p className="text-gray-300 leading-relaxed">
                Our security approach includes multiple layers of security for your users and their funds.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Audit Badges */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-8"
            >
              Completed audits
            </motion.h3>
            
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {[
                { name: 'Cure 53', date: 'January 2023', logo: '🛡️' },
                { name: 'Zellic', date: 'June 2023', logo: '⚡' },
                { name: 'SwordBytes', date: 'December 2023', logo: '⚔️' },
                { name: 'Doyensec', date: 'February 2024', logo: '🔍' },
                { name: 'SOC 2 Type II', date: 'December 2024', logo: '🏛️' },
                { name: 'Borg Security', date: 'June 2025', logo: '🤖' },
                { name: 'HackerOne', date: 'Bug bounty program', logo: '🏆' }
              ].map((audit, index) => (
                <motion.div
                  key={audit.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-2 group hover:scale-105 transition-transform duration-200"
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-2xl group-hover:bg-gray-700 transition-colors">
                    {audit.logo}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-white">{audit.name}</div>
                    <div className="text-xs text-gray-400">{audit.date}</div>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000' fill-opacity='1'%3e%3cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
          }}></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-6 h-6 border-2 border-black/10 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-4 h-4 bg-black/5 rotate-45"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 border border-black/10 rotate-45"></div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Privy logo pattern */}
            <div className="flex justify-center mb-12">
              <div className="grid grid-cols-5 gap-2">
                <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
              </div>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
              Get started in minutes.<br />
              Go live in hours.
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all duration-200 font-semibold text-lg">
                Get started
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-xl hover:bg-black hover:text-white transition-all duration-200 font-semibold text-lg">
                Talk to us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000' fill-opacity='1'%3e%3cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
          }}></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-black/5 rotate-45"></div>
        <div className="absolute bottom-20 left-16 w-3 h-3 border border-black/10 rotate-45"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                  Talk to us.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Tell us what you're building. We'll show you how to bring it onchain with 
                  secure, compliant wallet infrastructure.
                </p>
              </motion.div>
            </div>

            {/* Right Contact Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        First Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Last Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Company name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Company website (or link to account on X or LinkedIn)<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      What best describes the industry your company is in?<span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 bg-white">
                      <option value="">Select an industry</option>
                      <option value="fintech">Fintech</option>
                      <option value="gaming">Gaming</option>
                      <option value="defi">DeFi</option>
                      <option value="nft">NFT/Digital Collectibles</option>
                      <option value="infrastructure">Infrastructure</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Anything else?
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 resize-none"
                      placeholder="Tell us more about your project, needs, or timeline."
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-500 text-white text-xs px-3 py-2 rounded flex items-center space-x-2">
                      <span>🔒</span>
                      <span>protected by reCAPTCHA</span>
                    </div>
                    <div className="bg-gray-100 rounded p-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full animate-spin"></div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-all duration-200 font-semibold text-lg"
                  >
                    Submit
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000' fill-opacity='1'%3e%3cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
          }}></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-16 left-16 w-3 h-3 border border-black/10 rotate-45"></div>
        <div className="absolute top-24 right-24 w-2 h-2 bg-black/5 rotate-45"></div>
        <div className="absolute bottom-16 left-1/3 w-4 h-4 border border-black/10 rounded-full"></div>
        <div className="absolute bottom-20 right-16 w-3 h-3 border border-black/10 rotate-45"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-4"
          >
            <span className="text-lg font-medium text-gray-900">Subscribe to the Privy monthly</span>
            <div className="flex items-center space-x-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 bg-gray-50 text-gray-600 placeholder-gray-500 min-w-[200px]"
              />
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Column */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-lg">⚡</span>
                <h3 className="font-semibold text-gray-900">Product</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Wallet infrastructure</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Onboarding</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Key management</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Demo</a></li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-lg">🔧</span>
                <h3 className="font-semibold text-gray-900">Solutions</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Fintech + payments</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Defi + trading</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Consumer</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Gaming</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">AI agents</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-lg">●</span>
                <h3 className="font-semibold text-gray-900">Company</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Customer love</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Brand guidelines</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-lg">♦</span>
                <h3 className="font-semibold text-gray-900">Resources</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy policy</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">User terms of service</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Dev terms of service</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Bug bounty</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Embedded wallets 101</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col lg:flex-row justify-between items-center pt-12 mt-12 border-t border-gray-100">
            <div className="flex items-center space-x-6 mb-6 lg:mb-0">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-lg font-medium text-gray-900">Technical decisions are moral decisions.</span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <span className="text-xl">🌐</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <span className="text-xl">📝</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <span className="text-xl">✕</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <span className="text-xl">💻</span>
                </a>
              </div>
              <span className="text-sm text-gray-500">©2025 Horkos, Inc.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;