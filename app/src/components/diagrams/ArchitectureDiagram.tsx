import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Layer {
  name: string;
  items: string[];
  color: string;
}

const layers: Layer[] = [
  { name: 'Organization Layer', items: ['Governments', 'Cooperatives', 'Agribusiness', 'Financial Institutions'], color: '#231F20' },
  { name: 'Application Layer', items: ['Farm Intelligence', 'Coordination Network', 'Logistics', 'Marketplace', 'Analytics'], color: '#4F9D5C' },
  { name: 'HAOS Platform', items: ['Workflow Engine', 'Identity', 'Verification', 'Coordination'], color: '#7AC142' },
  { name: 'Infrastructure Services', items: ['Traceability', 'AI/ML', 'API Gateway', 'Data Layer'], color: '#C9782B' },
  { name: 'Foundation', items: ['Cloud', 'Security', 'Compliance', 'Monitoring'], color: '#5FA83D' },
];

export default function ArchitectureDiagram() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="w-full max-w-3xl mx-auto">
      <div className="space-y-2">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.name}
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative"
          >
            <div
              className="rounded-lg p-4 border"
              style={{
                backgroundColor: `${layer.color}08`,
                borderColor: `${layer.color}30`,
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: layer.color }} />
                <h4 className="font-semibold text-sm" style={{ color: layer.color }}>{layer.name}</h4>
              </div>
              <div className="flex flex-wrap gap-2 ml-5">
                {layer.items.map((item) => (
                  <span key={item} className="px-2 py-0.5 text-xs rounded bg-white border border-neutral-200 text-neutral-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {i < layers.length - 1 && (
              <div className="flex justify-center py-1">
                <div className="w-px h-3 bg-neutral-300" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
