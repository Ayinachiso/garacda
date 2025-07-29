import { 
  DollarSign, 
  Shield, 
  Users, 
  Heart, 
  Leaf, 
  Bell 
} from 'lucide-react';

export default function Guidelines() {
  const guidelines = [
    {
      id: 1,
      icon: DollarSign,
      title: '1. Prompt Payment of Bills',
      description: 'Ensure timely payments to maintain services and support community initiatives.'
    },
    {
      id: 2,
      icon: Shield,
      title: '2. Safety First',
      description: 'Report any suspicious activities and adhere to local laws.'
    },
    {
      id: 3,
      icon: Users,
      title: '3. Engage and Participate',
      description: 'Join community events and contribute to local discussions.'
    },
    {
      id: 4,
      icon: Heart,
      title: '4. Help Your Neighbors',
      description: 'Offer assistance and support to fellow residents.'
    },
    {
      id: 5,
      icon: Leaf,
      title: '5. Keep Our Environment Clean',
      description: 'Dispose of waste responsibly and keep our community tidy.'
    },
    {
      id: 6,
      icon: Bell,
      title: '6. Stay Informed',
      description: 'Keep up with community news and updates regularly.'
    }
  ];

  return (
    <section id="guidelines" className="py-20 px-8 bg-dark text-text-light">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4">Community Guidelines</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        {/* Guidelines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guidelines.map((guideline, index) => (
            <div
              key={guideline.id}
              className="bg-white/5 border border-white/10 rounded-lg p-8 text-center transition-all duration-300 hover:bg-white/15 hover:-translate-y-2 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <guideline.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text-light mb-4">{guideline.title}</h3>
              <p className="text-text-light/80 leading-relaxed">{guideline.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 