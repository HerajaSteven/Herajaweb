import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface EcosystemLayer {
  id: string;
  name: string;
  description: string;
  items: string[];
  color: string;
}

const layers: EcosystemLayer[] = [
  {
    id: 'organizations',
    name: 'Organizations',
    description: 'Government agencies, cooperatives, agribusinesses, financial institutions, and enterprise clients operating on the infrastructure.',
    items: ['Government', 'Cooperatives', 'Agribusiness', 'Financial Institutions', 'Enterprise Clients', 'Development Partners'],
    color: '#231F20',
  },
  {
    id: 'applications',
    name: 'Enterprise Applications',
    description: 'Specialized interfaces for different stakeholders to interact with the platform.',
    items: ['Farm Intelligence', 'Coordination Network', 'Logistics', 'Marketplace Portal', 'Operations Dashboard', 'Buyer Portal', 'Analytics Console'],
    color: '#4F9D5C',
  },
  {
    id: 'haos',
    name: 'HAOS',
    description: 'The Agricultural Operating Infrastructure — workflow engine, coordination, identity, and verification.',
    items: ['Workflow Engine', 'Coordination Hub', 'Identity Management', 'Verification System', 'Reporting', 'Messaging'],
    color: '#7AC142',
  },
  {
    id: 'services',
    name: 'Infrastructure Services',
    description: 'Shared capabilities that power every connected organization.',
    items: ['Traceability', 'AI & Intelligence', 'API Gateway', 'Data Layer', 'Security', 'Notifications'],
    color: '#C9782B',
  },
  {
    id: 'foundation',
    name: 'Heraja Infrastructure',
    description: 'The foundational cloud platform, governance, regional deployment, and compliance layer.',
    items: ['Cloud Platform', 'Infrastructure Governance', 'Regional Deployment', 'Monitoring', 'Compliance', 'Reliability'],
    color: '#5FA83D',
  },
];

export default function EcosystemExplorer() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  const activeData = layers.find((l) => l.id === activeLayer);

  return (
    <div className="w-full">
      {/* Stacked Layers */}
      <div className="space-y-1">
        {[...layers].reverse().map((layer, index) => {
          const isActive = activeLayer === layer.id;
          const reversedIndex = layers.length - 1 - index;
          return (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reversedIndex * 0.1, duration: 0.4 }}
              className={`relative cursor-pointer rounded-lg border-2 transition-all duration-normal ${
                isActive ? 'border-current shadow-lg' : 'border-transparent hover:border-neutral-200'
              }`}
              style={isActive ? { borderColor: layer.color, boxShadow: `0 4px 20px ${layer.color}20` } : {}}
              onClick={() => setActiveLayer(isActive ? null : layer.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveLayer(isActive ? null : layer.id)}
              aria-expanded={isActive}
            >
              <div
                className="px-5 py-4 rounded-lg flex items-center justify-between"
                style={{ backgroundColor: `${layer.color}10` }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: layer.color }}
                  />
                  <div>
                    <h4 className="text-h4 font-semibold text-brand-primary">{layer.name}</h4>
                    <p className="text-body-small text-neutral-500 mt-0.5 hidden sm:block">{layer.description.slice(0, 80)}...</p>
                  </div>
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-neutral-400 transition-transform duration-normal ${
                    isActive ? 'rotate-90' : ''
                  }`}
                />
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 pt-2 bg-white rounded-b-lg">
                      <p className="text-body text-neutral-700 mb-3">{layer.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {layer.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 text-body-small rounded-full font-medium"
                            style={{ backgroundColor: `${layer.color}15`, color: layer.color }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Active Detail Panel */}
      <AnimatePresence>
        {activeData && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-6 p-5 rounded-lg bg-surface-elevated border border-neutral-100"
          >
            <p className="text-body text-neutral-700">{activeData.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
