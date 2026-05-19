/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { OUTCOMES } from './roadmapData';

export function Outcomes() {
  return (
    <section id="outcomes" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <header className="sr-only">
        <h2>Course Outcomes</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {OUTCOMES.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.article 
              key={idx}
              whileHover={{ y: -8, scale: 1.01 }}
              className="glass p-8 rounded-3xl group hover:border-electric-blue/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-all border border-white/5 group-hover:border-electric-blue/30">
                <Icon className="text-electric-blue group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-xl font-display font-bold mb-2 text-white group-hover:text-electric-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
